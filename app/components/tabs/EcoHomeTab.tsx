"use client";
import { useState } from "react";
import { Home, Zap, Battery, Sun, TrendingUp, DollarSign, Shield, Users, AlertTriangle, Clock, CheckCircle, Wrench } from "lucide-react";

const neighbors = [
  { name: "K. Somchai", dist: "0.3 km", kw: 2.1, connected: true },
  { name: "K. Nong", dist: "0.5 km", kw: 1.4, connected: true },
  { name: "K. Ploy", dist: "0.8 km", kw: 0.9, connected: true },
  { name: "K. Arm", dist: "1.1 km", kw: 1.7, connected: true },
  { name: "K. Mint", dist: "1.4 km", kw: 0.6, connected: false },
];

const blackoutHistory = [
  { date: "14 Mar 2026", duration: "3h 42m", survived: true },
  { date: "12 Jan 2026", duration: "1h 15m", survived: true },
  { date: "2 Nov 2025", duration: "5h 08m", survived: true },
];

export default function EcoHomeTab() {
  const [islandMode, setIslandMode] = useState(false);
  const [reservePct, setReservePct] = useState(30);

  const energySources = [
    { label: "Solar", pct: 45, kw: 2.7, color: "#fbbf24" },
    { label: "V2G Car", pct: 20, kw: 1.2, color: "#60a5fa" },
    { label: "Home Battery", pct: 28, kw: 1.68, color: "#4ade80" },
    { label: "Grid PLN", pct: 7, kw: 0.42, color: "#a78bfa" },
  ];

  return (
    <div className="pb-6 space-y-4">
      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(74,222,128,0.2)" }}>
            <Home className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">EcoHome</h2>
            <p className="text-xs text-gray-400">Sukhumvit 47 · Unit 12A · HiveGrid member</p>
          </div>
        </div>
      </div>

      {/* Live Energy Flow */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Live Energy Flow</p>
        <div className="glass rounded-2xl p-4" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(59,130,246,0.08) 100%)" }}>
          <div className="space-y-3">
            {energySources.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-24">{s.label}</span>
                <div className="flex-1 bg-gray-800 rounded-full h-3">
                  <div className="h-3 rounded-full energy-bar flex items-center justify-end pr-1.5" style={{ width: `${s.pct}%`, background: s.color + "cc" }}>
                    <span className="text-xs font-bold text-white" style={{ fontSize: "9px" }}>{s.pct}%</span>
                  </div>
                </div>
                <span className="text-xs font-medium w-12 text-right" style={{ color: s.color }}>{s.kw} kW</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="px-4 grid grid-cols-2 gap-3">
        <div className="glass rounded-2xl p-4">
          <Battery className="w-5 h-5 text-green-400 mb-2" />
          <p className="text-2xl font-black text-white">91%</p>
          <p className="text-xs text-gray-400">Home Battery</p>
          <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
            <div className="h-1.5 rounded-full" style={{ width: "91%", background: "#4ade80" }} />
          </div>
        </div>
        <div className="glass rounded-2xl p-4">
          <Sun className="w-5 h-5 text-yellow-400 mb-2" />
          <p className="text-2xl font-black text-yellow-400">2.7 kW</p>
          <p className="text-xs text-gray-400">Solar Generating</p>
          <p className="text-xs text-green-400 mt-1">▲ Peak efficiency</p>
        </div>
        <div className="glass rounded-2xl p-4">
          <TrendingUp className="w-5 h-5 text-blue-400 mb-2" />
          <p className="text-2xl font-black text-blue-400">1.2 kW</p>
          <p className="text-xs text-gray-400">Exporting to HiveGrid</p>
          <p className="text-xs text-cyan-400 mt-1">Live export active</p>
        </div>
        <div className="glass rounded-2xl p-4">
          <DollarSign className="w-5 h-5 text-emerald-400 mb-2" />
          <p className="text-2xl font-black text-emerald-400">฿284</p>
          <p className="text-xs text-gray-400">Credits Today</p>
          <p className="text-xs text-gray-500 mt-1">+฿42 carbon credit</p>
        </div>
      </div>

      {/* HiveGrid Dashboard */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">HiveGrid Network</p>
        <div className="glass rounded-2xl p-4 space-y-4">
          {/* Income breakdown */}
          <div>
            <p className="text-xs text-gray-500 mb-2">Income breakdown today</p>
            {[
              { label: "Solar sold", amt: "฿124", color: "text-yellow-400" },
              { label: "V2G export", amt: "฿68", color: "text-blue-400" },
              { label: "Battery discharge", amt: "฿50", color: "text-green-400" },
              { label: "Carbon credit", amt: "฿42", color: "text-emerald-400" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center py-1.5 border-b border-gray-800 last:border-0">
                <span className="text-sm text-gray-300">{item.label}</span>
                <span className={`text-sm font-bold ${item.color}`}>{item.amt}</span>
              </div>
            ))}
          </div>

          {/* Neighbors map */}
          <div>
            <p className="text-xs text-gray-500 mb-2">Connected neighbors</p>
            <div className="space-y-2">
              {neighbors.map((n) => (
                <div key={n.name} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${n.connected ? "bg-green-400" : "bg-gray-600"}`} />
                  <span className="text-xs text-gray-300 flex-1">{n.name}</span>
                  <span className="text-xs text-gray-500">{n.dist}</span>
                  <span className={`text-xs font-medium ${n.connected ? "text-green-400" : "text-gray-500"}`}>{n.connected ? `${n.kw} kW` : "offline"}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-800 flex justify-between text-xs">
              <span className="text-gray-400">4 homes connected</span>
              <span className="text-green-400 font-medium">6.1 kWh shared today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Battery 2nd Life */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Battery 2nd Life</p>
        <div className="glass rounded-2xl p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Battery className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">BYD LFP 60 kWh · Gen 3</p>
              <p className="text-xs text-gray-400">Previously: SolarSkin EV 2027–2035</p>
            </div>
          </div>
          {[
            { label: "Remaining capacity", val: "84%", color: "text-green-400" },
            { label: "Estimated years left", val: "6–8 years", color: "text-cyan-400" },
            { label: "Next BYD service", val: "Aug 2026", color: "text-yellow-400" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center">
              <span className="text-xs text-gray-400">{item.label}</span>
              <span className={`text-xs font-semibold ${item.color}`}>{item.val}</span>
            </div>
          ))}
          <button className="w-full mt-1 glass rounded-lg py-2 text-xs text-blue-400 flex items-center justify-center gap-2">
            <Wrench className="w-3.5 h-3.5" />
            Schedule BYD Service
          </button>
        </div>
      </div>

      {/* Flood Protection */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Flood Protection</p>
        <div className="glass rounded-2xl p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">Auto Island Mode</p>
              <p className="text-xs text-gray-400">Disconnect from grid during floods</p>
            </div>
            <button
              onClick={() => setIslandMode(!islandMode)}
              className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${islandMode ? "bg-orange-500" : "bg-gray-700"}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-200 ${islandMode ? "translate-x-6" : "translate-x-0.5"}`} />
            </button>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <p className="text-sm font-medium text-white">Emergency Reserve</p>
              <span className="text-sm font-bold text-orange-400">{reservePct}%</span>
            </div>
            <input
              type="range"
              min={10} max={50} step={5}
              value={reservePct}
              onChange={(e) => setReservePct(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-0.5">
              <span>10%</span>
              <span>Minimum reserve for blackout</span>
              <span>50%</span>
            </div>
          </div>

          {/* Blackout history */}
          <div>
            <p className="text-xs text-gray-500 mb-2">Blackout survival history</p>
            {blackoutHistory.map((b, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-800 last:border-0">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-xs text-gray-300">{b.date}</span>
                </div>
                <span className="text-xs text-gray-400">{b.duration}</span>
                <span className="text-xs text-green-400">Survived ✓</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
