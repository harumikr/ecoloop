"use client";
import { useState } from "react";
import { Sun, Zap, Thermometer, MapPin, Navigation, Power, Clock, Leaf, DollarSign, Car, Battery, RefreshCw, ChevronRight } from "lucide-react";

const panelZones = [
  { name: "Roof", pct: 35, kw: 0.84, color: "#fbbf24" },
  { name: "Hood", pct: 28, kw: 0.67, color: "#f97316" },
  { name: "Doors", pct: 21, kw: 0.50, color: "#fb923c" },
  { name: "Trunk", pct: 16, kw: 0.38, color: "#fde68a" },
];

export default function SolarSkinTab() {
  const [v2h, setV2h] = useState(true);
  const [v2g, setV2g] = useState(false);
  const [departureGuard, setDepartureGuard] = useState(true);
  const [acPrecool, setAcPrecool] = useState(false);

  return (
    <div className="pb-6 space-y-4">
      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(96,165,250,0.2)" }}>
            <Car className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">SolarSkin EV</h2>
            <p className="text-xs text-gray-400">BYD Seal · TH-847-KK · Online</p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400">Live</span>
          </div>
        </div>
      </div>

      {/* Big Battery Circle */}
      <div className="mx-4 glass rounded-2xl p-6 text-center" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(16,185,129,0.08) 100%)" }}>
        <div className="relative inline-block mb-4">
          <svg className="w-40 h-40 -rotate-90" viewBox="0 0 140 140">
            <circle cx="70" cy="70" r="58" fill="none" stroke="rgba(75,85,99,0.4)" strokeWidth="10" />
            <circle cx="70" cy="70" r="58" fill="none" stroke="url(#battGrad)" strokeWidth="10"
              strokeDasharray={`${2 * Math.PI * 58 * 0.78} ${2 * Math.PI * 58}`} strokeLinecap="round" />
            <defs>
              <linearGradient id="battGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-white">78%</span>
            <span className="text-xs text-gray-400">Battery</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="glass rounded-xl p-3">
            <Navigation className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-white">312</p>
            <p className="text-xs text-gray-400">km range</p>
          </div>
          <div className="glass rounded-xl p-3">
            <Sun className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-yellow-400">+8.4</p>
            <p className="text-xs text-gray-400">km/hr solar</p>
          </div>
          <div className="glass rounded-xl p-3">
            <Zap className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-green-400">2.4</p>
            <p className="text-xs text-gray-400">kWh today</p>
          </div>
        </div>
      </div>

      {/* Solar Harvesting */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Solar Harvesting</p>
        <div className="glass rounded-2xl p-4 space-y-4">
          {/* Panel Breakdown */}
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Panel Zone Efficiency</span>
              <span className="text-yellow-400">2.39 kW total</span>
            </div>
            {panelZones.map((z) => (
              <div key={z.name} className="flex items-center gap-3 mb-2">
                <span className="text-xs text-gray-400 w-10">{z.name}</span>
                <div className="flex-1 bg-gray-800 rounded-full h-2">
                  <div className="h-2 rounded-full energy-bar" style={{ width: `${z.pct}%`, background: z.color }} />
                </div>
                <span className="text-xs font-medium w-8 text-right" style={{ color: z.color }}>{z.pct}%</span>
                <span className="text-xs text-gray-500 w-14 text-right">{z.kw} kW</span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-800">
            <div className="text-center">
              <DollarSign className="w-4 h-4 text-green-400 mx-auto mb-1" />
              <p className="text-sm font-bold text-green-400">฿92</p>
              <p className="text-xs text-gray-500">saved today</p>
            </div>
            <div className="text-center">
              <Leaf className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <p className="text-sm font-bold text-emerald-400">3.1 kg</p>
              <p className="text-xs text-gray-500">CO₂ avoided</p>
            </div>
            <div className="text-center">
              <Sun className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
              <p className="text-sm font-bold text-yellow-400">34 km</p>
              <p className="text-xs text-gray-500">solar added</p>
            </div>
          </div>
        </div>
      </div>

      {/* V2G / V2H Controls */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">V2G / V2H Controls</p>
        <div className="glass rounded-2xl p-4 space-y-4">
          {[
            { key: "v2h", label: "V2H — Vehicle to Home", desc: "Send energy to home at night", val: v2h, set: setV2h, color: "bg-blue-500" },
            { key: "v2g", label: "V2G — Sell to HiveGrid", desc: "Auto-sell surplus to grid", val: v2g, set: setV2g, color: "bg-green-500" },
            { key: "dep", label: "Departure Guard", desc: "Guarantee 80% by 08:00", val: departureGuard, set: setDepartureGuard, color: "bg-purple-500" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
              <button
                onClick={() => item.set(!item.val)}
                className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${item.val ? item.color : "bg-gray-700"}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-200 ${item.val ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
          ))}

          <div className="pt-2 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Schedule Charging</p>
                <p className="text-xs text-gray-400">Grid charge: 01:00–05:00 (off-peak)</p>
              </div>
              <button className="glass rounded-lg px-3 py-1.5 text-xs text-blue-400">Edit</button>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Features */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Smart Features</p>
        <div className="space-y-2">
          <button className="w-full glass rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-white">Find Nearest BYD Charger</p>
              <p className="text-xs text-gray-400">3 stations within 2 km</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </button>

          <button
            onClick={() => setAcPrecool(!acPrecool)}
            className="w-full glass rounded-xl p-3 flex items-center gap-3"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${acPrecool ? "bg-cyan-500/30" : "bg-gray-700/30"}`}>
              <Thermometer className={`w-4 h-4 ${acPrecool ? "text-cyan-400" : "text-gray-400"}`} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-white">Remote AC Pre-Cool</p>
              <p className="text-xs text-gray-400">{acPrecool ? "Active — cooling to 23°C" : "Start cooling before you arrive"}</p>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full ${acPrecool ? "bg-cyan-500/20 text-cyan-400" : "bg-gray-700 text-gray-400"}`}>
              {acPrecool ? "ON" : "OFF"}
            </span>
          </button>

          <div className="glass rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
              <RefreshCw className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Driving Score</p>
              <p className="text-xs text-gray-400">Eco mode + solar optimization tips</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold gradient-text-green">94 / 100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
