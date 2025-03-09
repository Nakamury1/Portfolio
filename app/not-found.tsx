import Model3DScene from "@/components/Model3DScene";
import Link from "next/link";
 
export default function NotFound() {
  return (
    <main className="justify-center items-center flex flex-col h-3/4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">404 Not Found</h2>
      <p className="text-xl md:text-2xl text-gray-600 mb-2">Cette page n&apos;existe pas !</p>
      <Link href="/" className="inline-block px-6 py-3 text-lg md:text-xl text-white bg-purple-700 rounded-lg hover:bg-purple-800 transition-colors duration-300 hover:shadow-lg">Retourner sur la page d&apos;accueil</Link>
      <Model3DScene />   
    </main>
  );
}