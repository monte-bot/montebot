import dynamic from "next/dynamic";

const RobotViewer = dynamic(() => import("../robot-model/robot-view"), { ssr: false });

export default function Hero() {
    return (
        <div className="md:h-[70vh] container mx-auto px-6 md:px-8">
            <section className="pt-8 md:pt-24  pb-12 items-center lg:flex lg:justify-content-between">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-black dark:text-white font-bold text-4xl xl:text-5xl">
                        Bem-vindo ao
                        <span className="text-yellow-custom"> Laboratório de Robótica </span>
                        da UFU de Monte Carmelo
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        Somos o MonteBot, o núcleo de robótica do campus Monte Carmelo da UFU. Desenvolvemos projetos que unem criatividade, tecnologia e inovação, integrando alunos de diferentes cursos em soluções que transformam ideias em realidade.
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a href="#" className="px-7 py-3 w-full bg-yellow-custom text-black dark:text-white text-center rounded-md shadow-md block sm:w-auto">
                            Saber mais
                        </a>
                    </div>
                </div>
                <div>
                    <RobotViewer />
                </div>
            </section>
        </div>
    )
}