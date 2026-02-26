import { supabase } from "./supabase";

export async function sendContactMessage(formValues) {
  try {
    const { data, error } = await supabase
      .from("messages")
      .insert([
        {
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    return data?.[0]; // data[0] = ID
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
