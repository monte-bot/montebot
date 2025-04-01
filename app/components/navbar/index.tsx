"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from '../mode-toogle';
import { Logo } from '../logo';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);    

    const navigation = [
        { title: "Projetos", path: "/projetos" },
        { title: "Membros", path: "/membros" },
        { title: "Processo Seletivo", path: "/processo" }
    ];    

    return (
        <nav className="container mx-auto">
            <div className="flex items-center justify-between md:py-4 px-4 md:px-8">

                <div className="flex-shrink-0">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                <div className="hidden md:flex flex-1 justify-center space-x-6">
                    {navigation.map((item, idx) => (
                        <Link key={idx} href={item.path} className="font-gesrics duration-150 text-black dark:text-white hover:text-blue-tech dark:hover:text-blue-tech">
                            {item.title}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex justify-content-center items-center gap-4">
                    <Link href="/login" className="font-gesrics py-2 px-4 text-white bg-blue-tech hover:bg-blue-900 rounded-md shadow duration-150">
                        Login
                    </Link>
                    <ModeToggle />
                </div>

                <div className="md:hidden flex items-center gap-2 p-3">
                    <ModeToggle />
                    <button
                        className="text-black dark:text-white p-2 focus:outline-none w-10 h-10 flex items-center justify-center"
                        onClick={() => setMenuOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white text-xl transition-all duration-300 ease-in-out animate-fade-in">
                    <div className="absolute top-4 right-4">
                        <button
                            className="text-white p-2 focus:outline-none w-10 h-10 flex items-center justify-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col items-center space-y-6 mt-10">
                        {navigation.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.path}
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-yellow-custom"
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Link
                            href="/login"
                            onClick={() => setMenuOpen(false)}
                            className="font-gesrics py-2 px-4 mt-6 bg-yellow-custom text-white dark:text-black rounded-md hover:bg-yellow-700 duration-150"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}