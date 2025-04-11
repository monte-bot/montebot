import { NextRequest, NextResponse } from "next/server";
import { createSubmission } from "../functions/submissionFunctions";

export async function handlePostSubmission(req: NextRequest) {
    try {
        const body = await req.json();
        const submission = await createSubmission(body);
        return NextResponse.json({ message: "Inscrição criada", submission }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: "Erro", error: error.message }, { status: 500 });
    }
}
