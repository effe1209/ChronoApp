import React, { useState, useEffect, useRef, useTransition, useLayoutEffect, useMemo } from "react";
// Import Supabase e servizi (invariati)
import { supabase } from './components/supabaseClient';
import { addWatchService } from './components/watchService';
import AuthForm from './components/AuthForm';
import WatchAnalytics from './components/WatchAnalytics'; 
import GlassSurface from './components/GlassSurface';
import TiltedCard from './components/TiltedCard';

// Importa i componenti dock e le icone VSC
import Dock from './components/Dock'; 
// *** FIX IMPORT DELLE ICONE VSC ***
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';


// Import dei nuovi componenti creati
import UserProfile from './components/UserProfile';
import { ScrollingBrands1, ScrollingBrands2, ScrollingBrands3 } from './components/ScrollingBrands';
import DarkModeSwitch from './components/DarkModeSwitch';
import Clock from './components/Clock';
import WatchList from './components/WatchList';
import AddWatchForm from './components/AddWatchForm';
import FunctionsSection from './components/FunctionsSection';
import DayWatchModal from './components/DayWatchModal';
import OutfitModal from './components/OutfitModal';
import ModifyWatchModal from './components/ModifyWatchModal';
import InfoWatchModal from './components/InfoWatchModal';
import StatsModal from './components/StatsModal';

// Stili (invariati)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./App.css";


function App() {
  // --- STATO (Resta qui) ---
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedWatch, setSelectedWatch] = useState(null);
  const fileInputRef = useRef(null);
  const fileInputRefOutfit = useRef(null);
  const colorInputRef = useRef(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [watches, setWatches] = useState([]);
  const [watchConsigliati, setWatchConsigliati] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newWatch, setNewWatch] = useState({
    name: "",
    brand: "",
    year: "",
    image: "",
    movement: "",
    color: "",
    isFavorite: false,
    money: null,
    features: [],
    note: "",
  });
  const [loading, setLoading] = useState(false);
  const [isStatisticheVisible, setIsStatisticheVisible] = useState(false);
  const [isDetailsMenuOpen, setIsDetailsMenuOpen] = useState(false);
  const [isDetailsMenuOpenMOD, setIsDetailsMenuOpenMOD] = useState(false);
  const [isNotesVisible, setIsNotesVisible] = useState(false);
  const [isNotesVisibleMOD, setIsNotesVisibleMOD] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isModifyVisible, setIsModifyVisible] = useState(false);
  const [modifyWatch, setModifyWatch] = useState(null);
  const [updatedWatch, setUpdatedWatch] = useState({
    name: '',
    brand: '',
    year: '',
    movement: '',
    color: '',
    image: '', 
    isFavorite: false,
    money: null,
    features: [],
    note: ""
  });
  const [allFeaturesList, setAllFeaturesList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [modalTitle, setModalTitle] = useState(""); 
  const [color, setColor] = useState("");
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  // --- NUOVO: Stato per tracciare la sezione attiva nel Dock ---
  const [activeSection, setActiveSection] = useState('Home'); 

  // --- NUOVO: Configurazione Elementi del Dock ---
  // Definiamo qui gli items per poter passare la funzione di scroll specifica
  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => scrollToSection('home-section') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => scrollToSection('profile-section') },
    { icon: <VscSettingsGear size={18} />, label: 'Functions', onClick: () => scrollToSection('function-section') },
    { icon: <VscArchive size={18} />, label: 'Watches', onClick: () => scrollToSection('watch-list-section') },
  ];

  // --- NUOVO: Helper per lo Scroll Fluido ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Aggiorniamo manualmente lo stato per feedback visivo immediato sul Dock
      const labelMap = {
        'home-section': 'Home',
        'watch-list-section': 'Watches',
        'profile-section': 'Profile',
        'function-section': 'Functions'
      };
      setActiveSection(labelMap[id]);
    }
  };

  useEffect(() => {
    if (!user) return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // Mappiamo l'ID della sezione alla label del Dock
          if (id === 'home-section') setActiveSection('Home');
          if (id === 'profile-section') setActiveSection('Profile');
          if (id === 'function-section') setActiveSection('Functions');
          if (id === 'watch-list-section') setActiveSection('Watches');
        }
      });
    };

    const observerOptions = {
      root: null,
      // rootMargin definisce la "zona attiva". 
      // '-20% ...' significa che la sezione si attiva quando entra bene nello schermo,
      // evitando che si attivi appena appare un pixel dal basso.
      rootMargin: '-20% 0px -60% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Diciamo all'observer di guardare i nostri wrapper (definiti nel return)
    const sections = ['home-section', 'profile-section', 'function-section', 'watch-list-section'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [user, watches]); // Ricalcoliamo se cambia l'utente o la lista orologi si allunga


  // Effetti di scroll e anchor link (ora dentro React)
  useEffect(() => {
    // Gestore per anchor link
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };
    anchors.forEach(anchor => anchor.addEventListener("click", handleClick));
    
    // NUOVA LOGICA: Aggiorna activeSection in base allo scroll (rudimentale ma funzionale)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                // Prende l'ID della sezione visibile
                const sectionId = entry.target.id; 
                // Mappa ID a nome Dock
                const dockName = {
                    'home': 'Home',
                    'profile-section': 'Profile',
                    'watch-list': 'Watches',
                    'function': 'Functions'
                }[sectionId] || activeSection; 
                setActiveSection(dockName);
            }
        });
    }, { threshold: 0.5 }); // Quando il 50% della sezione è visibile

    // Gestore per scroll blur
    let timeout;
    const handleScroll = () => {
      const slideWrap = document.querySelector(".slideWrap");
      if (!slideWrap) return;

      if (window.scrollY > 30) {
        slideWrap.style.backdropFilter = "blur(10px)";
      } else {
        // slideWrap.style.backdropFilter = "none";
        slideWrap.style.backdropFilter = "blur(10px)";
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.scrollY === 0) {
          // slideWrap.style.backdropFilter = "none";
          slideWrap.style.backdropFilter = "blur(10px)";
        }
      }, 200);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      anchors.forEach(anchor => anchor.removeEventListener("click", handleClick));
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect(); // Disconnette l'osservatore
      clearTimeout(timeout);
    };
  }, [activeSection]); // Aggiunto activeSection per evitare loop nell'observer


  useLayoutEffect(() => {
    console.log("Layout watches ricalcolato prima del paint.");
  }, [watches]);

  // Test connessione, fetch utente e caricamento email/nickname
  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.rpc("now");
        if (error) console.error("Errore di connessione a Supabase:", error);
        else console.log("Connessione a Supabase riuscita!");
      } catch (err) {
        console.error("Errore imprevisto durante la connessione:", err);
      }
    };

    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        fetchWatches(session.user.id); 
      }
    };
    
    testConnection();
    fetchUser();

    const savedEmail = localStorage.getItem('email');
    if (savedEmail) setEmail(savedEmail);

    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) setNickname(savedNickname);
  }, []); // Nota: fetchWatches è chiamato solo al primo caricamento dell'utente

  // Salva nickname
  useEffect(() => {
    if(nickname) { // Salva solo se il nickname non è vuoto
      localStorage.setItem("nickname", nickname);
    }
  }, [nickname]);

  // Caricamento features
  useEffect(() => {
    const loadFeatures = async () => {
      const { data, error } = await supabase.from('caratteristiche').select('*'); 
      if (error) {
        console.error("ERRORE NEL CARICARE LE CARATTERISTICHE:", error.message);
        setMessage("Errore: impossibile caricare l'elenco delle caratteristiche. " + error.message);
      } else {
        console.log("Caratteristiche caricate con successo:", data);
        setAllFeaturesList(data);
      }
    };
    loadFeatures();
  }, []); // Carica solo una volta

  // --- LOGICA DATI E AUTH (Funzioni) ---

  const handleRegister = async () => {
    setLoading(true);
    try {
      if (!email || !password) {
        setMessage("Email e password sono obbligatori.");
        return;
      }
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      const userId = data.user.id;
      const { error: profileError } = await supabase
        .from('user_profiles')
        .upsert([{ id: userId, username: nickname }]);
      if (profileError) throw profileError;

      setMessage("Registrazione avvenuta con successo! Controlla la tua email per confermare l'account.");
      // Non è necessario ricaricare l'utente qui, aspetterà la conferma
    } catch (error) {
      setMessage("Errore: " + (error.message || "Si è verificato un errore."));
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  const handleLogin = async () => {
    setLoading(true);
    localStorage.setItem('email', email);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        if (error.message.includes('invalid_credentials')) {
          setMessage('Credenziali non valide. Controlla email e password.');
        } else {
          setMessage('Errore nel login. ' + error.message);
        }
        throw error;
      }

      if (data.user) {
        setUser(data.user);
        const { data: userProfile, error: profileError } = await supabase
          .from('user_profiles')
          .select('username')
          .eq('id', data.user.id)
          .single();
          
        if (profileError) {
          console.error("Errore nel recupero del nome utente:", profileError);
          // Non bloccare il login per questo
        } else if (userProfile) {
          setNickname(userProfile.username);
        }
        
        setMessage("Accesso effettuato con successo!");
        fetchWatches(data.user.id); // Carica gli orologi DOPO il login
      } else {
        setMessage("Accesso non riuscito: Nessun utente trovato.");
      }
    } catch (error) {
      console.error("Errore durante il login:", error);
    } finally {
      setLoading(false);
    }
  }; 

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setWatches([]);
    setMessage("Disconnessione effettuata.");
    localStorage.removeItem('email');
    localStorage.removeItem('nickname');
    setEmail('');
    setNickname('');
  };

const handleAddWatch = async () => {
  // 1. Prepara le opzioni per il servizio
  const stateOptions = {
    newWatch,
    user,
    setLoading,
    setMessage, 
    // NON passare setWatches o setNewWatch
  };

  try {
    // 2. Chiama il servizio. 
    //    (Assumiamo che watchService.js sia stato modificato 
    //     per NON chiamare setWatches e lanciare un errore se fallisce)
    await addWatchService(stateOptions);
    
    // 3. SE il servizio ha successo:
    setMessage('Orologio aggiunto con successo!');
    
    // 4. Resetta il form QUI, in App.jsx
    handleCancel(); // Usa la tua funzione di reset
    
    // 5. FONDAMENTALE: Ricarica l'intera lista.
    //    Questo fa sì che il nuovo orologio passi attraverso 
    //    la logica di 'fetchWatches' e ottenga la sua 'imageUrl'.
    await fetchWatches(user.id);

  } catch (error) {
    // 6. Il servizio ha fallito
    console.error("Errore (da addWatchService):", error);
    setMessage(error.message || "Errore durante l'aggiunta dell'orologio.");
    setLoading(false); // Assicurati che il loading termini
  }
};

  const uploadImage = async (file) => {
    if (!file) return null;

    console.log(`Original size: ${file.size / 1024 / 1024} MB`);
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      console.log(`Compressed size: ${compressedFile.size / 1024 / 1024} MB`);

      const fileName = `${user.id}/${Date.now()}-${compressedFile.name}`;
      const { data, error } = await supabase.storage
        .from("fotoWatch")
        .upload(fileName, compressedFile);

      if (error) throw error;
      
      // Restituisce il *percorso* dell'immagine, non l'URL pubblico intero
      // Questo è più robusto per gli aggiornamenti
      return data.path; 

    } catch (error) {
      console.error("Errore durante la compressione o l'upload:", error);
      setMessage("Errore durante il caricamento dell'immagine: " + error.message);
      return null;
    }
  };

  const deleteImage = async (imagePath) => {
    // La funzione ora si aspetta un percorso (es. "userid/image.jpg")
    // e non un URL completo
    if (!imagePath) return;

    // Se riceve un URL completo per retrocompatibilità, prova a estrarre il percorso
    let filePath = imagePath;
    if (imagePath.includes('/storage/v1/object/public/fotoWatch/')) {
        filePath = imagePath.split("/storage/v1/object/public/fotoWatch/")[1];
    }
    
    const { error } = await supabase.storage
      .from("fotoWatch")
      .remove([filePath]);

    if (error) {
      console.error("Errore nell'eliminazione dell'immagine:", error.message);
    }
  };

  const handleDeleteWatch = async (id, imagePath) => {
    // IMPORTANTE: DEVI USARE UN MODAL QUI, window.confirm NON FUNZIONA NEI PROGETTI GOOGLE.
    // Usiamo window.confirm solo come placeholder per questo esercizio.
    const isConfirmed = window.confirm("Sei sicuro di voler eliminare questo orologio?");
    if (!isConfirmed) return;
    
    try {
      // Passa imagePath (es. "userid/image.jpg")
      if (imagePath) {
        await deleteImage(imagePath);
      }

      const { error } = await supabase.from("watches").delete().eq("id", id);
      if (error) throw error;
      
      // Rimuovi l'orologio dallo stato locale invece di un fetch completo
      setWatches(prevWatches => prevWatches.filter(watch => watch.id !== id));
      setMessage("Orologio eliminato con successo!");
    } catch (error) {
      setMessage("Errore durante l'eliminazione: " + error.message);
    }
  };

// 1. PRIMA, definisci una funzione helper per generare l'URL
//    (Assicurati che 'supabase' sia definito e accessibile)
const getPublicUrl = (path) => {
  if (!path) {
    return null; // Se non c'è percorso, restituisci null
  }
  try {
    // Assicurati che 'fotoWatch' sia il nome corretto del tuo bucket
    const { data } = supabase.storage
      .from("fotoWatch")
      .getPublicUrl(path);
      
    return data.publicUrl;
  } catch (error) {
    console.error("Errore nel generare l'URL pubblico:", error);
    return null;
  }
};

// 2. POI, usa l'helper DENTRO fetchWatches
const fetchWatches = async (userid) => {
  try {
    const { data, error } = await supabase
      .from("watches")
      .select("*, Orologi_Caratteristiche(*, caratteristiche(*))") 
      .eq("userid", userid);
    
    if (error) throw error;

    const userWatches = data.map((watch) => {
      const features = watch.Orologi_Caratteristiche.map(
        (joinEntry) => joinEntry.caratteristiche
      );

      return {
        ...watch,
        caratteristiche: features,
        // NON chiamare getPublicUrl. Usa 'watch.image' direttamente
        imageUrl: watch.image 
      };
    });

    setWatches(userWatches);
  } catch (error) {
    setMessage("Errore durante il recupero degli orologi: " + error.message);
  }
};

  const handleCancel = () => {
   setNewWatch({ 
      name: "", brand: "", year: "", image: "", movement: "", color: "",
      features: [], isFavorite: false, money: null, note: "",
    });
    setMessage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setIsDetailsMenuOpen(false);
    setIsDetailsMenuOpenMOD(false);
    setIsNotesVisible(false);
    setShowForm(false); // Nasconde anche il form
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewWatch((prev) => ({ ...prev, image: file }));
    }
  };
  
  // Gestore per l'immagine di *modifica*
  const handleModifyImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUpdatedWatch((prev) => ({ ...prev, image: file, imageUrl: URL.createObjectURL(file) }));
    }
  };


  const handleDayWatch = async (userid) => {
    try {
      // Non c'è bisogno di un fetch, usiamo lo stato 'watches'
      if (watches && watches.length > 0) {
        const randomIndex = Math.floor(Math.random() * watches.length);
        const randomWatch = watches[randomIndex];
        
        setSelectedWatch(randomWatch); // Usa lo stesso stato per tutti i modali
        setModalTitle("Orologio del Giorno");
        setIsModalVisible(true);
      } else {
        setMessage('Nessun orologio trovato per selezionarne uno casuale.');
      }
    } catch (error) {
      console.error('Errore nel selezionare l\'orologio:', error.message);
    }
  };

  const totalMoney = useMemo(() => {
    if (!watches || watches.length === 0) return 0;
    return watches.reduce((acc, watch) => {
        const moneyValue = Number(watch.money);
        return Number.isFinite(moneyValue) ? acc + moneyValue : acc;
    }, 0);
  }, [watches]);

  const handleModifyWatch = (watchToModify) => {
    // Non serve fetch, riceve l'oggetto 'watch' completo dalla lista
    const featureIDs = watchToModify.caratteristiche.map(
      (feature) => feature.id_caratteristica
    );
    
    setModifyWatch(watchToModify); 
    
    setUpdatedWatch({
      name: watchToModify.name,
      brand: watchToModify.brand,
      year: watchToModify.year,
      movement: watchToModify.movement,
      color: watchToModify.color || '',
      image: watchToModify.image || '', // Percorso file esistente
      imageUrl: watchToModify.imageUrl || '', // URL per display
      isFavorite: watchToModify.isFavorite,
      money: watchToModify.money || null,
      features: featureIDs,
      note: watchToModify.note || "",
    });
    
    setIsModifyVisible(true);
  };

  const handleInfoWatch = (watchToShow) => {
    // Non serve fetch, riceve l'oggetto 'watch'
    setSelectedWatch(watchToShow);
    setIsInfoVisible(true);
  };

  const handleShowStats = () => {
    setIsStatisticheVisible(true);
  };
  
  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      const { features, image, imageUrl, ...watchData } = updatedWatch;
      
      let finalWatchData = { ...watchData }; 
      const oldImagePath = modifyWatch.image; 

      // Controlla se 'image' è un nuovo File (non una stringa/percorso)
      if (image instanceof File) {
        const newImagePath = await uploadImage(image);
        if (newImagePath) {
            finalWatchData.image = newImagePath; // Salva il *percorso*
            if (oldImagePath) {
              await deleteImage(oldImagePath); // Elimina la vecchia
            }
        }
      } else {
        // Altrimenti, mantieni il vecchio percorso
        finalWatchData.image = oldImagePath;
      }

      // PASSO 1: Aggiorna 'watches'
      const { data: updatedData, error: updateError } = await supabase
        .from('watches')
        .update(finalWatchData) 
        .eq('id', modifyWatch.id)
        .select() // Chiedi i dati aggiornati
        .single(); // Ci aspettiamo un solo record

      if (updateError) throw updateError;

      // PASSO 2: Aggiorna 'caratteristiche'
      const watchId = modifyWatch.id;

      const { error: deleteError } = await supabase
        .from('Orologi_Caratteristiche')
        .delete()
        .eq('id_watch', watchId);
      if (deleteError) throw deleteError;

      if (features && features.length > 0) {
        const relationsToInsert = features.map(featureId => ({
          id_watch: watchId,
          id_caratteristica: featureId
        }));
        const { error: insertError } = await supabase
          .from('Orologi_Caratteristiche')
          .insert(relationsToInsert);
        if (insertError) throw insertError;
      }
      
      // PASSO 3: Aggiorna lo stato locale
      // Per evitare un fetch, aggiorniamo manualmente lo stato 'watches'
      // Ricostruisci le caratteristiche per l'oggetto locale
      const updatedFeatures = allFeaturesList.filter(f => features.includes(f.id_caratteristica));
      
      const locallyUpdatedWatch = {
          ...modifyWatch, // Inizia con i vecchi dati (es. Orologi_Caratteristiche)
          ...updatedData, // Sovrascrivi con i dati aggiornati da 'watches'
          caratteristiche: updatedFeatures, // Inserisci le caratteristiche aggiornate
          imageUrl: getPublicUrl(updatedData.image) // Rigenera l'URL
      };

      setWatches(prevWatches => 
        prevWatches.map(w => w.id === modifyWatch.id ? locallyUpdatedWatch : w)
      );

      setMessage("Orologio aggiornato con successo!");
      setIsModifyVisible(false);
      
    } catch (error) {
      console.error("Errore durante il salvataggio delle modifiche:", error);
      setMessage("Errore: " + error.message);
    } finally {
        setLoading(false);
    }
  };


  const handleFavoriteToggle = async (watchId) => {
    const currentWatch = watches.find(w => w.id === watchId);
    if (!currentWatch) return;
    
    const newFavoriteState = !currentWatch.isFavorite;

    // Aggiornamento Optimistic (UI prima, poi DB)
    // Avvolgi in startTransition per animazione fluida
    startTransition(() => {
        setWatches(prevWatches =>
            prevWatches.map(watch =>
                watch.id === watchId
                    ? { ...watch, isFavorite: newFavoriteState }
                    : watch
            )
        );
    });

    // Aggiornamento DB in background
    const { error } = await supabase
        .from('watches')
        .update({ isFavorite: newFavoriteState })
        .eq('id', watchId); 

    if (error) {
        console.error("Errore Supabase (ripristino UI):", error);
        // Rollback in caso di errore
        startTransition(() => {
          setWatches(prevWatches =>
              prevWatches.map(watch =>
                  watch.id === watchId
                      ? { ...watch, isFavorite: !newFavoriteState } // Ripristina
                      : watch
              )
          );
        });
        setMessage("Errore nell'aggiornamento dei preferiti.");
    }
  };

  // --- LOGICA OUTFIT (Funzioni) ---

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const pixelData = ctx.getImageData(img.width / 2, img.height / 2, 1, 1).data;
        const hexColor = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
        setColor(hexColor);
        searchWatchesByColor(hexColor);
      };
    };
    reader.readAsDataURL(file);
  };

  const rgbToHex = (r, g, b) => {
    return ("#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("").toUpperCase());
  };

  const searchWatchesByColor = (hexColor) => {
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);
  
    const calculateDistance = (colorHex) => {
      if (!colorHex) return Infinity; // Gestisce colori non definiti
      const r2 = parseInt(colorHex.substring(1, 3), 16);
      const g2 = parseInt(colorHex.substring(3, 5), 16);
      const b2 = parseInt(colorHex.substring(5, 7), 16);
      return Math.sqrt((r - r2) ** 2 + (g - g2) ** 2 + (b - b2) ** 2);
    };
  
    const sortedWatches = watches
      .map((watch) => ({
        ...watch,
        distanza: calculateDistance(watch.color),
      }))
      .sort((a, b) => a.distanza - b.distanza)
      .slice(0, 3);
  
    setWatchConsigliati(sortedWatches);
    setIsCarouselVisible(true);
  };

  // --- LOGICA FEATURES (Funzioni) ---
  const handleFeatureChange = (event) => {
    const { value, checked } = event.target;
    const numericValue = parseInt(value, 10); 
    setNewWatch((prev) => {
      if (checked) {
        return { ...prev, features: [...prev.features, numericValue] };
      } else {
        return { ...prev, features: prev.features.filter((f) => f !== numericValue) };
      }
    });
  };
  
  const handleUpdatedFeatureChange = (event) => {
    const { value, checked } = event.target;
    const numericValue = parseInt(value, 10); 
    setUpdatedWatch((prev) => {
      if (checked) {
        return { ...prev, features: [...prev.features, numericValue] };
      } else {
        return { ...prev, features: prev.features.filter((f) => f !== numericValue) };
      }
    });
  };


  // --- RENDER ---
  return (
    <div 
      className={`container ${!user ? 'login-page' : ''}`} 
      id="home"
      style={{position: 'relative'}} // *** FIX: aggiunto per position absolute del Dock ***
    >
      <div className="slideWrap_Container">
        {/* DarkModeSwitch rimane come switch in alto a destra */}
        <DarkModeSwitch 
          isUserLoggedIn={!!user} // Non usa più queste prop, ma le lascio per stabilità
          onLogout={handleLogout} 
          onAddWatchToggle={() => setShowForm(!showForm)}
          isFormVisible={showForm}
        />
        {user && (
          <Dock 
            items={items}
            activeSection={activeSection} // Passiamo lo stato attivo calcolato
            onLogout={handleLogout}
            onAddWatchToggle={() => setShowForm(!showForm)}
            isFormVisible={showForm}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        )}
        </div>
      <div id="home-section">
        <Clock /> {/* Componente Orologio */}
      
        {/* Componenti Scrolling Brands */}
        <ScrollingBrands1 />
        <ScrollingBrands2 />
        <ScrollingBrands3 />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div className="titleList" style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center" }}>
            <h1>La mia collezione di orologi</h1>
          </div>
        </div>
      </div>

      {message && <p className="message" onClick={() => setMessage(null)}>{message}</p>}
      {loading && <div className="loading-spinner"></div>} {/* Spinner CSS */}
      <div style={{ marginBottom: "20px" }}></div>

      {!user ? (
        <AuthForm
          nickname={nickname}
          setNickname={setNickname}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleRegister={handleRegister}
          handleLogin={handleLogin}
          handleKeyDown={handleKeyDown}
        />
      ) : (
        <>
          <div className="profile-info" id="profile-section"> {/* Aggiunto ID per il Dock */}
            <div className="profile-picture">
                <UserProfile email={email} />
            </div>
            <h4 className="Saluti">Benvenuto, {nickname}</h4>
            <p style={{ fontSize: "20px", paddingBottom: "20px"}}>Valore: {totalMoney.toLocaleString('it-IT')} €</p>
           </div>

          {/* Componente Form Aggiungi */}
          <AddWatchForm
            showForm={showForm}
            newWatch={newWatch}
            setNewWatch={setNewWatch}
            handleImageChange={handleImageChange}
            fileInputRef={fileInputRef}
            isDetailsMenuOpen={isDetailsMenuOpen}
            setIsDetailsMenuOpen={setIsDetailsMenuOpen}
            isNotesVisible={isNotesVisible}
            setIsNotesVisible={setIsNotesVisible}
            allFeaturesList={allFeaturesList}
            handleFeatureChange={handleFeatureChange}
            handleAddWatch={handleAddWatch}
            handleCancel={handleCancel}
          />

          <div className="separator-container">
            <hr className="custom-separator" />
          </div>
          
          <div id="function-section">
            <h2 style={{paddingBottom:"2%"}} id="function">Funzioni</h2>
          
            {/* Componente Sezione Funzioni */}
            <FunctionsSection
              onDayWatchClick={() => handleDayWatch(user.id)}
              onOutfitImageChange={handleImageUpload}
              fileInputRefOutfit={fileInputRefOutfit}
            />
          </div>

          {/* Componenti Modali */}
          <OutfitModal
            isVisible={isCarouselVisible}
            setIsVisible={setIsCarouselVisible}
            watchConsigliati={watchConsigliati}
            onClose={() => {
              setIsCarouselVisible(false);
              if(fileInputRefOutfit.current) fileInputRefOutfit.current.value = "";
              setWatchConsigliati([]);
            }}
          />
          
          <DayWatchModal
            isVisible={isModalVisible}
            setIsVisible={setIsModalVisible}
            selectedWatch={selectedWatch}
            modalTitle={modalTitle}
          />

          <ModifyWatchModal
            isVisible={isModifyVisible}
            setIsVisible={setIsModifyVisible}
            modifyWatch={modifyWatch}
            updatedWatch={updatedWatch}
            setUpdatedWatch={setUpdatedWatch}
            handleModifyImageChange={handleModifyImageChange} // Passa il gestore corretto
            fileInputRef={fileInputRef} // Riutilizza lo stesso ref
            isDetailsMenuOpenMOD={isDetailsMenuOpenMOD}
            setIsDetailsMenuOpenMOD={setIsDetailsMenuOpenMOD}
            isNotesVisibleMOD={isNotesVisibleMOD}
            setIsNotesVisibleMOD={setIsNotesVisibleMOD}
            allFeaturesList={allFeaturesList}
            handleUpdatedFeatureChange={handleUpdatedFeatureChange}
            handleSaveChanges={handleSaveChanges}
          />

          <h2 id="watch-list">Lista Orologi</h2> {/* Aggiunto ID per il Dock */}
          
          {/* Componente Lista Orologi */}
          <div id="watch-list-section">
            <WatchList 
              watches={watches} 
              handleModifyWatch={handleModifyWatch} // Passa l'oggetto watch
              handleDeleteWatch={handleDeleteWatch}
              handleFavoriteToggle={handleFavoriteToggle}
              handleInfoWatch={handleInfoWatch} // Passa l'oggetto watch
              handleShowStats={handleShowStats}
              user={user} // Necessario per i bottoni? No, App gestisce la logica
            />
          </div>
        </>
      )}
      {/* Altri Componenti Modali */}
          <StatsModal
            isVisible={isStatisticheVisible}
            setIsVisible={setIsStatisticheVisible}
            watches={watches}
          />
          
          <InfoWatchModal
            isVisible={isInfoVisible}
            setIsVisible={setIsInfoVisible}
            selectedWatch={selectedWatch}
          />
    </div>
  );
}

export default App;