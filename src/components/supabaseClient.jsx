import { createClient } from "@supabase/supabase-js";

// Queste righe le hai già
const supabaseUrl = "https://htopqijsvgaqjrvvgpjh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0b3BxaWpzdmdhcWpydnZncGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMjQyOTcsImV4cCI6MjA1NjYwMDI5N30.pVzMwoPz1VL3EikMUbDaBwA6X47ehZb2Wu-P9-wk2a0";

// Aggiungi 'export' qui
export const supabase = createClient(supabaseUrl, supabaseAnonKey);