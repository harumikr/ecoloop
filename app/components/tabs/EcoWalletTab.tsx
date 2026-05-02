"use client";
import { useState } from "react";
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Gift, Zap, Sun, Home, Users, Calendar, CheckCircle } from "lucide-react";

const monthlyIncome = [
  { label: "HiveGrid export", amt: 3240, color: "#4ade80", icon: "grid" },
  { label: "V2G sales", amt: 1850, color: "#60a5fa", icon: "v2g" },
  { label: "Solar export", amt: 2100, color: "#fbbf24", icon: "solar" },
  { label: "Carbon credit", amt: 890, color: "#34d399", icon: "carbon" },
  { label: "Referral bonus", amt: 500, color: "#a78bfa", icon: "ref" },
];

const totalIncome = monthlyIncome.reduce((a, b) => a + b.amt, 0);
const subscription = 9000;
const netSaving = totalIncome - subscription;

const iconMap: Record<string, React.ReactNode> = {
  grid: <Home className="w-3.5 h-3.5" />,
  v2g: <Zap className="w-3.5 h-3.5" />,
  solar: <Sun className="w-3.5 h-3.5" />,
  carbon: <TrendingUp className="w-3.5 h-3.5" />,
  ref: <Users className="w-3.5 h-3.5" />,
};

export default function EcoWalletTab() {
  const [tab, setTab] = useState<"overview" | "subscription">("overview");

  return (
    <div className="pb-6 space-y-4">
      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(74,222,128,0.2)" }}>
            <DollarSign className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">EcoWallet</h2>
            <p className="text-xs text-gray-400">April 2026 Statement</p>
          </div>
        </div>
      </div>

      {/* Big Balance */}
      <div className="mx-4 rounded-2xl p-6 text-center" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(99,102,241,0.15) 100%)", border: "1px solid rgba(74,222,128,0.2)" }}>
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Available Credits</p>
        <p className="text-5xl font-black gradient-text-green mb-1">฿8,580</p>
        <p className="text-sm text-gray-400">Auto-applied to next subscription</p>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-500">Covers <span className="text-green-400 font-semibold">95.3%</span> of next month's ฿9,000 subscription</p>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="mx-4 flex glass rounded-xl p-1">
        {[
          { key: "overview", label: "Overview" },
          { key: "subscription", label: "Subscription" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key as "overview" | "subscription")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${tab === t.key ? "bg-green-600 text-white" : "text-gray-400"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "overview" ? (
        <>
          {/* Monthly Breakdown */}
          <div className="mx-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">April Income Breakdown</p>
            <div className="glass rounded-2xl p-4 space-y-3">
              {monthlyIncome.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: item.color + "22", color: item.color }}>
                    {iconMap[item.icon]}
                  </div>
                  <span className="flex-1 text-sm text-gray-300">{item.label}</span>
                  <div className="flex-1 max-w-24 bg-gray-800 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full" style={{ width: `${(item.amt / totalIncome) * 100}%`, background: item.color }} />
                  </div>
                  <span className="text-sm font-bold w-20 text-right" style={{ color: item.color }}>+฿{item.amt.toLocaleString()}</span>
                </div>
              ))}
              <div className="pt-3 border-t border-gray-800 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                    Total Income
                  </span>
                  <span className="text-sm font-bold text-green-400">+฿{totalIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300 flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5 text-red-400" />
                    EcoSubscription
                  </span>
                  <span className="text-sm font-bold text-red-400">−฿{subscription.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-700">
                  <span className="text-sm font-semibold text-white">Net Saving</span>
                  <span className="text-sm font-black text-green-400">+฿{netSaving.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* All-time Stats */}
          <div className="mx-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">All-Time Stats</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="glass rounded-2xl p-4">
                <p className="text-xs text-gray-400 mb-1">Total earned</p>
                <p className="text-xl font-black gradient-text-green">฿127,450</p>
                <p className="text-xs text-gray-500 mt-1">since Jan 2024</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-xs text-gray-400 mb-1">Saved vs ICE car</p>
                <p className="text-xl font-black gradient-text-blue">฿89,200</p>
                <p className="text-xs text-gray-500 mt-1">fuel + maintenance</p>
              </div>
              <div className="glass rounded-2xl p-4 col-span-2">
                <p className="text-xs text-gray-400 mb-1">EcoLoop member since</p>
                <p className="text-lg font-bold text-white">15 January 2024</p>
                <p className="text-xs text-green-400 mt-1">2 years 3 months · Founding member</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Subscription Details */}
          <div className="mx-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">EcoLoop Complete</p>
            <div className="glass rounded-2xl p-4 space-y-4" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(16,185,129,0.08) 100%)" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-bold text-white">EcoLoop Complete</p>
                  <p className="text-xs text-gray-400">All 3 products · Unlimited</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black text-white">฿9,000</p>
                  <p className="text-xs text-gray-400">per month</p>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  "SolarSkin EV — full access",
                  "SkyDeliver — unlimited deliveries",
                  "EcoHome — HiveGrid + 2nd life battery",
                  "EcoWallet — automatic credit settlement",
                  "Priority BYD service booking",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-800 space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400">Next payment</span>
                  <span className="text-xs font-medium text-white">1 June 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400">Credits available</span>
                  <span className="text-xs font-bold text-green-400">฿8,580</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400">Remaining to pay</span>
                  <span className="text-xs font-bold text-yellow-400">฿420</span>
                </div>
              </div>

              <button className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, #4ade80, #22d3ee)" }}>
                Apply Credits to Payment
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
