import prisma from "../database/db";

export const getDashboardData = async () => {
    const total = await prisma.submission.count();

    const latest = await prisma.submission.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        select: {
            name: true,
            email: true,
            createdAt: true,
        },
    });

    const submissions = await prisma.submission.findMany({
        select: {
            createdAt: true,
        },
    });
    
    const weekDays: string[] = [
        "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
    ];

    const groupByWeekDay: Record<string, number> = {
        Domingo: 0,
        Segunda: 0,
        Terça: 0,
        Quarta: 0,
        Quinta: 0,
        Sexta: 0,
        Sábado: 0
    };

    submissions.forEach(({ createdAt }) => {
        const dayIndex = new Date(createdAt).getDay();
        const dayName = weekDays[dayIndex];
        groupByWeekDay[dayName]++;
    });

    const barChartData = weekDays.map((day) => ({
        name: day,
        total: groupByWeekDay[day],
    }));

    return { total, latest, barChartData };
};
