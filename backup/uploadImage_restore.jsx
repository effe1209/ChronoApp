
const uploadImage = async (file) => {
    if (!file) return null;
    
    // ------------------------------------------
    // PASSO 1: COMPRESSIONE E RIDIMENSIONAMENTO
    // ------------------------------------------
    let fileToUpload = file;
    
    // Per un file più piccolo e ottimizzato:
    const MAX_WIDTH = 1200; // Larghezza massima desiderata
    const COMPRESSION_QUALITY = 0.8; // Qualità JPEG (0.0 a 1.0)
    
    try {
        const dataUrl = await new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(file);
        });

        const img = new Image();
        img.src = dataUrl;
        
        await new Promise(resolve => img.onload = resolve);
        
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        
        // Calcola il ridimensionamento
        const ratio = Math.min(MAX_WIDTH / img.width, 1);

        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;

        // Disegna l'immagine ridimensionata sul canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Converti il canvas in un Blob compresso (JPEG)
        const compressedBlob = await new Promise(resolve => {
            canvas.toBlob(resolve, "image/jpeg", COMPRESSION_QUALITY);
        });
        
        // Verifica la dimensione (solo per debug)
        console.log(`Foto originale: ${file.size / 1024} KB`);
        console.log(`Foto compressa: ${compressedBlob.size / 1024} KB`);
        
        // Crea un oggetto File dal Blob compresso per l'upload
        fileToUpload = new File([compressedBlob], file.name, { 
            type: compressedBlob.type, 
            lastModified: Date.now() 
        });

    } catch (e) {
        console.warn("Errore durante la compressione dell'immagine. Carico l'originale.", e);
        // In caso di errore nella compressione, useremo il 'file' originale.
        fileToUpload = file; 
    }

    // ------------------------------------------
    // PASSO 2: UPLOAD A SUPABASE
    // ------------------------------------------
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert("Devi essere loggato per caricare immagini!");
      return null;
    }

    const userId = user.id;
    // NOTA: Usiamo il nome originale 'file.name' ma carichiamo il 'fileToUpload' (che è il compresso)
    const fileName = `${userId}/${Date.now()}-${file.name}`; 
    const bucketName = "fotoWatch";

    const { data, error } = await supabase
      .storage
      .from(bucketName)
      // Carichiamo il file compresso
      .upload(fileName, fileToUpload, { 
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Errore nell'upload:", error);
      alert(`Errore durante il caricamento: ${error.message}`);
      return null;
    }

    // Costruisci l'URL pubblico
    return `https://htopqijsvgaqjrvvgpjh.supabase.co/storage/v1/object/public/${bucketName}/${fileName}`;
  };