"use client";

import { CodeXml } from "lucide-react";
import Link from "next/link";

export default function Footer() {

    const footerNavs = [
        {
            label: "Explore a Loja",
            items: [
                { href: "#", name: "Sobre Nós" },
                { href: "#", name: "Projetos" },
                { href: "#", name: "Membros" },
                { href: "#", name: "Contato" },
            ],
        },
        {
            label: "Endereço",
            items: [
                { href: "#", name: "Rodovia LMG 746, Km 1" },
                { href: "#", name: "Monte Carmelo - MG" },
                { href: "#", name: "Laboratório 7" },
                { href: "#", name: "Telefone: (34) 3810-1044" },
            ],
        },
        {
            label: "Minha Conta",
            items: [
                { href: "#", name: "Envio e Entrega" },
                { href: "#", name: "Login" },
                { href: "#", name: "Cadastrar" },
                { href: "#", name: "Meus Pedidos" },
            ],
        },
        {
            label: "Contato",
            items: [
                { href: "mailto: montebotufumc@gmail.com", name: " montebotufumc@gmail.com" },
                { href: "tel:+5511999999999", name: "(11) 99999-9999" },
            ],
        },
    ];

    // const paymentMethods = [
    //     { name: "Visa", src: "/payments/visa.svg" },
    //     { name: "Mastercard", src: "/payments/mastercard.svg" },
    //     { name: "Elo", src: "/payments/elo.svg" },

    //     { name: "Pix", src: "/payments/pix.svg" },
    //     { name: "Boleto", src: "/payments/boleto.svg" },
    // ];

    return (
        <footer className="pt-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4 text-gray-600 dark:text-gray-300"
                                key={idx}
                            >
                                <h4 className="text-gray-800 dark:text-gray-400 font-semibold sm:pb-2">
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

                    {/* <div>
                        <h4 className="text-gray-800 dark:text-gray-400 font-semibold sm:pb-2">
                            Pagamento
                        </h4>
                        <div className="flex flex-wrap gap-4 mt-4">
                            {paymentMethods.map((method, idx) => (
                                <Image
                                    key={idx}
                                    src={method.src}
                                    alt={method.name}
                                    width={45}
                                    height={34}
                                    className="h-auto"
                                />
                            ))}
                        </div>
                    </div> */}
                </div>

                <div className="sm:flex justify-between items-center mt-10 py-10 border-t">
                    <p className="font-medium">© 2025 MonteBot. Todos os direitos reservados.</p>
                    <Link href="https://nathanmota-portifolio.vercel.app/pt" target="_blank" rel="noopener noreferrer">
                        <div className="flex justify-center items-center gap-2 font-medium">

                            <CodeXml />
                            <p> Nathan Mota</p>

                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}