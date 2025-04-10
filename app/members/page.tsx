import Image from "next/image"

const members = [
    {
        id: 1,
        name: "Diego Nunes Molinos",
        role: "Professor Responsável",
        bio: "Doutor em Ciência da Computação",
        image: "/members/Diego.JPG",
    },
    {
        id: 2,
        name: "Leonardo Cardoso de Moura",
        role: "Aluno Responsável",
        bio: "Graduando em Sistemas de Informação entusiasta em robotica e impressão 3d",
        image: "/members/Leo.jpeg",
    },
    {
        id: 3,
        name: "Bruno Ferrari",
        role: "Membro",
        bio: "Graduando em Sistemas de Informação",
        image: "/members/bruno.jpeg",
    },
    {
        id: 4,
        name: "Nathan Mota",
        role: "Web",
        bio: "Desenvolvedor Full-Stack",
        image: "/members/Nathan.png",
    },
    {
        id: 5,
        name: "Victor Brizante",
        role: "Membro",
        bio: "Graduando em Sistemas de Informação",
        image: "/members/briza.PNG",
    },
    {
        id: 6,
        name: "Gabriel Fernandes",
        role: "Designer",
        bio: "Graduando em Sistemas de Informação",
        image: "/members/gabriel.jpeg",
    },
    {
        id: 7,
        name: "Maria Eduarda",
        role: "Membro",
        bio: "Graduanda em Sistemas de Informação",
        image: "/members/Duda.JPG",
    }
]

export default function Members() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-gesrics md:text-5xl font-bold mb-4">Nossa Equipe</h1>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
                    Conheça os profissionais e entusiastas que fazem parte da nossa organização e trabalham para desenvolver
                    projetos inovadores em robótica.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member) => (
                    <div
                        key={member.id}
                        className="group relative overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:scale-105"
                    >
                        <div className="aspect-square overflow-hidden">
                            <Image
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                width={400}
                                height={400}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col
                         justify-end p-6">
                            <h3 className="text-2xl font-bold mb-1 text-white">{member.name}</h3>
                            <p className="text-yellow-500 font-medium mb-2">{member.role}</p>
                            <p className="text-gray-300">{member.bio}</p>
                            <div className="mt-4 opacity-0 transform translate-y-4 transition-all 
                            duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}