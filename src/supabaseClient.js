import { createClient } from "@supabase/supabase-js";

const URL = "https://oksfqafeuiuxgzolqegz.supabase.co";
const apiKey = "sb_publishable_HBZuwJIOPz0nvY1T4k2YlQ_dTPGfIvb";

export const supabase = createClient(URL, apiKey);
