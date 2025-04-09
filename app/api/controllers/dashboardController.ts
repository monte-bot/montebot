import { NextResponse } from "next/server";
import { getDashboardData } from "@/app/api/functions/getDashboardData";

export async function handleGetDashboard() {
    try {
        const data = await getDashboardData();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Erro no dashboard:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
