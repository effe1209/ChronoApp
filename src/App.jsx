import { storage } from "./firebase"; 
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { useState, useEffect } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, db, collection, addDoc, getDocs, deleteDoc, doc } from "./firebase";
import "./App.css"; // Importa il file CSS
import { useRef } from "react";

function App() {
  const fileInputRef = useRef(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [watches, setWatches] = useState([]);
  const [newWatch, setNewWatch] = useState({ name: "", brand: "", year: "", image: "", movement: "" });

  useEffect(() => {
    if (user) fetchWatches();
  }, [user]);

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setMessage("Registrazione avvenuta con successo!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setMessage("Accesso effettuato con successo!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setWatches([]);
    setMessage("Disconnessione effettuata.");
  };

  const handleAddWatch = async () => {
    if (
      newWatch.name.trim() !== "" &&
      newWatch.brand.trim() !== "" &&
      newWatch.year > 0 &&
      newWatch.movement.trim() !== "" &&
      newWatch.image.trim() !== "" // Assicurati che l'immagine sia presente
    ) {
      try {
        console.log("Sto salvando:", newWatch); // DEBUG
        await addDoc(collection(db, "watches"), { ...newWatch, userId: user.uid });
        fetchWatches(); // Ricarica gli orologi
        setNewWatch({ name: "", brand: "", year: "", image: "", movement: "" });
        setMessage("Orologio aggiunto con successo!");
      } catch (error) {
        setMessage(error.message);
      }
    } else {
      setMessage("Compila tutti i campi!");
    }
  };
  

  const fetchWatches = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "watches"));
      const userWatches = querySnapshot.docs
        .map(doc => {
          console.log("Dati recuperati:", doc.data()); // DEBUG
          return { id: doc.id, ...doc.data() };
        })
        .filter(watch => watch.userId === user?.uid);
  
      setWatches(userWatches);
    } catch (error) {
      setMessage(error.message);
    }
  };
  

  const handleDeleteWatch = async (id, imageUrl) => {
    try {
      if (imageUrl) {
        const imageRef = ref(storage, imageUrl); // Usa correttamente Firebase Storage
        await deleteObject(imageRef);
      }
  
      await deleteDoc(doc(db, "watches", id)); // Elimina il documento Firestore
      fetchWatches();
      setMessage("Orologio eliminato con successo!");
    } catch (error) {
      setMessage("Errore durante l'eliminazione: " + error.message);
    }
  };

  const handleCancel = () => {
    setNewWatch({ name: "", brand: "", year: "", image: "", movement: "" });
    setMessage(null);
  
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Resetta il file input
    }
  };  
  

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const storageRef = ref(storage, `watches/${user.uid}/${file.name}`);
  
    try {
      await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(storageRef); // Ottieni l'URL pubblico
  
      console.log("URL immagine:", imageUrl); // DEBUG
      setNewWatch((prev) => ({ ...prev, image: imageUrl }));
      setMessage("Immagine caricata con successo!");
    } catch (error) {
      setMessage("Errore nel caricamento dell'immagine: " + error.message);
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
            <div style={{ marginBottom: "10px" }}></div> {/* Spazio extra */}
            <label><strong>Movimento: </strong></label>
            <select value={newWatch.movement} onChange={(e) => setNewWatch({ ...newWatch, movement: e.target.value })}>
              <option value="">Seleziona il movimento</option>
              <option value="Automatico">Automatico</option>
              <option value="Carica Manuale">Carica Manuale</option>
              <option value="Quarzo">Quarzo</option>
            </select>
            <div style={{ marginBottom: "10px" }}></div> {/* Spazio extra */}
            
            <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} />
              {newWatch.image && <img src={newWatch.image} alt="Anteprima" className="preview-image" />}
              <div style={{ marginBottom: "10px" }}></div> {/* Spazio extra */}
            <div className="buttonForm">
              <button onClick={handleAddWatch}>Salva</button>
              <button onClick={handleCancel}>Annulla</button>
            </div>
          </div>

          <div style={{ marginBottom: "50px" }}></div> {/* Spazio extra */}
          <h2>Lista Orologi</h2>
          <div className="watch-list">
            {watches.map((watch) => (
              <div key={watch.id} className="watch-card">
                {watch.image ? (
                  <img src={watch.image} alt={watch.name} className="watch-image" onError={(e) => e.target.style.display = 'none'} />
                ) : (
                  <p>Nessuna immagine disponibile</p>
                )}
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
