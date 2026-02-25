import { supabase } from "./supabase";

export async function loginWithSupabase(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function logoutFromSupabase() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
