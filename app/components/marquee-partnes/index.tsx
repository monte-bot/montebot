import { Marquee } from "@/components/magicui/marquee"
import Image from "next/image";

const Logos = {
    ufu: () => (
        <Image src="/partnes/ufu-logo.png" width={200} height={200} alt="Logo UFU" />
    ),
    facom: () => (
        <Image src="/partnes/facom-logo.png" width={250} height={250} alt="Logo FACOM" />
    ),
    // proex: () => (
    //     <Image src="/partnes/proex-logo.png" width={200} height={200} alt="Logo Proex" />
    // )
};


export function MarqueeDemo() {
    const arr = [Logos.ufu, Logos.facom]

    return (
        <div className="pt-12 container mx-auto px-6 md:px-8">
            <div className="flex justify-center text-center">
                <h1 className="font-gesrics text-3xl font-bold pb-12">Parceiros</h1>
            </div>
            <Marquee>
                {arr.map((Logo, index) => (
                    <div
                        key={index}
                        className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
                    >
                        <Logo />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}