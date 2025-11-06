import { createClient } from "@supabase/supabase-js";

// 1. Leggi le variabili d'ambiente
// Usiamo i prefissi di React (REACT_APP_) o Vite (VITE_)
// Scegli quello che usi. Uso VITE_ come esempio:

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Se usi Create React App (CRA) al posto di Vite, la sintassi è:
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);