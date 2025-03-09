"use client";

import "../public/style.css"

import Header from "@/components/Header";
import Aboutme from "@/components/Aboutme";
import Competences from "@/components/Competences";
import Contact from "@/components/Contact";

export default function Home() {
    
    return(
      <main>
      <Header/>
      <Aboutme/>
      <Competences/>
      <Contact/>
      </main>
    );
}
