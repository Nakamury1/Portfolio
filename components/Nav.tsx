"use client";

import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "../public/style.css"

export default function Nav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="flex flex-wrap items-center justify-between p-4 md:justify-around">
            <Link href="/">
            <Image
                src="/Logo.png"
                alt="Logo du site"
                width={100}
                height={100}
            />
            </Link>
            <button 
                className="block md:hidden p-2 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image src="/font_awesome/menu.svg" alt="Menu" width={30} height={30} />
            </button>

            <div className={clsx(
                "flex-col text-xl md:flex md:flex-row md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all",
                { "hidden": !isOpen, "flex": isOpen }
            )}>
                <Link
                    href="/"
                    className={clsx("px-8 py-2 relative group",
                        pathname === "/" 
                            ? "text-purple-700" 
                            : "hover:text-purple-700"
                    )}
                >
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link
                    href="/projects"
                    className={clsx("px-8 py-2 relative group",
                        pathname === "/projects" 
                            ? "text-purple-700" 
                            : "hover:text-purple-700"
                    )}
                >
                PROJECTS
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link
                    href="/about"
                    className={clsx("px-8 py-2 relative group",
                        pathname === "/about" 
                            ? "text-purple-700" 
                            : "hover:text-purple-700"
                    )}
                >
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>
            <div className="hidden md:flex space-x-4">
                <Image className="px-2" src="/font_awesome/mail.svg" alt="mail" width={45} height={45} />
                <Link href="https://github.com/Nakamury1">
                <Image className="px-2" src="/font_awesome/github.svg" alt="github" width={45} height={45} />
                </Link>
                <Link href="https://www.linkedin.com/in/sophie-lam-056937263/">
                <Image className="px-2" src="/font_awesome/linkedin.svg" alt="linkedin" width={45} height={45} />
                </Link>
            </div>
        </nav>
    );
}

