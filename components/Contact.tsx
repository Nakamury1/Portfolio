"use client";

import "../public/style.css"
import Image from "next/image"

export default function Contact(){
    return(
        <>
        <div className="flex flex-col justify-center items-center py-24 text-2xl px-4 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="flex flex-col items-center w-full md:w-1/2 px-6 md:px-12 text-center md:text-center">
                    <h3 className="text-4xl md:text-6xl pb-4">LET&apos;S WORK TOGETHER</h3>
                    <div className="flex items-center justify-center md:justify-start">
                        <Image className="pr-2" src="/font_awesome/location.svg" alt="location" width={30} height={30} />
                        <p>Paris, Ile-de-France</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mt-2">
                        <Image className="pr-2" src="/font_awesome/mail.svg" alt="mail" width={30} height={30} />
                        <h3>sophielamsova29@gmail.com</h3>
                    </div>
                </div>

                <form className="flex flex-col justify-center items-center mt-8 text-2xl w-full md:w-1/2 px-6 md:px-12">
                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <input className="w-full py-2 pl-4 bg-transparent border-b-4 border-purple-700 placeholder:text-slate-900" type="text" name="nom" id="nom" placeholder="Your lastname" />
                        <input className="w-full py-2 pl-4 bg-transparent border-b-4 border-purple-700 placeholder:text-slate-900" type="text" name="prenom" id="prenom" placeholder="Your firstname" />
                    </div>
                    <br />
                    <input className="w-full py-2 pl-4 bg-transparent border-b-4 border-purple-700 placeholder:text-slate-900" type="email" name="email" id="email" placeholder="Your mail" />
                    <br />
                    <textarea className="w-full py-2 pl-4 bg-transparent border-b-4 border-purple-700 placeholder:text-slate-900" placeholder="Your message"></textarea>
                    <br />
                    <button className="relative font-custom px-12 py-2 overflow-hidden border-4 border-purple-700 text-[15px] transition-colors duration-1000 ease-in-out hover:text-white group">
                        Envoyer
                        <span className="absolute inset-[-2px] -z-10 origin-top-left translate-y-full bg-purple-700 transition-transform duration-1000 ease-in-out group-hover:translate-y-0"></span>
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}
