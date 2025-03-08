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
  const colorInputRef = useRef(null);
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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin(); // Chiamata alla funzione di login
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
  
        // Verifica se l'errore riguarda l'email non registrata
        if (error.message.includes('invalid_credentials')) {
          setMessage('Questa email non è registrata. Per favore, registrati.');
        } else {
          setMessage('Errore nel login. Controlla le tue credenziali.');
        }
  
        throw error; // Rilancia l'errore per gestirlo nel catch
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
      if (isValidWatch(newWatch)) {
        console.log("Avvio dell'inserimento orologio");

        // Carica l'immagine e ottieni l'URL
        const imageUrl = newWatch.image ? await uploadImage(newWatch.image) : null;
        console.log("Immagine caricata con URL:", imageUrl);

        // Inserisci i dati nel database
        const { data, error } = await supabase
          .from("watches")
          .insert([{ ...newWatch, userid: user.id, image: imageUrl }])
          .select("*"); // Recupera i dati appena inseriti

        if (error) {
          throw error;
        }

        // Aggiorna la lista locale degli orologi per mostrare subito quello nuovo
        setWatches((prevWatches) => [...prevWatches, data[0]]);

        setNewWatch({ name: "", brand: "", year: "", image: "", movement: "", color: "" });
        setMessage("Orologio aggiunto con successo!");
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

 // Funzione per gestire la selezione del file
 const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    setNewWatch((prev) => ({ ...prev, image: file }));
  }
};


const [isModalVisible, setIsModalVisible] = useState(false);
const [selectedWatch, setSelectedWatch] = useState(null);

const handleDayWatch = async (userid) => {
  try {
    // Recupera la lista degli orologi associati all'utente
    const { data, error } = await supabase
      .from('watches')
      .select('*')
      .eq('userid', userid);

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      // Seleziona un orologio casuale
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomWatch = data[randomIndex];
      
      // Imposta l'orologio selezionato
      setSelectedWatch(randomWatch);
      setIsModalVisible(true); // Mostra la modale con i dettagli dell'orologio
    } else {
      console.log('Nessun orologio trovato per questo utente.');
    }
  } catch (error) {
    console.error('Errore nel recupero dell\'orologio:', error.message);
  }
};


const [isModifyVisible, setIsModifyVisible] = useState(false);
const [modifyWatch, setModifyWatch] = useState(null);
const [updatedWatch, setUpdatedWatch] = useState({
  name: '',
  brand: '',
  year: '',
  movement: '',
  color: '',
  image: '', // Questo campo verrà aggiornato quando viene selezionata un'immagine
});

const handleModifyWatch = async (userid, watchid) => {
  const { data, error } = await supabase
      .from('watches')
      .select('*')
      .eq('userid', userid)
      .eq('id', watchid);

  if (error) {
    console.error("Errore nel recupero dell'orologio:", error);
    return;
  }
  if (data && data.length > 0) {
    const watch = data[0];
    setModifyWatch(watch);
    setUpdatedWatch({
      name: watch.name,
      brand: watch.brand,
      year: watch.year,
      movement: watch.movement,
      color: watch.color,
      image: watch.image || '', // Se l'immagine è vuota, assegna una stringa vuota
    });
    setIsModifyVisible(true);
  }
}

const handleSaveChanges = async () => {
  try {
    let updatedData = { ...updatedWatch };

    // Ottieni il percorso dell'immagine esistente se presente
    const oldImageUrl = modifyWatch.image; 

    // Se c'è una nuova immagine, caricala su Supabase Storage e ottieni l'URL
    if (newWatch.image instanceof File) {
      const imageUrl = await uploadImage(newWatch.image);
      console.log("Immagine caricata con URL:", imageUrl);
      
      // Aggiorna il campo immagine con il nuovo URL
      updatedData.image = imageUrl;

      // Se esiste un'immagine precedente, eliminarla
      if (oldImageUrl) {
        await deleteImage(oldImageUrl);
      }
    }

    // Aggiorna il database con i nuovi dati
    const { error } = await supabase
      .from('watches')
      .update(updatedData)
      .eq('id', modifyWatch.id);

    if (error) {
      console.error("Errore nell'aggiornamento dell'orologio:", error);
      return;
    }

    console.log("Orologio aggiornato con successo!");
    setIsModifyVisible(false);
    
  } catch (error) {
    console.error("Errore durante il salvataggio delle modifiche:", error);
  }
};


// Gestione del caricamento immagine
const handleImageModify = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUpdatedWatch(prevState => ({
        ...prevState,
        image: reader.result, // Imposta il risultato dell'immagine come URL di base64
      }));
    };
    reader.readAsDataURL(file);
  }
}



const uploadImage = async (file) => {
  if (!file) return null;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    alert("Devi essere loggato per caricare immagini!");
    return null;
  }

  const userId = user.id;
  const fileName = `${userId}/${Date.now()}-${file.name}`;
  const bucketName = "fotoWatch";

  const { data, error } = await supabase
    .storage
    .from(bucketName)
    .upload(fileName, file, {
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

      // Controlla se gli elementi esistono prima di modificarli
      const hourHand = document.querySelector('.hour');
      const minuteHand = document.querySelector('.minute');
      const secondHand = document.querySelector('.second');

      if (hourHand) {
          hourHand.style.transform = `rotate(${hour}deg)`;
      }
      if (minuteHand) {
          minuteHand.style.transform = `rotate(${minute}deg)`;
      }
      if (secondHand) {
          secondHand.style.transform = `rotate(${second}deg)`;
      }
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
        <div className="clock">
        <div className="wrap">
        <div className="numbers">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="number" data-num="1">I</div>
          <div className="number" data-num="2">II</div>
          <div className="number" data-num="3">III</div>
          <div className="number" data-num="4">IV</div>
          <div className="number" data-num="5">V</div>
          <div className="number" data-num="6">VI</div>
          <div className="number" data-num="7">VII</div>
          <div className="number" data-num="8">VIII</div>
          <div className="number" data-num="9">IX</div>
          <div className="number" data-num="10">X</div>
          <div className="number" data-num="11">XI</div>
          <div className="number" data-num="12">XII</div>
    <div className="hour"></div>
    <div className="minute"></div>
    <div className="second"></div>
    <div className="point"></div>
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
            onKeyDown={handleKeyDown} // Aggiungi l'evento onKeyDown
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

          <div className="titleList">
            <h3 style={{padding:"20px"}}>Aggiungi un nuovo orologio</h3>
          </div>
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
                  style={{textAlign: "center", display: "flex"}}
                >
                  <option className="menuTendina" value="">Seleziona il movimento</option>
                  <option className="menuTendina" value="Automatico">Automatico</option>
                  <option className="menuTendina" value="Carica Manuale">Carica Manuale</option>
                  <option className="menuTendina" value="Quarzo">Quarzo</option>
                </select>
              </div>
              <label>
                  <strong>Colore: </strong>
                </label>
              <div className="color-picker-container">
                {/* Input nascosto */}
                <div style={{width:"10px", position:"absolute"}}>
                  <input
                    type="color"
                    id="color"
                    ref={colorInputRef}
                    className="hidden-color-input"
                    value={newWatch.color}
                    onChange={(e) => setNewWatch({ ...newWatch, color: e.target.value })}
                  />
                </div>
                {/* Bottone personalizzato */}
                <button
                  className="color-picker-button"
                  onClick={() => colorInputRef.current.click()}
                  style={{ backgroundColor: newWatch.color || "#ffffff" }}
                >
                  🎨 Scegli un colore
                </button>

                {/* Mostra il colore selezionato */}
                {newWatch.color && <p className="selected-color">Colore selezionato: {newWatch.color}</p>}
              </div>
            </div>

            <div style={{ marginBottom: "10px" }}></div>
            <div className="upload-container">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="hidden-input"
                id="file-upload"
              />
              {/* Bottone personalizzato */}
              <button className="upload-button" onClick={() => fileInputRef.current.click()}>
                📸 Seleziona un'immagine
              </button>
            </div>
            {newWatch.image && (
                <img
                  src={URL.createObjectURL(newWatch.image)}
                  alt="Anteprima"
                  className="preview-image"
                  width="100"
                />
            )}
            
            <div style={{ marginBottom: "30px" }}></div>
            <div className="buttonForm">
              <button onClick={handleAddWatch}>Salva</button>
              <button onClick={handleCancel}>Annulla</button>
            </div>
          </div>

          <div style={{width: "100%", display:"flex", position:"flex", justifyContent:"center", marginTop:"30px"}}>
            <hr style={{ border: "1px solid #000", margin:"20px 0", width: "700px", display:"flex", position:"flex", justifyContent:"center"}}></hr>
          </div>
          <div className="functionButton">
            <button className="funzioniButton" onClick={() => handleDayWatch(user.id)}>
              DayWatch
            </button>
          </div>
          {isModalVisible && selectedWatch && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Orologio del Giorno</h2>
                <img src={selectedWatch.image} alt=" Nessuna Foto" className="modal-image" />
                <p><strong>Nome:</strong> {selectedWatch.name}</p>
                <p><strong>Marca:</strong> {selectedWatch.brand}</p>
                <p><strong>Anno:</strong> {selectedWatch.year}</p>
                <p><strong>Movimento:</strong> {selectedWatch.movement}</p>
                <p><strong>Colore:</strong> {selectedWatch.color}</p>
                <div className="functionButton">
                  <button className="funzioniButton" onClick={() => setIsModalVisible(false)}>Chiudi</button>
                </div>
              </div>
            </div>
          )}

          {/* Area di MODIFICA */}
          {isModifyVisible && modifyWatch && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Modifica Orologio</h2>
                <img src={updatedWatch.image || "/fallback-image.jpg"} alt=" Nessuna Foto" className="modal-image" />
                
                <div className="formModify" style={{ fontFamily: "minork" }}>
                  <div>
                    <label>Nome: </label>
                    <input
                      type="text"
                      value={updatedWatch.name}
                      onChange={(e) => setUpdatedWatch({ ...updatedWatch, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label>Marca: </label>
                    <input
                      type="text"
                      value={updatedWatch.brand}
                      onChange={(e) => setUpdatedWatch({ ...updatedWatch, brand: e.target.value })}
                    />
                  </div>

                  <div>
                    <label>Anno: </label>
                    <input
                      type="text"
                      value={updatedWatch.year}
                      onChange={(e) => setUpdatedWatch({ ...updatedWatch, year: e.target.value })}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", width: "100%" }}>
                    <div className="selectMenu">
                      <label>
                        <strong>Movimento: </strong>
                      </label>
                      <div style={{ marginBottom: "10px" }}></div>
                      <select
                        value={updatedWatch.movement}
                        onChange={(e) => setUpdatedWatch({ ...updatedWatch, movement: e.target.value })}
                        style={{ textAlign: "center", display: "flex", border: "1px solid green" }}
                      >
                        <option className="menuTendina" value="">Seleziona il movimento</option>
                        <option className="menuTendina" value="Automatico">Automatico</option>
                        <option className="menuTendina" value="Carica Manuale">Carica Manuale</option>
                        <option className="menuTendina" value="Quarzo">Quarzo</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: "10px" }}></div>

                  <label>
                    <strong>Colore: </strong>
                  </label>
                  <div className="color-picker-container">
                    {/* Input nascosto */}
                    <div style={{ width: "10px", position: "absolute" }}>
                      <input
                        type="color"
                        id="color"
                        ref={colorInputRef}
                        className="hidden-color-input"
                        value={updatedWatch.color}
                        onChange={(e) => setUpdatedWatch({ ...updatedWatch, color: e.target.value })}
                      />
                    </div>
                    {/* Bottone personalizzato */}
                    <button
                      className="color-picker-button"
                      onClick={() => colorInputRef.current.click()}
                      style={{ backgroundColor: updatedWatch.color || "#ffffff", border: "1px solid green" }}
                    >
                      🎨 Scegli un colore
                    </button>

                    {/* Mostra il colore selezionato */}
                    {updatedWatch.color && <p className="selected-color">Colore selezionato: {updatedWatch.color}</p>}
                  </div>

                  {/* Caricamento immagine */}
                  <div className="upload-container">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      ref={fileInputRef}
                      className="hidden-input"
                      id="file-upload"
                    />
                    <button className="upload-button" onClick={() => fileInputRef.current.click()}>
                      📸 Seleziona un'immagine
                    </button>
                  </div>
                  {newWatch.image && (
                    <img
                      src={URL.createObjectURL(newWatch.image)}
                      alt="Anteprima"
                      className="preview-imageMod"
                      width="100"
                    />
                  )}
                </div>

                <div className="buttonForm">
                  <button className="funzioniButton" onClick={handleSaveChanges}>Salva</button>
                  <button className="funzioniButton" onClick={() => setIsModifyVisible(false)}>Chiudi</button>
                </div>
              </div>
            </div>
          )}


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
                <div className="modifyButton">
                  <button
                    className="modify-btn"
                    onClick={() => handleModifyWatch(user.id, watch.id)}  // Passa solo userid e watch.id
                  >
                    Modifica
                  </button>
                </div>
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
