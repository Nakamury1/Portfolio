'use client'

import Image from "next/image";

export default function All_Projects() {
 
  return (
    <>
    <h1 className="flex justify-center items-center mt-8 md:mt-12 text-3xl sm:text-4xl md:text-5xl text-center px-4">PERSONAL PROJECTS</h1>
    <section className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
      
      <div className="flex flex-col justify-center items-center border-2 border-purple-700 m-4 sm:m-6 md:m-8 w-2/3 sm:w-4/5 md:w-2/5 lg:w-1/3 xl:w-1/4">
        <Image
            className="w-full"
            src="/images_projects/potter.png"
            alt="img projet"
            width={400}
            height={200}
        />
        <div className="p-4">
          <h3 className="text-2xl sm:text-3xl">HARRY POTTER</h3>
          <p className="py-2">Réalisation d&apos;un site de collection de cartes et d&apos;ouvertures de booster</p>
          <div className="flex flex-row flex-wrap">
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">HTML</p>
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">CSS</p>
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">JS</p>
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">Node.js</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center border-2 border-purple-700 m-4 sm:m-6 md:m-8 w-2/3 sm:w-4/5 md:w-2/5 lg:w-1/3 xl:w-1/4">
        <Image
            className="w-full"
            src="/images_projects/jiniss.png"
            alt="img projet"
            width={400}
            height={200}
        />
        <div className="p-4">
          <h3 className="text-2xl sm:text-3xl">JINISS</h3>
          <p className="py-2">Réalisation d&apos;un site fictif d&apos;un restaurant avec possibilité de réserver une table</p>
          <div className="flex flex-row flex-wrap">
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">HTML</p>
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">CSS</p>
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">JS</p>
          </div>
        </div>
      </div>
      </section>

      <section className="flex flex-col md:flex-row md:flex-wrap justify-center items-center mb-24">
      <div className="flex flex-col justify-center items-center border-2 border-purple-700 m-4 sm:m-6 md:m-8 w-2/3 sm:w-4/5 md:w-2/5 lg:w-1/3 xl:w-1/4">
        <Image
            className="w-full"
            src="/images_projects/pokemon.png"
            alt="img projet"
            width={400}
            height={200}
        />
        <div className="p-4">
          <h3 className="text-2xl sm:text-3xl">COMBAT POKEMON</h3>
          <p className="py-2">Réalisation d&apos;une simulation de jeu de combat Pokémon</p>
          <div className="flex flex-row flex-wrap">
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">PHP</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center border-2 border-purple-700 m-4 sm:m-6 md:m-8 w-2/3 sm:w-4/5 md:w-2/5 lg:w-1/3 xl:w-1/4">
        <Image
            className="w-full"
            src="/images_projects/basketgame.png"
            alt="img projet"
            width={400}
            height={200}
        />
        <div className="p-4">
          <h3 className="text-2xl sm:text-3xl">BASKET GAME</h3>
          <p className="py-2">Réalisation du site web du jeu de société Basket Game dans le cadre d&apos;une bourse aux projets</p>
          <div className="flex flex-row flex-wrap">
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">HTML</p>
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">CSS</p>
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">JS</p>
            <p className="px-2 sm:px-4 mr-2 mb-2 border border-purple-700 text-sm sm:text-base">GSAP</p>
          </div>
        </div>
      </div>
    </section>
  </>
    
  );
}