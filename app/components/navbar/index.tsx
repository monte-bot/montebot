"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { ModeToggle } from "../mode-toogle";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isClick, setIsClick] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Detecta o tema atual
    useEffect(() => {
        const darkMode = document.documentElement.classList.contains("dark");
        setIsDarkMode(darkMode);
    }, []);

    // Alterna a navegação do menu no mobile
    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <nav className="w-full h-14 flex items-center justify-between px-4 text-black/85 dark:text-white">
            <div>
                <div className="hidden md:block ml-10">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="flex items-center space-x-2 font-bold">
                            <Image
                                src={isDarkMode ? "/montebot-dark.png" : "/montebot-white.png"}
                                alt="Logo"
                                height={70}
                                width={70}
                            />
                        </Link>
                        <NavigationMenu>
                            <NavigationMenuList className="flex items-center space-x-4">
                                <NavigationMenuItem>
                                    <Link
                                        href="/"
                                        className="ml-6 text-lg text-zinc-700 dark:text-zinc-300 font-semibold"
                                    >
                                        Home
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        href="/"
                                        className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold"
                                    >
                                        Sobre nós
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        href="/"
                                        className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold"
                                    >
                                        Projetos
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        href="/"
                                        className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold"
                                    >
                                        Contatos
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="flex items-center space-x-2 font-bold">
                            <Image
                                src={isDarkMode ? "/montebot-dark.png" : "/montebot-white.png"}
                                alt="Logo"
                                height={70}
                                width={70}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden md:block mr-10">
                <div className="flex items-center space-x-4">
                    <Link href="https://github.com" target="_blank" aria-label="GitHub">
                        <FaGithub className="text-lg" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                        <FaXTwitter className="text-lg" />
                    </Link>
                    <ModeToggle />
                </div>
            </div>
            <div className="md:hidden">
                <div className="flex items-center space-x-4">
                    <div>
                        <ModeToggle />
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className={`inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-50`}
                            onClick={toggleNavbar}
                        >
                            {isClick ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-slate-950 flex flex-col items-center justify-center space-y-4 transition-transform duration-300 ease-in-out transform ${isClick ? "translate-x-0" : "-translate-x-full"
                    } z-40 md:hidden`}
            >
                <NavigationMenu>
                    <NavigationMenuList className="flex flex-col items-center space-y-4">
                        <NavigationMenuItem>
                            <Link
                                href="/"
                                className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold"
                            >
                                Home
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="/"
                                className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold"
                            >
                                Sobre nós
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="/"
                                className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold"
                            >
                                Projetos
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="/"
                                className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold"
                            >
                                Contatos
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
}
