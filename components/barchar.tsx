'use client'

import React from "react"
import {
    BarChart as RechartsBarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts"

type BarChartData = {
    name: string
    total: number
}[]

type BarChartProps = {
    data: BarChartData
}

export default function BarChart({ data }: BarChartProps) {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <RechartsBarChart data={data}>
                <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    stroke="#888888"
                    fontSize={12}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    stroke="#888888"
                    fontSize={12}
                    tickFormatter={(value: number) => `${value}`}
                />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} fill="#facc15" />
            </RechartsBarChart>
        </ResponsiveContainer>
    )
}
