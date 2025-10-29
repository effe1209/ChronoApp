// watchService.js

// 1. IMPORTA LE SUE DIPENDENZE ("TOOLS")
import { supabase } from './supabaseClient';
import { uploadImage } from './imageService'; 
import { isValidWatch } from './validation';

// 2. La firma della funzione non cambia
export const addWatchService = async (options) => {
  const {
    newWatch,
    user,
    setLoading,
    setWatches,
    setNewWatch,
    setMessage,
  } = options;

  setLoading(true);
  try {
    // 3. Validazione (non cambia)
    if (!isValidWatch(newWatch)) {
      setMessage('Compila tutti i campi correttamente!');
      setLoading(false);
      return; 
    }
    console.log("Avvio dell'inserimento orologio...");

    // 4. SEPARA I DATI
    // 'features' è l'array di UUID, 'watchData' è il resto
    const { features, ...watchData } = newWatch;

    // 5. CARICA IMMAGINE (come prima)
    const imageUrl = newWatch.image
      ? await uploadImage(newWatch.image)
      : null;
    console.log('Immagine caricata con URL:', imageUrl);

    // 6. PASSO 1: Inserisci l'orologio e recupera il suo ID
    const { data: savedWatch, error: watchError } = await supabase
      .from('watches')
      .insert([{
        ...watchData,        // Dati come nome, marca, anno...
        userid: user.id,
        image: imageUrl      // L'URL dell'immagine caricata
      }])
      .select('id')   // <-- FONDAMENTALE: chiedi l'ID indietro
      .single();      // Ci aspettiamo un solo risultato

    if (watchError) {
      throw new Error("Errore durante l'inserimento dell'orologio: " + watchError.message);
    }

    const newWatchId = savedWatch.id; // <-- L'UUID che ci serviva
    console.log('Orologio salvato con ID:', newWatchId);

    // 7. PASSO 2: Inserisci le relazioni nella tabella ponte
    if (features && features.length > 0) {
      // Prepara l'array di oggetti per la tabella ponte
      const relationsToInsert = features.map(featureId => ({
        id_watch: newWatchId,
        id_caratteristica: featureId // Assumiamo che 'features' sia un array di UUID
      }));

      const { error: relationError } = await supabase
        .from('Orologi_Caratteristiche') // Nome della tua tabella ponte
        .insert(relationsToInsert);

      if (relationError) {
        // Errore critico: l'orologio è stato creato ma le caratteristiche no.
        // In un'app reale, qui dovresti cancellare l'orologio appena creato
        // (await supabase.from('watches').delete().eq('id', newWatchId);)
        throw new Error("Errore durante l'associazione delle caratteristiche: " + relationError.message);
      }
      console.log('caratteristiche associate con successo.');
    }

    // 8. PASSO 3: Aggiorna l'UI (con i dati completi)
    // Per aggiornare lo stato 'watches', dobbiamo recuperare l'orologio
    // completo di caratteristiche che abbiamo appena creato.
    const { data: completeNewWatch, error: fetchError } = await supabase
      .from('watches')
      .select('*, caratteristiche(*)') // Seleziona l'orologio e le sue caratteristiche
      .eq('id', newWatchId)
      .single();

    if (fetchError) {
      throw new Error("Errore nel recuperare l'orologio appena creato: " + fetchError.message);
    }
    
    // Aggiungi l'orologio completo alla lista
    setWatches((prevWatches) => [...prevWatches, completeNewWatch]);
    
    // 9. PASSO 4: Resetta il form (includendo 'features')
    setNewWatch({
      name: '',
      brand: '',
      year: '',
      image: '',
      movement: '',
      color: '#FFFFFF', // O il tuo colore default
      isFavorite: false,
      money: '',
      features: [] // <-- RESETTA ANCHE QUESTO
    });
    setMessage('Orologio aggiunto con successo!');

  } catch (error) {
    console.error("Errore durante l'inserimento:", error);
    setMessage(
      "Errore durante l'inserimento: " + (error.message || 'Si è verificato un errore.')
    );
  }
  setLoading(false);
};