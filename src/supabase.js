import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nrerhgpnbqcmvwykptvo.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yZXJoZ3BuYnFjbXZ3eWtwdHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE2OTc2MTksImV4cCI6MTk2NzI3MzYxOX0.mn2xqyek2Ka4ZOvcNPKWIydnaJr0Acopt-HhHVaOWh4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
