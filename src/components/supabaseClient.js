import { createClient } from "@supabase/supabase-js";

// Questo file ha UNA responsabilità: creare ed esportare il client
const supabaseUrl = "https://htopqijsvgaqjrvvgpjh.supabase.co";

// --- ERRORE CORRETTO QUI ---
// Era "HD256", è stato corretto in "HS256"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0b3BxaWpzdmdhcWpydnZncGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMjQyOTcsImV4cCI6MjA1NjYwMDI5N30.pVzMwoPz1VL3EikMUbDaBwA6X47ehZb2Wu-P9-wk2a0";
// --- FINE CORREZIONE ---

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
