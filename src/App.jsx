import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import imageCompression from "browser-image-compression";
import "./App.css";

const supabaseUrl = "https://htopqijsvgaqjrvvgpjh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0b3BxaWpzdmdhcWpydnZncGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMjQyOTcsImV4cCI6MjA1NjYwMDI5N30.pVzMwoPz1VL3EikMUbDaBwA6X47ehZb2Wu-P9-wk2a0";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const fileInputRef = useRef(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [watches, setWatches] = useState([]);
  const [newWatch, setNewWatch] = useState({
    name: "",
    brand: "",
    year: "",
    image: "",
    movement: "",
  });
  const [loading, setLoading] = useState(false);

  // Funzione per testare la connessione al database
const testConnection = async () => {
  try {
    const { data, error } = await supabase.rpc("now");
    if (error) {
      console.error("Errore di connessione a Supabase:", error);
    } else {
      console.log("Connessione a Supabase riuscita!");
    }
  } catch (err) {
    console.error("Errore imprevisto durante la connessione:", err);
  }
};

  useEffect(() => {
    testConnection();
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        fetchWatches(session.user.id); // Passa l'ID utente per il fetch
      }
    };
    fetchUser();
  }, []);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      setMessage(
        "Registrazione avvenuta con successo! Controlla la tua email per confermare l'account.",
      );
      setTimeout(() => fetchUser(), 3000); // Ricarica l'utente dopo 3 secondi
    } catch (error) {
      setMessage("Errore: " + (error.message || "Si è verificato un errore."));
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Effettua la richiesta di login
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      // Se c'è un errore, lo gestiamo
      if (error) {
        console.error("Errore di login:", error);
        throw error;
      }
  
      // Se il login è andato a buon fine
      if (data.user) {
        setUser(data.user); // Imposta l'utente
        setMessage("Accesso effettuato con successo!");
        console.log("Dati utente:", data.user);
  
        // Carica gli orologi subito dopo il login
        fetchWatches(data.user.id);
      } else {
        setMessage("Accesso non riuscito: Nessun utente trovato.");
      }
    } catch (error) {
      console.error("Errore durante il login:", error);
      setMessage("Errore: " + (error.message || "Si è verificato un errore."));
    } finally {
      setLoading(false);
    }
  };
  
  

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setWatches([]);
    setMessage("Disconnessione effettuata.");
  };

  const handleAddWatch = async () => {
    setLoading(true);
    try {
      // Verifica se il form è valido
      if (isValidWatch(newWatch)) {
        console.log("Avvio dell'inserimento orologio");
  
        // Carica l'immagine se presente
        const imageUrl = newWatch.image ? await uploadImage(newWatch.image) : null;
        console.log("Immagine caricata con URL:", imageUrl);
  
        // Inserisci i dati nel database
        const { data, error } = await supabase
          .from("watches")
          .insert([{ ...newWatch, userid: user.id, image: imageUrl }]);
  
        // Gestisci gli errori
        if (error) {
          throw error;
        }
  
        // Verifica se i dati sono correttamente stati inseriti
        if (data && data.length > 0) {
          setWatches((prev) => [...prev, data[0]]);
          setNewWatch({ name: "", brand: "", year: "", image: "", movement: "" });
          setMessage("Orologio aggiunto con successo!");
        } else {
          setMessage("Nessun orologio trovato dopo l'inserimento.");
        }
      } else {
        setMessage("Compila tutti i campi correttamente!");
      }
    } catch (error) {
      console.error("Errore durante l'inserimento:", error);
      setMessage("Errore durante l'inserimento: " + (error.message || "Si è verificato un errore."));
    } finally {
      setLoading(false);
    }
  };
  

  const isValidWatch = (watch) => {
    return (
      watch.name.trim() !== "" &&
      watch.brand.trim() !== "" &&
      watch.year > 0 &&
      !isNaN(watch.year) &&
      watch.movement.trim() !== "" &&
      (watch.image.trim() === "" || isValidImage(watch.image))
    );
  };

  const uploadImage = async (file) => {
    if (!file) return null;

    const user = supabase.auth.user();
    if (!user) {
      console.error("Utente non autenticato");
      return null;
    }

    const filePath = `watches/${user.id}/${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("fotoWatch")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type,
      });

    if (error) {
      console.error("Errore nel caricamento dell'immagine:", error.message);
      return null;
    }

    // Genera l'URL pubblico
    const { data: publicData } = supabase.storage
      .from("fotoWatch")
      .getPublicUrl(filePath);

    return publicData.publicUrl;
  };

  const deleteImage = async (imageUrl) => {
    if (!imageUrl) return;

    const filePath = imageUrl.split("/storage/v1/object/public/fotoWatch/")[1];

    const { error } = await supabase.storage
      .from("fotoWatch")
      .remove([filePath]);

    if (error) {
      console.error("Errore nell'eliminazione dell'immagine:", error.message);
    }
  };

  const handleDeleteWatch = async (id, imageUrl) => {
    try {
      if (imageUrl) {
        await deleteImage(imageUrl);
      }

      const { error } = await supabase.from("watches").delete().eq("id", id);
      if (error) throw error;
      fetchWatches(user.id); // Ricarica la lista degli orologi
      setMessage("Orologio eliminato con successo!");
    } catch (error) {
      setMessage(
        "Errore durante l'eliminazione: " +
          (error.message || "Si è verificato un errore."),
      );
    }
  };

  const fetchWatches = async (userid) => {
    try {
      const { data, error } = await supabase
        .from("watches")
        .select("*")
        .eq("userid", userid);
      if (error) throw error;

      const userWatches = data.map((watch) => ({
        ...watch,
        imageUrl: watch.image
          ? supabase.storage.from("fotoWatch").getPublicUrl(watch.image).data
              .publicUrl
          : null,
      }));

      setWatches(userWatches);
    } catch (error) {
      setMessage(
        "Errore durante il recupero degli orologi: " +
          (error.message || "Si è verificato un errore."),
      );
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
      setNewWatch((prev) => ({ ...prev, image: compressedFile })); // Salva il file compresso
      setMessage("Immagine caricata con successo!");
    } catch (error) {
      setMessage("Errore nel caricamento dell'immagine: " + error.message);
    }
  };

  return (
    <div className="container">
      <h1>La mia collezione di orologi</h1>
      {message && <p className="message">{message}</p>}
      {loading && <p>Loading...</p>}

      {!user ? (
        <div className="form">
          <h2>Registrati o Accedi</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <h2>Aggiungi un nuovo orologio</h2>
          <div className="form">
            <input
              type="text"
              placeholder="Nome"
              value={newWatch.name}
              onChange={(e) =>
                setNewWatch({ ...newWatch, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Marca"
              value={newWatch.brand}
              onChange={(e) =>
                setNewWatch({ ...newWatch, brand: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Anno"
              value={newWatch.year}
              onChange={(e) =>
                setNewWatch({ ...newWatch, year: e.target.value })
              }
            />
            <div style={{ marginBottom: "10px" }}></div>
            <label>
              <strong>Movimento: </strong>
            </label>
            <select
              value={newWatch.movement}
              onChange={(e) =>
                setNewWatch({ ...newWatch, movement: e.target.value })
              }
            >
              <option value="">Seleziona il movimento</option>
              <option value="Automatico">Automatico</option>
              <option value="Carica Manuale">Carica Manuale</option>
              <option value="Quarzo">Quarzo</option>
            </select>
            <div style={{ marginBottom: "10px" }}></div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
            />
            {newWatch.image && (
              <img
                src={URL.createObjectURL(newWatch.image)}
                alt="Anteprima"
                className="preview-image"
              />
            )}
            <div style={{ marginBottom: "10px" }}></div>
            <div className="buttonForm">
              <button onClick={handleAddWatch}>Salva</button>
              <button onClick={handleCancel}>Annulla</button>
            </div>
          </div>

          <div style={{ marginBottom: "50px" }}></div>
          <h2>Lista Orologi</h2>
          <div className="watch-list">
            {watches.map((watch) => (
              <div key={watch.id} className="watch-card">
                {watch.imageUrl ? (
                  <img
                    src={watch.imageUrl}
                    alt={watch.name}
                    className="watch-image"
                    onError={(e) => {
                      e.target.src = "/fallback-image.jpg";
                    }}
                  />
                ) : (
                  <p>Nessuna immagine disponibile</p>
                )}
                <h3>{watch.name}</h3>
                <p>
                  {watch.brand} - {watch.year} - {watch.movement}
                </p>
                <div className="delete-button">
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteWatch(watch.id, watch.image)}
                  >
                    Elimina
                  </button>
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
