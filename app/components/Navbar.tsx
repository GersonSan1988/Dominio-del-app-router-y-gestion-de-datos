import Link from "next/link"; // Importamos el componente de navegacion
export default function Navbar() {
    return(
        <nav className="flex justify-between itmes-center bg-gray-800 p4 rounded-xl mb-10 max-w-7xl mx-auto">
        <h1 className="text-xl font-black text-white tracking-wider p-4"> 
            RICK Y MORTY
        </h1>

        <Link
        href="/favoritos"
        className="bg-green-500 hover:bf-green-600 text-white font-bold py-2 px-4 rounded-lg transition"
        >
            <span>⭐</span> Mis Favoritos
        </Link>
        </nav>
    )
}