import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zlwrdpfnltzwqmvufpgy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpsd3JkcGZubHR6d3FtdnVmcGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNTU2MjAsImV4cCI6MjA2NTYzMTYyMH0._B3HBEgouGCKCn5Vali6MBtjDaLYfxSRp7W5-CJ0cww";

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getCitys() {
  const { data, error } = await supabase.from("city").select("*");

  if (error) {
    throw new Error("There is an error with getting citys");
  }

  return data;
}

export async function getOneCity(id) {
  const { data, error } = await supabase
    .from("city")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("City not found");
  }

  return data;
}

export async function createOneCity(newCity) {
  const { data, error } = await supabase
    .from("city")
    .insert([{ ...newCity }])
    .select()
    .single();

  if (error) {
    console.error("Error inserting city:", error.message);
    throw new Error(`Failed to create city: ${error.message}`);
  }

  return data;
}

export async function deleteOneCity(id) {
  const { data, error } = await supabase.from("city").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("City could not be deleted");
  }

  return data;
}
