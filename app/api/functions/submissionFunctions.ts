import prisma from "../database/db";

export const createSubmission = async (data: {
    name: string;
    email: string;
    studentId: string;
    modality: "web" | "design" | "marketing" | "robotics";
    year: "first" | "second" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "eighth";
    experience: string;
    motivation: string;
    skills: string[];
    availability: string;
}) => {
    try {
        const submission = await prisma.submission.create({
            data: {
                name: data.name,
                email: data.email,
                studentId: data.studentId,
                modality: data.modality,
                year: data.year,
                experience: data.experience,
                motivation: data.motivation,
                skills: {
                    set: data.skills ?? [],
                },
                availability: data.availability,
            },
        });
        return submission;
    } catch (error) {
        console.error("Erro ao salvar inscrição: ", error);
        throw new Error("Erro ao salvar inscrição");
    }
};

export const getSubmissions = async () => {
    try {
        const submissions = await prisma.submission.findMany();
        return submissions;
    } catch (error) {
        console.error("Erro ao buscar inscrições: ", error);
        throw new Error("Erro ao buscar inscrições");
    }
};
