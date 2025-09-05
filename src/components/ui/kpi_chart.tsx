"use client";

import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type KpiChartProps = {
  data: { name: string; value: number }[];
};

function KpiChart({ data }: KpiChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ left: 12, right: 12 }}>
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        <Area type="monotone" dataKey="value" fillOpacity={0.15} strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export { KpiChart };
