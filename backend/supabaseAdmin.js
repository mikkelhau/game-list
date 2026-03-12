import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const URL = `https://${process.env.SUPABASE_URL}.supabase.co`;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin = createClient(URL, supabaseServiceRoleKey);
