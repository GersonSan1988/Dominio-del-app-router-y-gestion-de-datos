// rfc -> snippet
"use client";
import { guardaFavorito } from "../actions/favoritos";

//Declarar la interfacce para las props
interface CardCharaterProps {
  id:number;
    nombre:string;
    estado:string;
    imagen:string;
}

export default function CardCharacter({id,nombre,estado,imagen}:CardCharaterProps) {

  const handleGuardar = async () => {
    const pj = {
      id: id,
      name: nombre,
      status: estado,
      image: imagen
    }

    await guardaFavorito( pj )
    alert("Guardado en favoritos!");
  }


  return (
    <div className="border rounded-xl overflow-hidden bg-gray-800 border-gray-700">
      <img src={imagen} alt={nombre} className="w-full h64"/>
      <section className="p-4">
      <h2 className="text-lg font bold">Name: {nombre}</h2>
      <p className="text-sm mt-2">{estado}</p>
      <button onClick={handleGuardar}>Guardar en favoritos</button>
      </section>
    </div>
  )
}
