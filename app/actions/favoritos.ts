import { supabase } from "../repositories/supabase";
import { Character } from "../types";

export async function guardaFavorito(Character: Character){

    const {error} = await supabase.from("favoritos").insert({
        character_id: Character.id,
        name: Character.name,
        image: Character.image,
        status: Character.status
    });

    if(error){
        console.error("Error al guardar",error);
        return {success:false}
    }

    
    return {success:true}
}