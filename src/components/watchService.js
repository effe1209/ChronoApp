// watchService.js (Approccio 1 - Modulare)

// 1. IMPORTA LE SUE DIPENDENZE ("TOOLS")
// Corretti i percorsi. './' significa "cerca nella stessa cartella".
// (Assumo che i tuoi file si chiamino così)
import { supabase } from './supabaseClient';
import { uploadImage } from './imageService'; // O './uploadImage' se hai chiamato il file così
import { isValidWatch } from './validation';

// 2. La firma della funzione ora accetta SOLO 'options'
export const addWatchService = async (options) => {
  // Estrai tutte le dipendenze di STATO dall'oggetto options
  const {
    newWatch,
    user,
    setLoading,
    setWatches,
    setNewWatch,
    setMessage,
  } = options;

  // 3. Il blocco "dependencies" è stato RIMOSSO
  //    perché le dipendenze sono importate in cima al file.

  setLoading(true);
  try {
    // 4. La logica interna non cambia.
    //    Ora usa 'isValidWatch', 'uploadImage', e 'supabase'
    //    che provengono dagli IMPORT in cima al file.
    if (isValidWatch(newWatch)) {
      console.log("Avvio dell'inserimento orologio");

      const imageUrl = newWatch.image
        ? await uploadImage(newWatch.image)
        : null;
      console.log('Immagine caricata con URL:', imageUrl);

      const { data, error } = await supabase
        .from('watches')
        .insert([{ ...newWatch, userid: user.id, image: imageUrl }])
        .select('*');

      if (error) {
        throw error;
      }

      setWatches((prevWatches) => [...prevWatches, data[0]]);
      setNewWatch({
        name: '',
        brand: '',
        year: '',
        image: '',
        movement: '',
        color: '',
        isFavorite: false,
        money: '',
      });
      setMessage('Orologio aggiunto con successo!');
    } else {
      setMessage('Compila tutti i campi correttamente!');
    }
  } catch (error) {
    console.error("Errore durante l'inserimento:", error);
    setMessage(
      "Errore durante l'inserimento: " + (error.message || 'Si è verificato un errore.')
    );
  }
  setLoading(false);
};

// Potresti aggiungere qui altre funzioni in futuro
// export const deleteWatchService = async (options) => { ... }
// export const fetchWatchesService = async (options) => { ... }
