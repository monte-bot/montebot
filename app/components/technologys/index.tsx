import { HoverEffect } from "../../../components/ui/card-hover-effect";

export function Technologys() {
    return (
        <div className="container mx-auto px-6 md:px-8 pt-20">
            <div className="flex justify-center text-center">
                <h1 className="font-gesrics text-3xl font-bold pb-6">Tecnologias usadas</h1>
            </div>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Programacao embarcada",
        description:
            "Exploração de microcontroladores como Arduino e ESP32 para controle de hardware, automação e robôs inteligentes.",
    },
    {
        title: "Visao computacional",
        description:
            "Desenvolvimento de sistemas que interpretam imagens e vídeos, aplicando técnicas de IA para navegação e tomada de decisão em robôs.",
    },
    {
        title: "Controle de robos com sensores",
        description:
            "Integração de sensores para percepção do ambiente, permitindo que robôs reajam a obstáculos, luz, som, distância, entre outros.",
    },
    {
        title: "Impressao 3D",
        description:
            "Prototipagem rápida de peças e componentes para projetos robóticos, permitindo maior personalização e economia.",
    },
    {
        title: "Projetos com Raspberry Pi",
        description:
            "Uso de minicomputadores para desenvolvimento de sistemas embarcados mais robustos, com Linux, câmeras, redes e automação.",
    },
    {
        title: "Competicao de robos segue-linha",
        description:
            "Construção e programação de robôs capazes de seguir trajetos automaticamente, otimizando velocidade e precisão.",
    },
    {
        title: "Internet das Coisas (IoT)",
        description:
            "Conexão de dispositivos à internet para monitoramento e controle remoto de sistemas, aplicando em automação residencial e industrial.",
    },
    {
        title: "Prototipagem e eletronica",
        description:
            "Criação de circuitos eletrônicos personalizados para testes e validações de ideias, com foco em projetos educacionais e funcionais.",
    },
];

