import { supabase } from "./supabase";

export async function fetchBikes() {
  try {
    const { data, error } = await supabase.from("bikes").select("*");

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

export async function insertBikeInDB(bikeData) {
  try {
    const { data, error } = await supabase
      .from("bikes")
      .insert([bikeData])
      .select();

    if (error) {
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error("Error adding bike:", error.message);
    throw error;
  }
}

export async function deleteBikeFromDB(id) {
  try {
    const { error } = await supabase.from("bikes").delete().eq("id", id);

    if (error) {
      throw error;
    }
    return id;
  } catch (error) {
    console.error("Error deleting:", error.message);
    throw error;
  }
}
