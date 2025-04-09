import { NextRequest, NextResponse } from "next/server";
import { createSubmission, getSubmissions } from "@/app/api/functions/submissionFunctions";

export async function handlePostSubmission(req: NextRequest) {
    try {
        const body = await req.json();
        const submission = await createSubmission(body);
        return NextResponse.json(submission, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function handleGetSubmissions() {
    try {
        const submissions = await getSubmissions();
        return NextResponse.json(submissions);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
