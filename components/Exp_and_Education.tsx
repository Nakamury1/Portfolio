import Image from "next/image";
import React from "react";

export default function Exp_and_Education(){
    return (
        <>
    <section className="min-h-screen flex justify-center items-center p-8 xl:px-44 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div className="timeline-col">
                <h2 className="text-4xl mb-8 flex items-center gap-4">EXPERIENCE</h2>
                <div className="timeline-box flex flex-col gap-8 border-l-4 border-purple-700 pl-8 after:animate-moveline"
                    style={{ animation: 'moveline 3s linear forwards' }}>
                    <div className="content-box relative flex flex-col gap-2 p-8 border-2 border-purple-700 opacity-0 delay-0" 
                    style={{ animation: 'movedown 1s linear forwards' }}>
                        <p className="date text-xl text-purple-700 font-bold">2021 - 2024</p>
                        <h3 className="text-2xl">Monitrice de colonie</h3>
                        <p className="text-lg">Animatrice à Neige et Soleil et à PEP50 pendant les vacances d&apos;été et d&apos;hiver</p>
                        <Image className="absolute left-[-60px] top-16 w-12 h-12 bg-purple-700 border-2 border-white rounded-full"
                            src="/flower.png" width={48} height={48} alt="experience-point"
                        />
                    </div>
                    <div className="content-box relative flex flex-col gap-2 p-8 border-2 border-purple-700 opacity-0 delay-1000" 
                        style={{ animation: 'movedown 1s linear forwards' }}>
                        <p className="date text-xl text-purple-700 font-bold">2021 - 2022</p>
                        <h3 className="text-2xl">MA2S Sorbonne</h3>
                        <p className="text-lg">Vice-présidente communication au sein de l&apos;association de filière de la licence MIASHS</p>
                        <Image className="absolute left-[-60px] top-16 w-12 h-12 bg-purple-700 border-2 border-white rounded-full"
                            src="/flower.png" width={48} height={48} alt="experience-point"
                        />
                    </div>
                </div>
            </div>

            <div className="timeline-col">
            <h2 className="text-4xl mb-8 flex items-center gap-4">EDUCATION</h2>
                <div className="timeline-box flex flex-col gap-8 border-l-4 border-purple-700 pl-8 after:animate-moveline2"
                    style={{ animation: 'moveline2 3s linear forwards' }}>
                    <div className="content-box relative flex flex-col gap-2 p-8 border-2 border-purple-700 opacity-0 delay-0" 
                        style={{ animation: 'movedown 1s linear forwards' }}>
                        <p className="date text-xl text-purple-700 font-bold">2024 - Now</p>
                        <h3 className="text-2xl">Institut de l&apos;Internet et du Multimédia (IIM)</h3>
                        <p className="text-lg">1ère année en Restart, 2e année dans le parcours Coding Digital Innovation</p>
                        <Image className="absolute left-[-60px] top-16 w-12 h-12 bg-purple-700 border-2 border-white rounded-full"
                            src="/flower.png" width={48} height={48} alt="graduation-point"
                        />
                    </div>
                    <div className="content-box relative flex flex-col gap-2 p-8 border-2 border-purple-700 opacity-0 delay-1000" 
                        style={{ animation: 'movedown 1s linear forwards' }}>
                        <p className="date text-xl text-purple-700 font-bold">2020 - 2023</p>
                        <h3 className="text-2xl">Université Paris 1 Panthéon-Sorbonne</h3>
                        <p className="text-lg">Licence de Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales (MIASHS)</p>
                        <Image className="absolute left-[-60px] top-16 w-12 h-12 bg-purple-700 border-2 border-white rounded-full"
                            src="/flower.png" width={48} height={48} alt="graduation-point"
                        />
                    </div>
                    <div className="content-box relative flex flex-col gap-2 p-8 border-2 border-purple-700 opacity-0 delay-2000" 
                        style={{ animation: 'movedown 1s linear forwards' }}>
                        <p className="date text-xl text-purple-700 font-bold">2020</p>
                        <h3 className="text-2xl">Lycée Gabriel Fauré</h3>
                        <p className="text-lg">Obtention du baccalauréat Scientifique</p>
                        <Image className="absolute left-[-60px] top-16 w-12 h-12 bg-purple-700 border-2 border-white rounded-full"
                            src="/flower.png" width={48} height={48} alt="graduation-point"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}