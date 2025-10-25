
  // const handleAddWatch = async () => {
  //   setLoading(true);
  //   try {
  //     if (isValidWatch(newWatch)) {
  //       console.log("Avvio dell'inserimento orologio");

  //       // Carica l'immagine e ottieni l'URL
  //       const imageUrl = newWatch.image ? await uploadImage(newWatch.image) : null;
  //       console.log("Immagine caricata con URL:", imageUrl);

  //       // Inserisci i dati nel database
  //       const { data, error } = await supabase
  //         .from("watches")
  //         .insert([{ ...newWatch, userid: user.id, image: imageUrl }])
  //         .select("*"); // Recupera i dati appena inseriti

  //       if (error) {
  //         throw error;
  //       }

  //       // Aggiorna la lista locale degli orologi per mostrare subito quello nuovo
  //       setWatches((prevWatches) => [...prevWatches, data[0]]);

  //       setNewWatch({ name: "", brand: "", year: "", image: "", movement: "", color: "", isFavorite: false, money: "" });
  //       setMessage("Orologio aggiunto con successo!");
  //     } else {
  //       setMessage("Compila tutti i campi correttamente!");
  //     }
  //   } catch (error) {
  //     console.error("Errore durante l'inserimento:", error);
  //     setMessage("Errore durante l'inserimento: " + (error.message || "Si è verificato un errore."));
  //   }
  //   setLoading(false);
  // };
