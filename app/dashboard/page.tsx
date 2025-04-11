import { redirect } from "next/navigation";
import { getAuthSession } from "../components/auth/config";
import { headers } from "next/headers";

import { Users } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/card";
import BarChart from "@/components/barchar";
import SalesCard, { SalesProps } from "@/components/sales-card";
import DashboardLayout from "../components/dashboard-layout";

type DashboardResponse = {
    total: number;
    latest: {
        name: string;
        email: string;
        createdAt: string;
    }[];
    barChartData: {
        name: string;
        total: number;
    }[];
};

export default async function Dashboard() {
    const session = await getAuthSession();

    if (!session) {
        redirect("/unauthorized");
    }

    const host = headers().get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/api/dash`, {
        cache: "no-store",
    });
    const { total, latest, barChartData }: DashboardResponse = await res.json();

    const cardData: CardProps[] = [
        {
            label: "Inscrições",
            amount: `${total}`,
            discription: "Total de candidatos",
            icon: Users,
        },
        {
            label: "Inscrições",
            amount: `${total}`,
            discription: "Total de candidatos",
            icon: Users,
        },
        {
            label: "Inscrições",
            amount: `${total}`,
            discription: "Total de candidatos",
            icon: Users,
        },
        {
            label: "Inscrições",
            amount: `${total}`,
            discription: "Total de candidatos",
            icon: Users,
        },
    ];

    const userSalesData: SalesProps[] = latest.map((u) => ({
        name: u.name,
        email: u.email,
        saleAmount: new Date(u.createdAt).toLocaleDateString("pt-BR"),
    }));

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-5 w-full p-10">
                <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                    {cardData.map((d, i) => (
                        <Card
                            key={i}
                            amount={d.amount}
                            discription={d.discription}
                            icon={d.icon}
                            label={d.label}
                        />
                    ))}
                </section>

                <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
                    <CardContent>
                        <p className="p-4 font-semibold">Visão geral</p>
                        <BarChart data={barChartData} />
                    </CardContent>

                    <CardContent className="flex justify-between gap-4">
                        <section>
                            <p>Inscrições Recentes</p>
                            <p className="text-sm text-gray-400">
                                Últimos registros feitos na plataforma
                            </p>
                        </section>
                        {userSalesData.map((d, i) => (
                            <SalesCard
                                key={i}
                                email={d.email}
                                name={d.name}
                                saleAmount={d.saleAmount}
                            />
                        ))}
                    </CardContent>
                </section>
            </div>
        </DashboardLayout>
    );
}