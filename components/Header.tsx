"use client";

import React from "react";
import Model3DScene from '@/components/Model3DScene';

export default function Header(){

    return(
        <section className="flex flex-col items-center justify-center mt-12">
          <Model3DScene />
          <div className="absolute text-center bottom-24 sm:bottom-32">
            <h1 className="text-5xl py-4 sm:text-8xl">Sophie LAM</h1>
            <h2 className="text-3xl sm:text-5xl">ASPIRING FRONT-END WEB DEVELOPER</h2>
          </div>
        </section>
    );
}