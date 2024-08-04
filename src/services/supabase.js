import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wtrmcqkoutfwcvfdilbz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cm1jcWtvdXRmd2N2ZmRpbGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MDU4MDYsImV4cCI6MjAzODA4MTgwNn0.2dQ1xBEbuy83PGw8DPPCsfcKcL00FSBUTGGgxWoWRPs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
