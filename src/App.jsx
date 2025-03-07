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
    color: "",
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
  
        console.log("Dati restituiti dopo inserimento:", data);
      
  
        // Gestisci gli errori
        if (error) {
          throw error;
        }

        setNewWatch({ name: "", brand: "", year: "", image: "", movement: "" , color: ""});
        setMessage("Orologio aggiunto con successo!");
        fetchWatches(user.id);
      } else {
        setMessage("Compila tutti i campi correttamente!");
      }
    } catch (error) {
      console.error("Errore durante l'inserimento:", error);
      setMessage("Errore durante l'inserimento: " + (error.message || "Si è verificato un errore."));
    }
    setLoading(false);
  };


  const isValidWatch = (watch) => {
    return (
      watch.name.trim() !== "" &&
      watch.brand.trim() !== "" &&
      watch.year > 0 &&
      !isNaN(watch.year) &&
      watch.movement.trim() !== ""
    );
  };

  const uploadImage = async (file) => {
    if (!file) return null;
  
    if (!user.id) {
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
  
    console.log("Dati immagine caricata:", data);
  
    // Genera l'URL pubblico
    const { data: publicData, error: urlError } = supabase.storage
      .from("fotoWatch")
      .getPublicUrl(filePath);
  
    console.log("URL immagine pubblica:", publicData.publicUrl);
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
    setNewWatch({ name: "", brand: "", year: "", image: "", movement: "", color: ""});
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
      console.log("File compresso:", compressedFile);  // Verifica il file compresso
      setNewWatch((prev) => ({ ...prev, image: compressedFile })); // Salva il file compresso
      setMessage("Immagine caricata con successo!");
    } catch (error) {
      setMessage("Errore nel caricamento dell'immagine: " + error.message);
    }
  };


  // Orologio Funzionante
  var inc = 1000;

  async function clock() {
      const date = new Date();

      const hours = ((date.getHours() + 11) % 12 + 1);
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const hour = (hours + minutes / 60) * 30;
      const minute = (minutes + seconds / 60) * 6;
      const second = seconds * 6;

      // Correzione nei selettori e nei template string
      document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
      document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
      document.querySelector('.second').style.transform = `rotate(${second}deg)`;
  }

  const numbers = document.querySelectorAll(".number");
  const clockRadius = 145; // Raggio interno per i numeri
  const clockCenterX = 15; // Centro X del quadrante
  const clockCenterY = 12; // Centro Y del quadrante
  
  numbers.forEach((num, index) => {
      const angle = (index - 2) * 30; // Ogni numero è 30° più avanti rispetto al precedente
      const radian = angle * (Math.PI / 180);
  
      const x = clockCenterX + clockRadius * Math.cos(radian) - num.clientWidth / 2;
      const y = clockCenterY + clockRadius * Math.sin(radian) - num.clientHeight / 2;
  
      num.style.left = `${x}px`;
      num.style.top = `${y}px`;
  
      // Applica la rotazione opposta all'angolo per mantenere il testo dritto
      num.style.transform = `rotate(${(angle)+90}deg)`;
  });
  

  const dots = document.querySelectorAll(".dot");
  const clockRadiusDot = 170; // Raggio per i puntini (esterno ai numeri)
  const clockPointCenterX = 0; // Centro X del quadrante
  const clockPointCenterY = 0; // Centro Y del quadrante

  dots.forEach((dot, index) => {
      const angle = index * 30; // Ogni puntino è 30° più avanti rispetto al precedente
      const radian = angle * (Math.PI / 180);
  
      const x = clockPointCenterX + clockRadiusDot * Math.cos(radian) - dot.clientWidth / 2;
      const y = clockPointCenterY + clockRadiusDot * Math.sin(radian) - dot.clientHeight / 2;
  
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
  });
  


  clock();
  setInterval(clock, 1000);

  return (
    
    <div className="container">
      <div className="clockContainer">
        <div class="clock">
        <div class="wrap">
        <div class="numbers">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="number" data-num="1">I</div>
          <div class="number" data-num="2">II</div>
          <div class="number" data-num="3">III</div>
          <div class="number" data-num="4">IV</div>
          <div class="number" data-num="5">V</div>
          <div class="number" data-num="6">VI</div>
          <div class="number" data-num="7">VII</div>
          <div class="number" data-num="8">VIII</div>
          <div class="number" data-num="9">IX</div>
          <div class="number" data-num="10">X</div>
          <div class="number" data-num="11">XI</div>
          <div class="number" data-num="12">XII</div>
    <div class="hour"></div>
    <div class="minute"></div>
    <div class="second"></div>
    <div class="point"></div>
  </div>
</div>

        </div>
      </div>




      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
       {/*  <div style={{ display: "flex", alignItems: "center", width: "50%", justifyContent: "center" }}>
          <img src="romanClock.svg" width="150" height="150"/>
        </div> */}
        <div className="titleList" style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center" }}>
          <h1>La mia collezione di orologi</h1>
        </div>
      </div>


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
          <h3>Aggiungi un nuovo orologio</h3>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", width: "100%"}}>
              <div className="selectMenu">
                <label>
                  <strong>Movimento: </strong>
                </label>
                <div style={{ marginBottom: "10px" }}></div>
                <select
                  value={newWatch.movement}
                  onChange={(e) => setNewWatch({ ...newWatch, movement: e.target.value })}
                  style={{ width: "400px", textAlign: "center", display: "flex"}}
                >
                  <option className="menuTendina" value="">Seleziona il movimento</option>
                  <option className="menuTendina" value="Automatico">Automatico</option>
                  <option className="menuTendina" value="Carica Manuale">Carica Manuale</option>
                  <option className="menuTendina" value="Quarzo">Quarzo</option>
                </select>
              </div>

              <div className="selectMenu">
                <label>
                  <strong>Colore: </strong>
                </label>
                <div style={{ marginBottom: "10px" }}></div>
                <select
                  value={newWatch.color}
                  onChange={(e) => setNewWatch({ ...newWatch, color: e.target.value })}
                  style={{width: "400px", textAlign: "center", display: "flex"}}
                >
                  <option className="menuTendina" value="" style={{ textAlign: "center" }}>Seleziona colore quadrante</option>
                  <option className="menuTendina" value="Nero">Nero</option>
                  <option className="menuTendina" value="Blu">Blu</option>
                  <option className="menuTendina" value="Bianco">Bianco</option>
                  <option className="menuTendina" value="Verde">Verde</option>
                  <option className="menuTendina" value="Giallo">Giallo</option>
                  <option className="menuTendina" value="Rosso">Rosso</option>
                  <option className="menuTendina" value="Viola">Viola</option>
                  <option className="menuTendina" value="Marrone">Marrone</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "10px" }}></div>
            <div className="inputImmagine">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{width:"25%", marginBottom:"2px"}}
              />
            </div>
            {newWatch.image && (
                <img
                  src={URL.createObjectURL(newWatch.image)}
                  alt="Anteprima"
                  className="preview-image"
                />
              )}
            <div style={{ marginBottom: "30px" }}></div>
            <div className="buttonForm">
              <button onClick={handleAddWatch}>Salva</button>
              <button onClick={handleCancel}>Annulla</button>
            </div>
          </div>


          <h2>Lista Orologi</h2>
          <div className="watch-list">
            {watches.map((watch) => (
              <div key={watch.id} className="watch-card">
                {watch.image ? (
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="watch-image"
                    onError={(e) => {
                      e.target.src = "/fallback-image.jpg";
                    }}
                  />
                ) : (
                  <p>Nessuna immagine disponibile</p>
                )}
                <h4>{watch.brand}</h4>
                <h3 className="textCard">{watch.name}</h3>
                <p>
                  {watch.movement} - {watch.year}
                  {watch.color ? ' - '+watch.color : ''}
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
