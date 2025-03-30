import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Projects() {
    return (
        <div className="container mx-auto px-6 md:px-8 pt-20">
            <h1 className="text-3xl font-bold text-center mb-16">Nossos Projetos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 - Carro Autônomo */}
                <Card className="flex flex-col h-full overflow-hidden">
                    <div className="relative w-full h-48">
                        <Image
                            src="/projects/arduino.jpg"
                            height={200}
                            width={400}
                            alt="Carro Autônomo com Arduino"                            
                            className="object-cover !h-full"
                        />
                    </div>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Carro Autônomo com Arduino</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Desenvolvimento de veículos autônomos utilizando sensores e programação Arduino.
                        </p>
                    </CardContent>
                </Card>

                {/* Card 2 - Mão Mecânica */}
                <Card className="flex flex-col h-full overflow-hidden">
                    <div className="relative w-full h-48">
                        <Image
                            src="/projects/mao-mecanica.jpg"
                            height={200}
                            width={400}
                            alt="Mão Mecânica Controlada por Gestos"
                            className="object-cover !h-full"
                        />
                    </div>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Mão Mecânica Controlada por Gestos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Criação de próteses e mãos robóticas controladas por movimentos.
                        </p>
                    </CardContent>
                </Card>

                {/* Card 3 - Robótica com Raspberry Pi */}
                <Card className="flex flex-col h-full overflow-hidden">
                    <div className="relative w-full h-48">
                        <Image
                            src="/projects/raspbery.jpg"
                            height={200}
                            width={400}
                            alt="Robótica com Raspberry Pi"                            
                            className="object-cover !h-full"
                        />
                    </div>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Robótica com Raspberry Pi</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">Desenvolvimento de robôs inteligentes usando Raspberry Pi.</p>
                    </CardContent>
                </Card>

                {/* Card 4 - IoT e Automação Residencial */}
                <Card className="flex flex-col h-full overflow-hidden">
                    <div className="relative w-full h-48">
                        <Image
                            src="/projects/arduino.jpg"
                            height={200}
                            width={400}
                            alt="Projetos IoT e Automação Residencial"                            
                            className="object-cover !h-full"
                        />
                    </div>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Projetos IoT e Automação Residencial</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">Soluções inteligentes para casas e ambientes conectados.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

