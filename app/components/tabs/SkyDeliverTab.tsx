"use client";
import { useState } from "react";
import { Package, Clock, MapPin, ShoppingBag, History, AlertTriangle, Wifi, Navigation, Wind, CheckCircle } from "lucide-react";

// 4x5 locker grid — 20 lockers
const lockers = [
  { id: 1, status: "available" },
  { id: 2, status: "empty" },
  { id: 3, status: "available" },
  { id: 4, status: "empty" },
  { id: 5, status: "empty" },
  { id: 6, status: "available" },
  { id: 7, status: "mine" }, // user's locker
  { id: 8, status: "empty" },
  { id: 9, status: "available" },
  { id: 10, status: "empty" },
  { id: 11, status: "empty" },
  { id: 12, status: "empty" },
  { id: 13, status: "available" },
  { id: 14, status: "empty" },
  { id: 15, status: "available" },
  { id: 16, status: "empty" },
  { id: 17, status: "available" },
  { id: 18, status: "empty" },
  { id: 19, status: "empty" },
  { id: 20, status: "empty" },
];

const history = [
  { date: "2 May", time: "12:48", locker: 12, item: "UNIQLO Order #UQ-4821", note: "" },
  { date: "30 Apr", time: "16:22", locker: 7, item: "Lazada Flash Sale #LA-9043", note: "" },
  { date: "28 Apr", time: "09:15", locker: 3, item: "Shopee Electronics #SP-2211", note: "Rerouted via aerial — flood day" },
  { date: "25 Apr", time: "14:03", locker: 19, item: "Grab Express #GX-0184", note: "" },
];

export default function SkyDeliverTab() {
  const [selectedLocker, setSelectedLocker] = useState<number | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const floodMode = false; // toggle to true to show flood banner

  const handleLockerTap = (locker: typeof lockers[0]) => {
    if (locker.status === "mine") {
      setSelectedLocker(locker.id);
    }
  };

  return (
    <div className="pb-6 space-y-4">
      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(34,211,238,0.2)" }}>
            <Wind className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">SkyDeliver</h2>
            <p className="text-xs text-gray-400">SkyHub Sukhumvit 21 · Drone SKY-047</p>
          </div>
        </div>
      </div>

      {/* Flood Banner */}
      {floodMode && (
        <div className="mx-4 rounded-xl p-3 flex items-center gap-3" style={{ background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.4)" }}>
          <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
          <div>
            <p className="text-sm font-bold text-yellow-300">Ground blocked — SkyDeliver still operating</p>
            <p className="text-xs text-yellow-500">Aerial routes active. All deliveries via drone only.</p>
          </div>
        </div>
      )}

      {/* Live Tracking Map */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Live Tracking</p>
        <div className="glass rounded-2xl overflow-hidden" style={{ height: 200 }}>
          {/* Map Placeholder */}
          <div className="relative w-full h-full" style={{ background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)" }}>
            {/* Grid lines */}
            {[0,1,2,3].map(i => (
              <div key={i} className="absolute w-full border-t border-white/5" style={{ top: `${i * 25}%` }} />
            ))}
            {[0,1,2,3].map(i => (
              <div key={i} className="absolute h-full border-l border-white/5" style={{ left: `${i * 25}%` }} />
            ))}
            {/* Streets */}
            <div className="absolute h-px bg-gray-600/40" style={{ top: "40%", left: 0, right: 0 }} />
            <div className="absolute h-px bg-gray-600/40" style={{ top: "65%", left: 0, right: 0 }} />
            <div className="absolute w-px bg-gray-600/40" style={{ left: "35%", top: 0, bottom: 0 }} />
            <div className="absolute w-px bg-gray-600/40" style={{ left: "70%", top: 0, bottom: 0 }} />
            {/* Origin hub */}
            <div className="absolute flex flex-col items-center" style={{ left: "15%", top: "25%" }}>
              <div className="w-4 h-4 rounded-full bg-blue-500 pulse-glow" />
              <span className="text-xs text-blue-300 mt-1 whitespace-nowrap">SkyHub</span>
            </div>
            {/* Drone (animated) */}
            <div className="absolute drone-move" style={{ left: "45%", top: "35%" }}>
              <div className="flex flex-col items-center">
                <div className="text-2xl">🚁</div>
                <span className="text-xs text-cyan-300">SKY-047</span>
              </div>
            </div>
            {/* Destination */}
            <div className="absolute flex flex-col items-center" style={{ right: "12%", bottom: "20%" }}>
              <MapPin className="w-5 h-5 text-green-400" />
              <span className="text-xs text-green-300 mt-0.5">You</span>
            </div>
            {/* Route line (dashed) */}
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
              <line x1="22%" y1="32%" x2="78%" y2="72%" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" strokeDasharray="6,4" />
            </svg>
            {/* ETA overlay */}
            <div className="absolute bottom-3 left-3 glass rounded-lg px-3 py-1.5">
              <p className="text-xs text-gray-400">ETA</p>
              <p className="text-base font-bold text-cyan-400">18 min</p>
            </div>
            <div className="absolute bottom-3 right-3 glass rounded-lg px-3 py-1.5 text-right">
              <p className="text-xs text-gray-400">Altitude</p>
              <p className="text-sm font-bold text-white">120 m</p>
            </div>
          </div>
        </div>
      </div>

      {/* 20-Locker Visual */}
      <div className="mx-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Locker Grid — Hub Sukhumvit 21</p>
          <div className="flex gap-2 text-xs">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-green-400/60 inline-block" />in use</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-gray-600/60 inline-block" />empty</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-teal-400/60 inline-block" />yours</span>
          </div>
        </div>
        <div className="glass rounded-2xl p-4">
          <div className="grid grid-cols-5 gap-2">
            {lockers.map((locker) => (
              <button
                key={locker.id}
                onClick={() => handleLockerTap(locker)}
                className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-bold transition-transform active:scale-95
                  ${locker.status === "available" ? "locker-available text-green-400" : ""}
                  ${locker.status === "empty" ? "locker-empty text-gray-500" : ""}
                  ${locker.status === "mine" ? "locker-mine text-teal-300" : ""}
                `}
              >
                <span className="text-base">{locker.status === "mine" ? "📦" : locker.status === "available" ? "" : ""}</span>
                <span>{locker.id}</span>
              </button>
            ))}
          </div>
          {/* Locker detail modal */}
          {selectedLocker !== null && (
            <div className="mt-4 p-4 rounded-xl" style={{ background: "rgba(45,212,191,0.1)", border: "1px solid rgba(45,212,191,0.3)" }}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-bold text-teal-300">Locker #{selectedLocker} — Your Package</p>
                  <p className="text-xs text-gray-400">Drone arriving in 18 min</p>
                </div>
                <Wifi className="w-5 h-5 text-teal-400" />
              </div>
              <button
                onClick={() => { setUnlocked(!unlocked); }}
                className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${unlocked ? "bg-green-600 text-white" : "bg-teal-500 text-white"}`}
              >
                {unlocked ? "✓ Unlocked via NFC" : "Unlock via NFC"}
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">Tap when drone lands to open locker</p>
            </div>
          )}
        </div>
      </div>

      {/* Order Shortcuts */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Order with SkyDeliver</p>
        <div className="grid grid-cols-2 gap-3">
          <button className="glass rounded-xl p-4 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #ff6900, #ff9a00)" }}>
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Lazada</span>
            <span className="text-xs text-gray-400">SkyDeliver pre-selected</span>
          </button>
          <button className="glass rounded-xl p-4 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #ee4d2d, #ff7337)" }}>
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Shopee</span>
            <span className="text-xs text-gray-400">SkyDeliver pre-selected</span>
          </button>
        </div>
        <div className="glass rounded-xl p-3 mt-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-white">Delivery pricing</p>
            <p className="text-xs text-gray-400">Weight-based, same-day aerial</p>
          </div>
          <p className="text-base font-bold text-cyan-400">฿18–35</p>
        </div>
      </div>

      {/* Delivery History */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Delivery History</p>
        <div className="glass rounded-2xl p-3 space-y-3">
          {history.map((h, i) => (
            <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-800 last:border-0 last:pb-0">
              <div className="w-8 h-8 rounded-lg glass flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{h.item}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-gray-400">{h.date} · {h.time}</span>
                  <span className="text-xs text-teal-400">Locker #{h.locker}</span>
                </div>
                {h.note && (
                  <p className="text-xs text-yellow-400 mt-1 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    {h.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
