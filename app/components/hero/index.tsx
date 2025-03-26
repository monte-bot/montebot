import dynamic from "next/dynamic";

const RobotViewer = dynamic(() => import("../robot-model/robot-view"), { ssr: false });

export default function Hero() {
    return (
        <div className="md:h-[70vh]">
            <section className="pt-24 mx-auto max-w-screen-xl pb-12 items-center lg:flex lg:justify-content-between px-6 md:px-0">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-black dark:text-white font-bold text-4xl xl:text-5xl">
                        Bem-vindo ao
                        <span className="text-yellow-custom"> Laboratório de Robótica </span>
                        da UFU de Monte Carmelo
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a href="javascript:void(0)" className="px-7 py-3 w-full bg-yellow-custom text-black dark:text-white text-center rounded-md shadow-md block sm:w-auto">
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