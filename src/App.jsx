import React, { useState, useEffect, useRef, useTransition, useLayoutEffect, useMemo } from "react";
// Import Supabase e servizi (invariati)
import { supabase } from './components/supabaseClient';
import { addWatchService } from './components/watchService';
import AuthForm from './components/AuthForm';
import WatchAnalytics from './components/WatchAnalytics'; 
import GlassSurface from './components/GlassSurface';
import TiltedCard from './components/TiltedCard';
import FloatingLines from './components/FloatingLines';
import CircularText from './components/CircularText';
import MetaBalls from './components/MetaBalls';
import InfiniteMenu from './components/InfiniteMenu'
import InfiniteGridModal from './components/InfiniteGridModal';
import { SpeedInsights } from "@vercel/speed-insights/react";

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
  const [isInfiniteGridVisible, setIsInfiniteGridVisible] = useState(false);

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
          if (id === 'home-section') setActiveSection('Home');
          if (id === 'profile-section') setActiveSection('Profile');
          if (id === 'function-section') setActiveSection('Functions');
          if (id === 'watch-list-section') setActiveSection('Watches');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ['home-section', 'profile-section', 'function-section', 'watch-list-section'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [user, watches]);


  // Effetti di scroll e anchor link
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };
    anchors.forEach(anchor => anchor.addEventListener("click", handleClick));
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                const sectionId = entry.target.id; 
                const dockName = {
                    'home': 'Home',
                    'profile-section': 'Profile',
                    'watch-list': 'Watches',
                    'function': 'Functions'
                }[sectionId] || activeSection; 
                setActiveSection(dockName);
            }
        });
    }, { threshold: 0.5 });

    // Gestore per scroll blur
    let timeout;
    const handleScroll = () => {
      const slideWrap = document.querySelector(".slideWrap");
      if (!slideWrap) return;

      if (window.scrollY > 30) {
        slideWrap.style.backdropFilter = "blur(10px)";
      } else {
        slideWrap.style.backdropFilter = "blur(10px)";
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.scrollY === 0) {
          slideWrap.style.backdropFilter = "blur(10px)";
        }
      }, 200);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener("click", handleClick));
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [activeSection]);


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
  }, []);

  // Salva nickname
  useEffect(() => {
    if(nickname) {
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
  }, []);

  // --- LOGICA DATI E AUTH (Invariata) ---

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
        } else if (userProfile) {
          setNickname(userProfile.username);
        }
        
        setMessage("Accesso effettuato con successo!");
        fetchWatches(data.user.id);
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
  const stateOptions = {
    newWatch,
    user,
    setLoading,
    setMessage, 
  };

  try {
    await addWatchService(stateOptions);
    setMessage('Orologio aggiunto con successo!');
    handleCancel();
    await fetchWatches(user.id);
  } catch (error) {
    console.error("Errore (da addWatchService):", error);
    setMessage(error.message || "Errore durante l'aggiunta dell'orologio.");
    setLoading(false);
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
      return data.path; 

    } catch (error) {
      console.error("Errore durante la compressione o l'upload:", error);
      setMessage("Errore durante il caricamento dell'immagine: " + error.message);
      return null;
    }
  };

  const deleteImage = async (imagePath) => {
    if (!imagePath) return;
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
    const isConfirmed = window.confirm("Sei sicuro di voler eliminare questo orologio?");
    if (!isConfirmed) return;
    try {
      if (imagePath) await deleteImage(imagePath);
      const { error } = await supabase.from("watches").delete().eq("id", id);
      if (error) throw error;
      setWatches(prevWatches => prevWatches.filter(watch => watch.id !== id));
      setMessage("Orologio eliminato con successo!");
    } catch (error) {
      setMessage("Errore durante l'eliminazione: " + error.message);
    }
  };

const getPublicUrl = (path) => {
  if (!path) return null;
  try {
    const { data } = supabase.storage.from("fotoWatch").getPublicUrl(path);
    return data.publicUrl;
  } catch (error) {
    console.error("Errore nel generare l'URL pubblico:", error);
    return null;
  }
};

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
      return { ...watch, caratteristiche: features, imageUrl: watch.image };
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
    setShowForm(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewWatch((prev) => ({ ...prev, image: file }));
    }
  };
  
  const handleModifyImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUpdatedWatch((prev) => ({ ...prev, image: file, imageUrl: URL.createObjectURL(file) }));
    }
  };

  const handleDayWatch = async (userid) => {
    try {
      if (watches && watches.length > 0) {
        const randomIndex = Math.floor(Math.random() * watches.length);
        const randomWatch = watches[randomIndex];
        setSelectedWatch(randomWatch);
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
      image: watchToModify.image || '', 
      imageUrl: watchToModify.imageUrl || '', 
      isFavorite: watchToModify.isFavorite,
      money: watchToModify.money || null,
      features: featureIDs,
      note: watchToModify.note || "",
    });
    setIsModifyVisible(true);
  };

  const handleInfoWatch = (watchToShow) => {
    setSelectedWatch(watchToShow);
    setIsInfoVisible(true);
  };

  const handleShowStats = () => {
    setIsStatisticheVisible(true);
  };

  const handleInfiniteGrid = () => {
    setIsInfiniteGridVisible(true);
  };
  
  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      const { features, image, imageUrl, ...watchData } = updatedWatch;
      let finalWatchData = { ...watchData }; 
      const oldImagePath = modifyWatch.image; 

      if (image instanceof File) {
        const newImagePath = await uploadImage(image);
        if (newImagePath) {
            finalWatchData.image = newImagePath; 
            if (oldImagePath) {
              await deleteImage(oldImagePath); 
            }
        }
      } else {
        finalWatchData.image = oldImagePath;
      }

      const { data: updatedData, error: updateError } = await supabase
        .from('watches')
        .update(finalWatchData) 
        .eq('id', modifyWatch.id)
        .select()
        .single();

      if (updateError) throw updateError;

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
      
      const updatedFeatures = allFeaturesList.filter(f => features.includes(f.id_caratteristica));
      const locallyUpdatedWatch = {
          ...modifyWatch,
          ...updatedData,
          caratteristiche: updatedFeatures,
          imageUrl: getPublicUrl(updatedData.image)
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

    startTransition(() => {
        setWatches(prevWatches =>
            prevWatches.map(watch =>
                watch.id === watchId
                    ? { ...watch, isFavorite: newFavoriteState }
                    : watch
            )
        );
    });

    const { error } = await supabase
        .from('watches')
        .update({ isFavorite: newFavoriteState })
        .eq('id', watchId); 

    if (error) {
        console.error("Errore Supabase (ripristino UI):", error);
        startTransition(() => {
          setWatches(prevWatches =>
              prevWatches.map(watch =>
                  watch.id === watchId
                      ? { ...watch, isFavorite: !newFavoriteState } 
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
      if (!colorHex) return Infinity; 
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

  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark" 
  );

  // 2. PORTA QUI L'EFFETTO (SIDE EFFECT)
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.documentElement.setAttribute("style", "color-scheme:dark"); 
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.setAttribute("style", "color-scheme:light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Funzione helper per cambiare stato (opzionale, ma pulita)
  const toggleTheme = () => setIsDark(!isDark);

  const floatingConfig = isDark 
    ? {bg: "#000000", gradient: [],blend: "screen"}
    : {bg: "#476d7ed6", gradient: ["#ff8ce2ff", "#77bebaff"], blend: "screen"};


    const BackgroundLayer = useMemo(() => {
      return (
        <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw',
            // height: '100vh', 
            height: '100dvh',
            zIndex: -1,
            pointerEvents: 'none',
            backgroundColor: floatingConfig.bg, // Usa il colore configurato
            transition: "background-color 0.3s ease",
            touchAction: 'none'
        }}>
          <FloatingLines 
            linesGradient={floatingConfig.gradient} // Usa il gradiente configurato
            mixBlendMode={floatingConfig.blend}     // Usa il blend configurato
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[5, 5, 5]}
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={false} // Se true, attenzione che il mouse potrebbe triggerare render
            parallax={true}
          />
        </div>
      );
    }, [isDark, floatingConfig.bg, floatingConfig.blend]);

  // --- RENDER ---
  return (
    <>
    
    {BackgroundLayer}

    {/* MAIN CONTENT LAYER */}
    <div 
      className={`container ${!user ? 'login-page' : ''}`} 
      id="home"
      style={{ position: 'relative', zIndex: 1 }} // Assicuro che il contenuto stia sopra
    >
      <SpeedInsights/>
      <div className="slideWrap_Container">
        <GlassSurface 
          width={100} 
          height={60}
          borderRadius={20}
          className="my-custom-class"
        >
        <DarkModeSwitch 
          isDark={isDark}       // Passiamo il valore
          toggleTheme={toggleTheme} // Passiamo la funzione per cambiarlo
          isUserLoggedIn={!!user} 
          onLogout={handleLogout} 
          onAddWatchToggle={() => setShowForm(!showForm)}
          isFormVisible={showForm}
        />
        </GlassSurface>
        {user && (
          <GlassSurface 
          width="min(350px, 30vw)"
          height={60}
          borderRadius={20}
          className="my-custom-class"
        >
          <Dock 
            items={items}
            activeSection={activeSection} 
            onLogout={handleLogout}
            onAddWatchToggle={() => setShowForm(!showForm)}
            isFormVisible={showForm}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
            isDark={isDark}
          />
          </GlassSurface>
        )}
        </div>
      <div id="home-section">
        <Clock /> 
      
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
      {loading && <div className="loading-spinner"></div>} 
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
          isDark={isDark} 
        />
      ) : (
        <>
          <div className="profile-info" id="profile-section">
            <div className="circular-text-container">
              {/* <CircularText
                text={`${email} • `}
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
                position="absolute"
                fontSize={14}
              /> */}
              <MetaBalls
                color={isDark ? "#ffcc00" : "#25627e"}
                cursorBallColor={isDark ? "#c8a102ff" : "#1f4d63ff"}
                // color={isDark ? "#000000ff" : "#ffffffff"}
                // cursorBallColor={isDark ? "#ffcc00" : "#28434fff"}
                // color={isDark ? "#ffffffff" : "#000000ff"}
                // cursorBallColor={isDark ? "#959595ff" : "#494949ff"}
                cursorBallSize={2}
                ballCount={16}
                animationSize={21}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={1}
                speed={0.3}
                zIndex={10}
              />
              <div className="profile-picture">
                  <UserProfile email={email} isDark={isDark} />
              </div>
            </div>
            <h4 className="Saluti">Benvenuto, {nickname}</h4>
            <p style={{ fontSize: "20px", paddingBottom: "20px"}}>Valore: {totalMoney.toLocaleString('it-IT')} €</p>
           </div>

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
            <FunctionsSection
              onDayWatchClick={() => handleDayWatch(user.id)}
              onOutfitImageChange={handleImageUpload}
              fileInputRefOutfit={fileInputRefOutfit}
            />
          </div>

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
            handleModifyImageChange={handleModifyImageChange} 
            fileInputRef={fileInputRef} 
            isDetailsMenuOpenMOD={isDetailsMenuOpenMOD}
            setIsDetailsMenuOpenMOD={setIsDetailsMenuOpenMOD}
            isNotesVisibleMOD={isNotesVisibleMOD}
            setIsNotesVisibleMOD={setIsNotesVisibleMOD}
            allFeaturesList={allFeaturesList}
            handleUpdatedFeatureChange={handleUpdatedFeatureChange}
            handleSaveChanges={handleSaveChanges}
          />

          <h2 id="watch-list">Lista Orologi</h2> 
          
          <div id="watch-list-section">
            <WatchList 
              watches={watches} 
              handleModifyWatch={handleModifyWatch} 
              handleDeleteWatch={handleDeleteWatch}
              handleFavoriteToggle={handleFavoriteToggle}
              handleInfoWatch={handleInfoWatch} 
              handleShowStats={handleShowStats}
              user={user} 
              handleInfiniteGrid={handleInfiniteGrid}
            />
          </div>
        </>
      )}
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
          <InfiniteGridModal 
            isVisible={isInfiniteGridVisible} 
            setIsVisible={setIsInfiniteGridVisible} 
            handleInfoWatch={handleInfoWatch}
            watches={watches} // Passa la lista completa degli orologi
          />
    </div>
    </>
  );
}

export default App;