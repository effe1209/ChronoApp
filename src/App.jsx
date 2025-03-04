<<<<<<< HEAD
import { useState, useEffect, useRef } from "react";
import { createClient } from '@supabase/supabase-js';
import imageCompression from 'browser-image-compression';
import "./App.css";


const supabaseUrl = "https://htopqijsvgaqjrvvgpjh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0b3BxaWpzdmdhcWpydnZncGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMjQyOTcsImV4cCI6MjA1NjYwMDI5N30.pVzMwoPz1VL3EikMUbDaBwA6X47ehZb2Wu-P9-wk2a0"

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const fileInputRef = useRef(null);
  const [user, setUser ] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [watches, setWatches] = useState([]);
  const [newWatch, setNewWatch] = useState({ name: "", brand: "", year: "", image: "", movement: "" });

  const testConnection = async () => {
    const { data, error } = await supabase
      .from('watches') // Assicurati che il nome della tabella sia corretto
      .select('*');
    
    if (error) {
      console.error("Errore nella connessione:", error);
    } else {
      console.log("Dati ricevuti:", data);
    }
  };
  
  testConnection();
  
  useEffect(() => {
    const fetchUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            setUser(session.user);
            fetchWatches();
        }
    };
    fetchUser();
  }, []);

  const handleRegister = async () => {
    try {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;

        setMessage("Registrazione avvenuta con successo! Controlla la tua email per confermare l'account.");

        // Controlla la sessione dopo la registrazione
        setTimeout(async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setUser(session.user);
            }
        }, 3000); // Attendi qualche secondo per la sincronizzazione
    } catch (error) {
        setMessage(error.message);
    }
};



  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      setUser(data.user);
      setMessage("Accesso effettuato con successo!");

      if (error) throw error;
      setUser(user);
      setMessage("Accesso effettuato con successo!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setWatches([]);
    setMessage("Disconnessione effettuata.");
  };

  const handleAddWatch = async () => {
    if (isValidWatch(newWatch)) {
      setLoading(true);
      try {
        const imageUrl = await uploadImage(newWatch.image);
        const { data, error } = await supabase
          .from('watches')
          .insert([{ ...newWatch, userId: user.id }]);
        if (error) throw error;

        setWatches((prev) => [...prev, data[0]]);
        setNewWatch({ name: "", brand: "", year: "", image: "", movement: "" });
        setMessage("Orologio aggiunto con successo!");
      } catch (error) {
        setMessage("Errore durante l'inserimento: " + error.message);
      }
    } else {
      setMessage("Compila tutti i campi correttamente!");
    }
  };

  const isValidWatch = (watch) => {
    return (
      watch.name.trim() !== "" &&
      watch.brand.trim() !== "" &&
      watch.year > 0 && !isNaN(watch.year) &&
      watch.movement.trim() !== "" &&
      (watch.image.trim() === "" || isValidImage(watch.image))
    );
  };

  const uploadImage = async (file) => {
    // Controlla e aggiorna la sessione
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !session) {
        console.error("Errore nel recupero della sessione:", sessionError?.message);
        return null;
    }

    const user = session.user; // Prende i dati aggiornati dell'utente
    if (!user) {
        console.error("L'utente non è autenticato!");
        return null;
    }

    const filePath = `watches/${user.id}/${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
        .from('fotoWatch')
        .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false,
            contentType: file.type
        });

    if (error) {
        console.error("Errore nel caricamento dell'immagine:", error.message);
        return null;
    }

    return filePath;
};


  const deleteImage = async (imageUrl) => {
    if (!imageUrl) return;

    const filePath = imageUrl.split('/storage/v1/object/public/images/')[1];

    const { error } = await supabase.storage
      .from('images')
      .remove([filePath]);

    if (error) {
      console.error("Errore nell'eliminazione dell'immagine:", error.message);
=======
  const fetchWatches = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "watches"));
      const userWatches = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).filter(watch => watch.userId === user?.uid);
      setWatches(userWatches);
    } catch (error) {
      setMessage(error.message);
>>>>>>> parent of 2ba548d (fix image)
    }
  };

  const handleDeleteWatch = async (id) => {
    try {
<<<<<<< HEAD
      if (imageUrl) {
        await deleteImage(imageUrl); // Elimina l'immagine prima
      }
  
      const { error } = await supabase
        .from('watches')
        .delete()
        .eq('id', id);
      if (error) throw error;
      fetchWatches();
      setMessage("Orologio eliminato con successo!");
    } catch (error) {
      setMessage("Errore durante l'eliminazione: " + error.message);
    }
  };
  

  const fetchWatches = async () => {
    try {
      const { data, error } = await supabase
        .from('watches')
        .select('*')
        .eq('userId', user.id);  // Usa l'ID dell'utente per filtrare gli orologi
      if (error) throw error;
  
      const userWatches = await Promise.all(data.map(async (watch) => {
        if (watch.image) {
          const { publicURL, error } = supabase.storage
            .from('fotoWatch')
            .getPublicUrl(watch.image);
          if (error) throw error;
          watch.imageUrl = publicURL;
        }
        return watch;
      }));
  
      setWatches(userWatches);
    } catch (error) {
      setMessage(error.message);
    }
  };
  

  const handleCancel = () => {
    setNewWatch({ name: "", brand: "", year: "", image: "", movement: "" });
    setMessage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };
  
    try {
      const compressedFile = await imageCompression(file, options);
      const imageUrl = await uploadImage(compressedFile);
  
      if (imageUrl) {
        setNewWatch((prev) => ({ ...prev, image: imageUrl }));
        setMessage("Immagine caricata con successo!");
      } else {
        setMessage("Errore nel caricamento dell'immagine.");
      }
    } catch (error) {
      setMessage("Errore nel caricamento dell'immagine: " + error.message);
=======
      await deleteDoc(doc(db, "watches", id));
      fetchWatches();
      setMessage("Orologio eliminato con successo!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewWatch({ ...newWatch, image: reader.result });
      };
      reader.readAsDataURL(file);
>>>>>>> parent of 2ba548d (fix image)
    }
  };
  

  return (
    <div className="container">
      <h1>La mia collezione di orologi</h1>
      {message && <p className="message">{message}</p>}

      {!user ? (
        <div className="form">
          <h2>Registrati o Accedi</h2>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="button-group">
            <div className="buttonForm">
              <button onClick={handleRegister}>Registrati</button>
              <button onClick={handleLogin}>Accedi</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="buttonForm">
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
          <h2>Aggiungi un nuovo orologio</h2>
          <div className="form">
            <input type="text" placeholder="Nome" value={newWatch.name} onChange={(e) => setNewWatch({ ...newWatch, name: e.target.value })} />
            <input type="text" placeholder="Marca" value={newWatch.brand} onChange={(e) => setNewWatch({ ...newWatch, brand: e.target.value })} />
            <input type="number" placeholder="Anno" value={newWatch.year} onChange={(e) => setNewWatch({ ...newWatch, year: e.target.value })} />
            <div style={{ marginBottom: "10px" }}></div>
            <label><strong>Movimento: </strong></label>
            <select value={newWatch.movement} onChange={(e) => setNewWatch({ ...newWatch, movement: e.target.value })}>
              <option value="">Seleziona il movimento</option>
              <option value="Automatico">Automatico</option>
              <option value="Carica Manuale">Carica Manuale</option>
              <option value="Quarzo">Quarzo</option>
            </select>
<<<<<<< HEAD
            <div style={{ marginBottom: "10px" }}></div>
            <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} />
            {newWatch.image && <img src={newWatch.image} alt="Anteprima" className="preview-image" />}
            <div style={{ marginBottom: "10px" }}></div>
=======
            <div style={{ marginBottom: "10px" }}></div> {/* Spazio extra */}
            
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {newWatch.image && <img src={newWatch.image} alt="Anteprima" className="preview-image" />}
              <div style={{ marginBottom: "10px" }}></div> {/* Spazio extra */}
>>>>>>> parent of 2ba548d (fix image)
            <div className="buttonForm">
              <button onClick={handleAddWatch}>Salva</button>
              <button onClick={() => setShowBanner(false)}>Annulla</button>
            </div>
          </div>

          <div style={{ marginBottom: "50px" }}></div>
          <h2>Lista Orologi</h2>
          <div className="watch-list">
            {watches.map((watch) => (
              <div key={watch.id} className="watch-card">
<<<<<<< HEAD
                {watch.imageUrl ? (
                  <img
                    src={watch.imageUrl}
                    alt={watch.name}
                    className="watch-image"
                    onError={(e) => { e.target.src = "/fallback-image.jpg"; }}
                  />
                ) : (
                  <p>Nessuna immagine disponibile</p>
                )}
=======
>>>>>>> parent of 2ba548d (fix image)
                <h3>{watch.name}</h3>
                <p>{watch.brand} - {watch.year} - {watch.movement}</p>
                <div className="delete-button">
                  <button className="delete-btn" onClick={() => handleDeleteWatch(watch.id, watch.image)}>Elimina</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;