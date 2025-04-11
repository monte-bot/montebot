"use client";

import { useEffect, useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    ColumnDef,
    ColumnFiltersState,
    flexRender,
} from "@tanstack/react-table";
import {
    Table,
    TableHeader,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Student = {
    id: number
    name: string
    email: string
    studentId: string
    modality: string
    year: string
    experience: string
    motivation: string
    skills: string[]
    availability: string
    createdAt: string
}

const yearMap: Record<string, string> = {
    first: "1º Período",
    second: "2º Período",
    third: "3º Período",
    fourth: "4º Período",
    fifth: "5º Período",
    sixth: "6º Período",
    seventh: "7º Período",
    eighth: "8º Período",
};

const experienceMap: Record<string, string> = {
    none: "Nenhuma experiência",
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado",
};

const availabilityMap: Record<string, string> = {
    low: "Baixa (até 4h)",
    medium: "Média (5-8h)",
    high: "Alta (+8h)",
};

const skillsMap: Record<string, string> = {
    programming: "Programação",
    electronics: "Eletrônica",
    mechanics: "Mecânica",
    "3d-printing": "Impressão 3D",
    design: "Design",
};


const columns: ColumnDef<Student>[] = [
    { accessorKey: "name", header: "Nome" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "studentId", header: "Matrícula" },
    { accessorKey: "modality", header: "Modalidade" },

    {
        accessorKey: "year",
        header: "Período",
        cell: ({ row }) => yearMap[row.getValue("year") as string],
    },
    {
        accessorKey: "experience",
        header: "Experiência",
        cell: ({ row }) => experienceMap[row.getValue("experience") as string],
    },
    { accessorKey: "motivation", header: "Motivação" },
    {
        accessorKey: "skills",
        header: "Habilidades",
        cell: ({ row }) => {
            const skillValues = row.getValue("skills") as string[];
            return skillValues.map((s) => skillsMap[s] || s).join(", ");
        },
    },
    {
        accessorKey: "availability",
        header: "Disponibilidade",
        cell: ({ row }) => availabilityMap[row.getValue("availability") as string],
    },
    {
        accessorKey: "createdAt",
        header: "Data",
        cell: ({ row }) =>
            new Date(row.getValue("createdAt")).toLocaleDateString(),
    },
];

export default function StudentTable() {
    const [data, setData] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    useEffect(() => {
        fetch("/api/submit")
            .then((res) => res.json())
            .then(setData)
            .finally(() => setLoading(false));
    }, []);

    const table = useReactTable({
        data,
        columns,
        state: {
            columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div>
            <Input
                placeholder="Filtrar por email"
                value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                onChange={(e) =>
                    table.getColumn("email")?.setFilterValue(e.target.value)
                }
                className="mb-4"
            />

            {loading ? (
                <p>Carregando...</p>
            ) : (
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((group) => (
                            <TableRow key={group.id}>
                                {group.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

            <div className="mt-4 flex gap-2">
                <Button
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Anterior
                </Button>
                <Button
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Próxima
                </Button>
            </div>
        </div>
    );
}
