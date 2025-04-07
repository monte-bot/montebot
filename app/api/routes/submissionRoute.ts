import { NextApiRequest, NextApiResponse } from "next";
import { handlePostSubmission, handleGetSubmissions } from "../controllers/submissionController";

const submissionRoute = (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "POST":
            return handlePostSubmission(req, res);
        case "GET":
            return handleGetSubmissions(req, res);
        default:
            return res.status(405).json({ message: "Método não permitido" });
    }
};

export default submissionRoute;
