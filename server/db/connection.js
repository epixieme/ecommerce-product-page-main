import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables

const supabaseUrl = process.env.Ecommerce_URL; // Add your Supabase URL
const supabaseKey = process.env.SUPABASE_KEY; // Add your Supabase API Key
const supabase = createClient(supabaseUrl, supabaseKey);

export const queryDatabase = async () => {
  const { data, error } = await supabase.from("ecommerce").select("*"); // Replace with your table
  if (error) throw new Error(error.message);
  return data;
};

export const createData = async (newData) => {
  const { data, error } = await supabase.from("ecommerce").insert(newData); // Replace with your table
  if (error) throw new Error(error.message);
  return data;
};
