
import CardCharacter from "./components/CardCharacter"

import { Character } from "./types";

import Navbar from "./components/Navbar"

export default async function Home() {

  //MANDAR A FETCH A BUSCAR NUESTROS PERSONAJES
 
 
  const resultado = await fetch('https://rickandmortyapi.com/api/character')
  const data = await resultado.json();
  console.log(data);

  const personajes = data.results;
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <h1>Holiwis</h1>

{/* INGRESAR UNA NAVBAR CON: ---------- RETO ------------
Nombre de la app
2 etiquetas a:
-Home
-Favoritos

TIENE QUE ESTAR ESTILIZADO CON TAILWIND
*/}

<Navbar />
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    { personajes .map( (pj:Character) => {
      return <CardCharacter key={pj.id} id={pj.id} nombre={pj.name} imagen={pj.image} estado={pj.status}
      />
    
  })}
    </div>
    </div>
    );
  }

  

//zvB7cYXiwmjW6iWo