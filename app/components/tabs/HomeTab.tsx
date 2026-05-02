"use client";
import { Sun, Zap, Leaf, CloudSun, Flame, Car, Package, Home, ChevronRight, Activity, TrendingUp, Wind } from "lucide-react";

const activities = [
  { time: "14:32", icon: "solar", product: "SolarSkin EV", msg: "Solar harvesting +2.4 kWh — Roof panel peak efficiency", color: "text-yellow-400" },
  { time: "14:18", icon: "drone", product: "SkyDeliver", msg: "Drone SKY-047 dispatched from SkyHub Sukhumvit", color: "text-cyan-400" },
  { time: "13:55", icon: "home", product: "EcoHome", msg: "V2G export started — selling 1.2 kW to HiveGrid", color: "text-green-400" },
  { time: "13:40", icon: "car", product: "SolarSkin EV", msg: "Departure guard set — 80% target by 08:00 tomorrow", color: "text-blue-400" },
  { time: "13:12", icon: "home", product: "EcoHome", msg: "Home battery reached 95% — solar overflow to grid", color: "text-green-400" },
  { time: "12:48", icon: "drone", product: "SkyDeliver", msg: "Package #TH-2847 delivered to Locker 12 — unlocked", color: "text-cyan-400" },
  { time: "12:30", icon: "solar", product: "SolarSkin EV", msg: "CO₂ avoided today: 3.1 kg equivalent", color: "text-yellow-400" },
  { time: "11:55", icon: "home", product: "EcoHome", msg: "Carbon credit earned: ฿42 — recorded on BYD ledger", color: "text-green-400" },
];

const iconMap: Record<string, React.ReactNode> = {
  solar: <Sun className="w-4 h-4 text-yellow-400" />,
  drone: <Wind className="w-4 h-4 text-cyan-400" />,
  home: <Home className="w-4 h-4 text-green-400" />,
  car: <Car className="w-4 h-4 text-blue-400" />,
};

export default function HomeTab() {
  return (
    <div className="pb-6 space-y-4">
      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-xs text-gray-400">Friday, 2 May 2026</p>
            <h1 className="text-xl font-bold text-white">Good afternoon, <span className="gradient-text-green">Nattapong</span></h1>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-yellow-300 text-sm">
              <CloudSun className="w-4 h-4" />
              <span>32°C Bangkok</span>
            </div>
            <div className="flex items-center gap-1 text-orange-400 text-xs justify-end mt-0.5">
              <Flame className="w-3 h-3" />
              <span>12-day sunny streak</span>
            </div>
          </div>
        </div>
      </div>

      {/* EcoScore Summary Card */}
      <div className="mx-4 rounded-2xl p-4 glass" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(59,130,246,0.15) 100%)" }}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Daily EcoScore</p>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-black gradient-text-green">87</span>
              <span className="text-gray-400 text-sm mb-1">/100</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="glass rounded-xl px-3 py-2 text-center">
              <p className="text-xs text-gray-400">Solar km</p>
              <p className="text-lg font-bold text-yellow-400">+34 km</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2.5 mb-3">
          <div className="h-2.5 rounded-full energy-bar" style={{ width: "87%", background: "linear-gradient(90deg, #4ade80, #22d3ee)" }} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="glass rounded-lg p-2 text-center">
            <p className="text-xs text-gray-400">Credits earned</p>
            <p className="text-sm font-bold text-green-400">฿284</p>
          </div>
          <div className="glass rounded-lg p-2 text-center">
            <p className="text-xs text-gray-400">CO₂ avoided</p>
            <p className="text-sm font-bold text-cyan-400">4.2 kg</p>
          </div>
          <div className="glass rounded-lg p-2 text-center">
            <p className="text-xs text-gray-400">kWh generated</p>
            <p className="text-sm font-bold text-yellow-400">12.6</p>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="px-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Your Ecosystem</p>
        <div className="space-y-3">
          {/* SolarSkin EV */}
          <div className="glass rounded-2xl p-4" style={{ borderLeft: "3px solid #60a5fa" }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(96,165,250,0.2)" }}>
                  <Car className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">SolarSkin EV</p>
                  <p className="text-xs text-gray-400">BYD Seal — TH-847-KK</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Battery</span>
                  <span className="text-blue-400 font-medium">78%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full" style={{ width: "78%", background: "linear-gradient(90deg, #3b82f6, #60a5fa)" }} />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-yellow-400 font-medium">☀ +2.4 kWh</p>
                <p className="text-xs text-gray-400">today</p>
              </div>
            </div>
          </div>

          {/* SkyDeliver */}
          <div className="glass rounded-2xl p-4" style={{ borderLeft: "3px solid #22d3ee" }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(34,211,238,0.2)" }}>
                  <Wind className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">SkyDeliver</p>
                  <p className="text-xs text-gray-400">SkyHub Sukhumvit 21</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Incoming package</p>
                <p className="text-sm font-bold text-cyan-400">ETA 18 min</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Locker</p>
                <p className="text-sm font-bold text-white">#7 (yours)</p>
              </div>
              <div className="glass rounded-lg px-2 py-1">
                <p className="text-xs text-cyan-300">Drone SKY-047</p>
              </div>
            </div>
          </div>

          {/* EcoHome */}
          <div className="glass rounded-2xl p-4" style={{ borderLeft: "3px solid #4ade80" }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(74,222,128,0.2)" }}>
                  <Home className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">EcoHome</p>
                  <p className="text-xs text-gray-400">Sukhumvit 47 — Unit 12A</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Home battery</span>
                  <span className="text-green-400 font-medium">91%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full" style={{ width: "91%", background: "linear-gradient(90deg, #4ade80, #22d3ee)" }} />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-green-400 font-medium">V2G Active</p>
                <p className="text-xs text-gray-400">–1.2 kW</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Live Activity</p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400">real-time</span>
          </div>
        </div>
        <div className="glass rounded-2xl p-3 space-y-3">
          {activities.map((a, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex flex-col items-center gap-1">
                <div className="w-7 h-7 rounded-lg glass flex items-center justify-center flex-shrink-0">
                  {iconMap[a.icon]}
                </div>
                {i < activities.length - 1 && <div className="w-px h-4 bg-gray-700" />}
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`text-xs font-medium ${a.color}`}>{a.product}</span>
                  <span className="text-xs text-gray-600">{a.time}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{a.msg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
