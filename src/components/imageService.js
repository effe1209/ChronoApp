// Questo service è ora autonomo.
// Importa da solo la dipendenza di cui ha bisogno: il client Supabase.
import { supabase } from './supabaseClient'; // Assicurati che il percorso relativo sia corretto

/**
 * Gestisce la compressione e l'upload di un file immagine su Supabase Storage.
 * @param {File} file - Il file immagine da caricare (preso dall'input <input type="file">)
 * @returns {Promise<string|null>} L'URL pubblico dell'immagine caricata, o null in caso di errore.
 */
export const uploadImage = async (file) => {
    if (!file) return null;
    
    // ------------------------------------------
    // PASSO 1: COMPRESSIONE E RIDIMENSIONAMENTO
    // (Questa è la tua logica, estratta da App.jsx)
    // ------------------------------------------
    let fileToUpload = file;
    
    const MAX_WIDTH = 1200; // Larghezza massima
    const COMPRESSION_QUALITY = 0.8; // Qualità JPEG
    
    try {
        // Converti File in Data URL per leggerlo
        const dataUrl = await new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(file);
        });

        // Crea un oggetto Immagine per il ridimensionamento
        const img = new Image();
        img.src = dataUrl;
        
        await new Promise(resolve => img.onload = resolve);
        
        // Usa il Canvas per ridimensionare e comprimere
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        
        // Calcola il rapporto di ridimensionamento
        const ratio = Math.min(MAX_WIDTH / img.width, 1);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;

        // Disegna l'immagine ridimensionata sul canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Converte il canvas in un Blob compresso (JPEG)
        const compressedBlob = await new Promise(resolve => {
            canvas.toBlob(resolve, "image/jpeg", COMPRESSION_QUALITY);
        });
        
        console.log(`Foto originale: ${file.size / 1024} KB`);
        console.log(`Foto compressa: ${compressedBlob.size / 1024} KB`);
        
        // Crea un nuovo oggetto File dal Blob compresso per l'upload
        fileToUpload = new File([compressedBlob], file.name, { 
            type: compressedBlob.type, 
            lastModified: Date.now() 
        });

    } catch (e) {
        console.warn("Errore durante la compressione dell'immagine. Carico l'originale.", e);
        // In caso di errore, carica il file originale non compresso
        fileToUpload = file; 
    }

    // ------------------------------------------
    // PASSO 2: UPLOAD A SUPABASE
    // (Questa logica ora usa 'supabase' importato)
    // ------------------------------------------
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert("Devi essere loggato per caricare immagini!");
      return null;
    }

    const userId = user.id;
    // Crea un nome file unico
    const fileName = `${userId}/${Date.now()}-${file.name}`; 
    const bucketName = "fotoWatch"; // Il nome del tuo bucket

    const { data, error } = await supabase
      .storage
      .from(bucketName)
      // Carica il file (compresso o originale)
      .upload(fileName, fileToUpload, { 
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Errore nell'upload:", error);
      alert(`Errore during il caricamento: ${error.message}`);
      return null;
    }

    // Costruisci e restituisci l'URL pubblico
    return `https://htopqijsvgaqjrvvgpjh.supabase.co/storage/v1/object/public/${bucketName}/${fileName}`;
};

