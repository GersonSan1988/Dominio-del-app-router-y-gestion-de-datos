import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ojdpgluesaiqjhhihjjp.supabase.co";
const supabaseKey = "sb_publishable_L5h-RtRl6GcXNYshGHFqAQ_aHxcA4Ux";

//Creamos la conexion con supoabase

export const supabase = createClient(supabaseUrl, supabaseKey);