"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import type { Template } from "@/data/templates";

type DashboardData = NonNullable<Template["dashboardData"]>;

const chartColors = ["#6d5dfc", "#14b8a6", "#ff6b35", "#f5b849"];

export function DashboardCharts({ data }: { data: DashboardData }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return (
      <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="h-96 animate-pulse rounded-[1.5rem] border bg-[var(--surface)]" style={{ borderColor: "var(--border)" }} />
        <div className="h-96 animate-pulse rounded-[1.5rem] border bg-[var(--surface)]" style={{ borderColor: "var(--border)" }} />
        <div className="h-80 animate-pulse rounded-[1.5rem] border bg-[var(--surface)] lg:col-span-2" style={{ borderColor: "var(--border)" }} />
      </div>
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="rounded-[1.5rem] border bg-[var(--surface)] p-5" style={{ borderColor: "var(--border)" }}>
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-black">Revenue Momentum</h3>
          <span className="rounded-full bg-[var(--foreground)] px-3 py-1 text-xs font-black text-[var(--background)]">
            Live mock
          </span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.revenue}>
              <defs>
                <linearGradient id="revenue" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#6d5dfc" stopOpacity={0.55} />
                  <stop offset="95%" stopColor="#6d5dfc" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(127,127,127,0.18)" vertical={false} />
              <XAxis dataKey="month" stroke="var(--muted)" />
              <YAxis stroke="var(--muted)" />
              <Tooltip
                contentStyle={{
                  background: "var(--surface-strong)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  color: "var(--foreground)"
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#6d5dfc"
                strokeWidth={3}
                fill="url(#revenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-[1.5rem] border bg-[var(--surface)] p-5" style={{ borderColor: "var(--border)" }}>
        <h3 className="mb-5 text-lg font-black">Lead Sources</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.sources}
                dataKey="value"
                nameKey="name"
                innerRadius={64}
                outerRadius={98}
                paddingAngle={4}
              >
                {data.sources.map((entry, index) => (
                  <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "var(--surface-strong)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  color: "var(--foreground)"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-[1.5rem] border bg-[var(--surface)] p-5 lg:col-span-2" style={{ borderColor: "var(--border)" }}>
        <h3 className="mb-5 text-lg font-black">Lead Volume</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.revenue}>
              <CartesianGrid stroke="rgba(127,127,127,0.18)" vertical={false} />
              <XAxis dataKey="month" stroke="var(--muted)" />
              <YAxis stroke="var(--muted)" />
              <Tooltip
                contentStyle={{
                  background: "var(--surface-strong)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  color: "var(--foreground)"
                }}
              />
              <Bar dataKey="leads" fill="#14b8a6" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
