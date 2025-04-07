import { NextApiRequest, NextApiResponse } from "next";
import { createSubmission, getSubmissions } from "../functions/submissionFunctions";

export const handlePostSubmission = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            const submissionData = req.body;
            const submission = await createSubmission(submissionData);
            return res.status(201).json({ message: "Inscrição criada com sucesso", submission });
        } catch (error: any) {
            return res.status(500).json({ message: "Erro ao criar inscrição", error: error.message });
        }
    } else {
        return res.status(405).json({ message: "Método não permitido" });
    }
};

export const handleGetSubmissions = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        try {
            const submissions = await getSubmissions();
            return res.status(200).json(submissions);
        } catch (error: any) {
            return res.status(500).json({ message: "Erro ao buscar inscrições", error: error.message });
        }
    } else {
        return res.status(405).json({ message: "Método não permitido" });
    }
};
