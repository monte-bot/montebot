import Image from "next/image";

const projects = [
    {
        title: "Carro com Arduino",
        description:
            "Veículo autônomo controlado por Arduino, equipado com sensores ultrassônicos para desviar de obstáculos. Projeto ideal para introdução à robótica móvel.",
        image: "/projects/car.jpg",
    },
    {
        title: "Mão Mecânica",
        description:
            "Protótipo de mão robótica impressa em 3D, utilizando Arduino e motores servo para simulação de movimentos humanos. Foco em biomecânica e controle fino.",
        image: "/projects/mao-mecanica.jpg",
    },
    {
        title: "Automação com Raspberry Pi",
        description:
            "Sistema de automação residencial integrando Raspberry Pi com Arduino para controle de iluminação, sensores de ambiente e monitoramento via rede.",
        image: "/projects/raspbery.jpg",
    },
    {
        title: "Projetos Diversos com Arduino",
        description:
            "Coleção de projetos experimentais utilizando Arduino: semáforo inteligente, monitor de temperatura, controle de LEDs RGB, entre outros.",
        image: "/projects/arduino.jpg",
    },
];

export default function Projects() {
    return (
        <div className="container mx-auto px-4 md:px-10 py-12 space-y-24">
            <div className="text-center">
                <h1 className="font-gesrics text-4xl font-bold tracking-wide">Projetos</h1>
            </div>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                        } items-center gap-12 bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm transition hover:scale-[1.01] duration-300`}
                >
                    <div className="w-full md:w-1/2">
                        <Image
                            className="rounded-lg shadow-md"
                            src={project.image}
                            width={1024}
                            height={768}
                            alt={`Imagem do projeto ${project.title}`}
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4 max-w-xl">
                        <h2 className="text-3xl font-bold font-gesrics text-yellow-400">{project.title}</h2>
                        <p className="text-lg text-justify text-gray-800 dark:text-gray-200 leading-relaxed indent-8">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
