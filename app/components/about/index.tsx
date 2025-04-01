import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="container mx-auto px-6 md:px-8 pt-6">
            <div className="flex justify-center text-center">
                <h1 className="font-gesrics text-3xl font-bold pb-12">Sobre Nos</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="flex-1">
                    <Image
                        className="rounded-md"
                        src="/lab.png"
                        width={1536}
                        height={1024}
                        alt="Imagem do Laboratório"
                    />
                </div>
                <div className="flex-1 space-y-6">
                    <p className="text-xl text-justify indent-8">
                        O <strong className="font-gesrics">MonteBot</strong> é o núcleo de robótica da Universidade Federal de Uberlândia – Campus Monte Carmelo. Nosso objetivo é transformar conhecimento acadêmico em soluções práticas e inovadoras.
                    </p>
                    <p className="text-xl text-justify indent-8">
                        Atuamos em diversas frentes como robótica com Arduino, desenvolvimento de sistemas embarcados, controle de sensores, automação com Raspberry Pi, além de projetos com visão computacional e inteligência artificial.
                    </p>
                    <p className="text-xl text-justify indent-8">
                        No MonteBot, acreditamos na aprendizagem colaborativa e na experimentação como formas de impulsionar a criatividade dos alunos. Participamos de competições, promovemos oficinas, organizamos eventos e buscamos constantemente aplicar a tecnologia para resolver desafios do mundo real.
                    </p>
                    <p className="text-xl text-justify indent-8">
                        Se você é apaixonado por robótica, tecnologia e inovação, este é o lugar certo para colocar suas ideias em movimento.
                    </p>   
                </div>
            </div>
        </div>
    );
}
