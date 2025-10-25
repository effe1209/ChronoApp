// Gli import delle dipendenze sono stati RIMOSSI
// import { supabase } from './supabaseClient';
// import { uploadImage } from './utils/upload';
// import { isValidWatch } from './utils/validation';

// La firma della funzione ora accetta 'dependencies'
export const addWatchService = async (options, dependencies) => {
  // Estrai tutte le dipendenze di STATO dall'oggetto options
  const {
    newWatch,
    user,
    setLoading,
    setWatches,
    setNewWatch,
    setMessage,
  } = options;

  // Estrai tutte le dipendenze "TOOLS" dall'oggetto dependencies
  const { supabase, uploadImage, isValidWatch } = dependencies;

  setLoading(true);
  try {
    // La logica interna non cambia,
    // ma ora usa le variabili prese da 'dependencies'
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

