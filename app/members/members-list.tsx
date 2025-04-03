import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function MembersList() {
    const testimonials = [
        {
            quote: "Apaixonado por Robótica",
            name: "Diego",
            designation: "Professor Responsável",
            src: "/members/Diego.JPG",
        },
        {
            quote: "Robótica",
            name: "Leo",
            designation: "Membro",
            src: "/members/Leo.jpeg",
        },
        {
            quote: "Robótica",
            name: "Bruno",
            designation: "Membro",
            src: "/members/bruno.jpeg",
        },
        {
            quote: "Robótica",
            name: "Nathan",
            designation: "Membro",
            src: "/members/Nathan.png",
        },
        {
            quote: "Robótica",
            name: "Victor",
            designation: "Membro",
            src: "/members/briza.PNG",
        },
        {
            quote: "Robótica",
            name: "Gabriel",
            designation: "Membro",
            src: "/members/gabriel.jpeg",
        },
        {
            quote: "Robótica",
            name: "Duda",
            designation: "Membro",
            src: "/members/Duda.JPG",
        },
              
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
