"use client";

import { useState, useRef, useCallback } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  LayoutDashboard,
  BarChart2,
  Settings,
  MessageSquare,
  Bell,
  Upload,
  Bot,
  Send,
  ChevronRight,
} from "lucide-react";

// ─── mock data ────────────────────────────────────────────────────────────────
const lineData = [
  { month: "Jan", a: 40, b: 60 },
  { month: "Feb", a: 80, b: 100 },
  { month: "Mar", a: 120, b: 90 },
  { month: "Apr", a: 100, b: 140 },
  { month: "May", a: 160, b: 170 },
  { month: "Jun", a: 190, b: 180 },
];

const barData = [
  { month: "Jan", a: 140, b: 200 },
  { month: "Feb", a: 310, b: 250 },
  { month: "Mar", a: 180, b: 310 },
  { month: "Apr", a: 260, b: 380 },
];

const initialMessages = [
  { id: 1, role: "ai", text: "Summary: Sales grew 12% last month." },
  { id: 2, role: "user", text: "" },
  {
    id: 3,
    role: "ai",
    text: "Recommendation: Focus marketing on Product B.",
  },
  { id: 4, role: "user", text: "" },
];

// ─── custom tooltip ───────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-lg border border-white/10 bg-[#0d1f2d]/90 px-3 py-2 text-xs text-white shadow-xl backdrop-blur">
        <p className="mb-1 font-semibold text-cyan-300">{label}</p>
        {payload.map((p: any) => (
          <p key={p.dataKey} style={{ color: p.color }}>
            {p.name}: {p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ─── nav ──────────────────────────────────────────────────────────────────────
function NavBar() {
  const [active, setActive] = useState("dashboard");
  const links = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "analytics", label: "Analytics", icon: BarChart2 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <header className="relative z-10 flex h-14 items-center border-b border-white/[0.07] bg-[#0b1622]/80 px-6 backdrop-blur">
      {/* logo */}
      <div className="mr-8 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
          <span className="text-sm font-bold text-white">D</span>
        </div>
      </div>

      {/* nav links */}
      <nav className="flex items-center gap-1">
        {links.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              active === id
                ? "bg-white/10 text-white shadow-inner"
                : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </nav>

      {/* right icons */}
      <div className="ml-auto flex items-center gap-3">
        <button 
            type="button" 
            title="Open messages" 
            aria-label="Open messages" 
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
            <MessageSquare size={16} />
        </button>
        <button type="button" 
            title="Open messages" 
            aria-label="Open messages" className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white">
          <Bell size={16} />
        </button>
        <div className="h-8 w-8 rounded-full bg-linear-to-br from-purple-500 to-pink-500" />
      </div>
    </header>
  );
}

// ─── chart cards ─────────────────────────────────────────────────────────────
function LineChartCard() {
  return (
    <div className="chart-card rounded-2xl border border-white/30 bg-white/5 p-4 backdrop-blur">
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={lineData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
          <XAxis
            dataKey="month"
            tick={{ fill: "#64748b", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#64748b", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            iconSize={6}
            wrapperStyle={{ fontSize: "11px", color: "#94a3b8", paddingTop: "4px" }}
          />
          <Line
            type="monotone"
            dataKey="a"
            name="Data"
            stroke="#22d3ee"
            strokeWidth={2}
            dot={{ r: 3, fill: "#22d3ee", strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="b"
            name="Data"
            stroke="#a855f7"
            strokeWidth={2}
            dot={{ r: 3, fill: "#a855f7", strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function BarChartCard() {
  return (
    <div className="chart-card rounded-2xl border border-white/30 bg-white/5 p-4 backdrop-blur">
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={barData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }} barGap={4}>
          <XAxis
            dataKey="month"
            tick={{ fill: "#64748b", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#64748b", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            iconSize={6}
            wrapperStyle={{ fontSize: "11px", color: "#94a3b8", paddingTop: "4px" }}
          />
          <Bar dataKey="a" name="Metrics" fill="#a855f7" radius={[3, 3, 0, 0]} />
          <Bar dataKey="b" name="Metrics" fill="#818cf8" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── upload zone ──────────────────────────────────────────────────────────────
function UploadZone() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploaded, setUploaded] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setUploaded(file.name);
  }, []);

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`upload-zone flex h-full cursor-pointer flex-col items-center justify-center gap-6 rounded-2xl border-2 border-dashed transition-all duration-300 ${
        isDragging
          ? "border-cyan-400/70 bg-cyan-500/10 shadow-[inset_0_0_40px_rgba(34,211,238,0.06)]"
          : "border-white/20 bg-white/5 hover:border-cyan-500/40 hover:bg-white/5"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        id="file-upload"
        accept=".xlsx,.xls,.csv"
        aria-label="Upload spreadsheet" // Fixes the accessibility error
        className="hidden"
        onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setUploaded(file.name);
        }}
        />

      {/* icon */}
      <div className="relative">
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 ${
            isDragging ? "scale-110 border-cyan-400/30" : ""
          }`}
        >
          <Upload
            size={32}
            className={`transition-colors duration-300 ${
              isDragging ? "text-cyan-400" : "text-slate-400"
            }`}
          />
        </div>
        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#0b1622]">
          <ChevronRight size={10} className="text-slate-500" />
        </div>
      </div>

      {uploaded ? (
        <div className="text-center">
          <p className="text-sm font-medium text-cyan-400">{uploaded}</p>
          <p className="mt-1 text-xs text-slate-500">Fichier chargé avec succès</p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg font-semibold leading-snug tracking-tight text-white">
            DRAG &amp; DROP
          </p>
          <p className="text-lg font-semibold leading-snug tracking-tight text-white">
            YOUR EXCEL
          </p>
          <p className="text-lg font-semibold leading-snug tracking-tight text-slate-400">
            OR CSV FILE
          </p>
        </div>
      )}

      <p className="text-xs text-slate-600">.xlsx · .xls · .csv</p>
    </div>
  );
}

// ─── AI chat panel ────────────────────────────────────────────────────────────
function AiInsightsPanel() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { id: Date.now(), role: "user", text: trimmed };
    const aiMsg = {
      id: Date.now() + 1,
      role: "ai",
      text: "Analysing your data… I'll provide insights shortly.",
    };
    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="ai-panel flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
      {/* header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-white/90">
          AI Insights
        </h2>
        <div className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
      </div>

      {/* messages */}
      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((msg) =>
          msg.text ? (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              {msg.role === "ai" && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                  <Bot size={13} />
                </div>
              )}
              {msg.role === "user" && (
                <div className="h-7 w-7 shrink-0 rounded-full bg-linear-to-br from-purple-500 to-pink-500" />
              )}
              <div
                className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                  msg.role === "ai"
                    ? "rounded-tl-sm bg-cyan-950/60 text-cyan-50"
                    : "rounded-tr-sm bg-purple-900/50 text-purple-50"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* input */}
      <div className="border-t border-white/10 p-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 focus-within:border-cyan-500/40 transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type message..."
            className="flex-1 bg-transparent text-xs text-white placeholder-slate-500 outline-none"
          />
          <button
            onClick={send}
            type="button" 
            title="Send" 
            className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500 text-white transition hover:bg-cyan-400 active:scale-95"
          >
            <Send size={11} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── main dashboard ───────────────────────────────────────────────────────────
export default function Dashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080f1a] font-sans text-white">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-purple-700/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-blue-600/8 blur-3xl" />
      </div>

      <NavBar />

      <main className="relative z-10 grid h-[calc(100vh-56px)] grid-cols-[1fr_1.05fr_1fr] gap-4 p-5">
        {/* ── left: charts ── */}
        <div className="flex flex-col gap-4">
          <LineChartCard />
          <BarChartCard />
        </div>

        {/* ── center: upload ── */}
        <UploadZone />

        {/* ── right: AI chat ── */}
        <AiInsightsPanel />
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }

        .chart-card,
        .upload-zone,
        .ai-panel {
          box-shadow: 0 0 0 1px rgba(255,255,255,0.04) inset,
                      0 8px 32px rgba(0,0,0,0.35);
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
      `}</style>
    </div>
  );
}