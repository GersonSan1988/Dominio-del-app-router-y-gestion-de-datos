import Link from "next/link";
import { CardCharacter } from "../components";
import { supabase } from "../repositories/supabase"
import Navbar from "../components/Navbar";


export default async function page() {
    //voy a obtener todos los personajes favoritos
    const {data:favoritos,error} = await supabase.from("favoritos").select("*").order('id');

  return (
    <div>
        <Navbar />
        <Link href="/" className="bg-blue-600 text-white font-bold rounded-xl">
        Volver al inicio
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6>">
        {favoritos?.map((pj) => {
            return <CardCharacter key={pj.id} id={pj.character_id} nombre={pj.name} imagen={pj.image} estado={pj.status}/>
        })}
    </div>
    </div>
  )
}
