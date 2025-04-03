"use client";

import { CodeXml } from "lucide-react";
import Link from "next/link";

export default function Footer() {

    const footerNavs = [
        {
            label: "Links",
            items: [
                { href: "/projects", name: "Projectos" },
                { href: "/members", name: "Membros" },
                { href: "/selective-process", name: "Processo seletivo" },
            ],
        },
        {
            label: "Endereco",
            items: [
                { href: "https://maps.app.goo.gl/CptzvWehYZkqxR7C9", name: "Rodovia LMG 746, Km 1" },
                { href: "https://maps.app.goo.gl/CptzvWehYZkqxR7C9", name: "Monte Carmelo - MG" },
                { href: "https://maps.app.goo.gl/CptzvWehYZkqxR7C9", name: "Laboratório 7" },
            ],
        },
        {
            label: "Contato",
            items: [
                { href: "mailto: montebotufumc@gmail.com", name: " montebotufumc@gmail.com" },
            ],
        },
    ];
    
    return (
        <footer className="pt-10">
            <div className="container-fluid mx-auto px-4 md:px-8">
                <div className="flex-1 mt-16 space-y-6 justify-around sm:flex md:space-y-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4 text-gray-600 dark:text-gray-300"
                                key={idx}
                            >
                                <h4 className="font-gesrics text-gray-800 dark:text-gray-400 font-semibold sm:pb-2">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={el.href}
                                                className="hover:text-yellow-custom duration-150"

                                            >
                                                {el.name}
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                   
                </div>

                <div className="font-gesrics container mx-auto px-6 md:px-8 sm:flex justify-between items-center mt-10 py-10 border-t">
                    <p className="font-medium">© 2025 MonteBot. Todos os direitos reservados.</p>
                    <Link href="https://github.com/monte-bot" target="_blank" rel="noopener noreferrer">
                        <div className="flex justify-center items-center gap-2 font-medium">

                            <CodeXml />
                            <p> Monte Bot</p>

                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}