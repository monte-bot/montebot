import { Marquee } from "@/components/ui/marquee"
import Image from "next/image";

const Logos = {
    ufu: () => (
        <Image src="/partnes/ufu-logo.png" width={300} height={300} alt="Logo UFU" />
    ),
    facom: () => (
        <Image src="/partnes/facom-logo.png" width={350} height={350} alt="Logo FACOM" />
    ),
    proex: () => (
        <Image src="/partnes/proex-logo.png" width={300} height={300} alt="Logo Proex" />
    )
};


export function MarqueeDemo() {
    const arr = [Logos.ufu, Logos.facom, Logos.proex]

    return (
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
    )
}