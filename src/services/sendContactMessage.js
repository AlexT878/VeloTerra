import { supabase } from "./supabase";

export async function sendContactMessage(formValues) {
  try {
    const { data, error } = await supabase.from("messages").insert([
      {
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
      },
    ]);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
