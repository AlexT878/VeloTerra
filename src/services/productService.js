import { supabase } from "./supabase";

export async function fetchProducts() {
  try {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
}

export async function insertProductInDB(productData) {
  try {
    const { data, error } = await supabase
      .from("products")
      .insert([productData])
      .select();

    if (error) {
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error("Error adding product:", error.message);
    throw error;
  }
}

export async function deleteProductFromDB(id) {
  try {
    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      throw error;
    }
    return id;
  } catch (error) {
    console.error("Error deleting:", error.message);
    throw error;
  }
}
