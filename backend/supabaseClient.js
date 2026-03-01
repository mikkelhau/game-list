import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const URL = process.dotenv.SUPABASE_URL;
const apiKey = process.dotenv.SUPABASE_ANON_KEY;

export const supabase = createClient(URL, apiKey);
