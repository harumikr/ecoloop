"use client";
import { useState } from "react";
import { Home, Car, Wind, Building2, Wallet, Settings, Globe } from "lucide-react";
import HomeTab from "./components/tabs/HomeTab";
import SolarSkinTab from "./components/tabs/SolarSkinTab";
import SkyDeliverTab from "./components/tabs/SkyDeliverTab";
import EcoHomeTab from "./components/tabs/EcoHomeTab";
import EcoWalletTab from "./components/tabs/EcoWalletTab";
import SettingsTab from "./components/tabs/SettingsTab";
import EcoLoopOverviewTab from "./components/tabs/EcoLoopOverviewTab";

const tabs = [
  { key: "overview", label: "Overview", icon: Globe, component: EcoLoopOverviewTab },
  { key: "home", label: "Home", icon: Home, component: HomeTab },
  { key: "solar", label: "SolarSkin", icon: Car, component: SolarSkinTab },
  { key: "sky", label: "SkyDeliver", icon: Wind, component: SkyDeliverTab },
  { key: "ecohome", label: "EcoHome", icon: Building2, component: EcoHomeTab },
  { key: "wallet", label: "Wallet", icon: Wallet, component: EcoWalletTab },
  { key: "settings", label: "Settings", icon: Settings, component: SettingsTab },
];

const tabColors: Record<string, string> = {
  overview: "#4ade80",
  home: "#4ade80",
  solar: "#60a5fa",
  sky: "#22d3ee",
  ecohome: "#4ade80",
  wallet: "#a78bfa",
  settings: "#94a3b8",
};

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const active = tabs.find((t) => t.key === activeTab)!;
  const ActiveComponent = active.component;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0a0f1e" }}>
      {/* Simulated status bar */}
      <div
        className="flex justify-between items-center px-5 py-2 text-xs text-gray-500 flex-shrink-0"
        style={{ background: "rgba(0,0,0,0.3)" }}
      >
        <span>14:34</span>
        <div className="flex items-center gap-1.5">
          <span>▲▲▲▲</span>
          <span>WiFi</span>
          <span>78%</span>
        </div>
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto" style={{ paddingBottom: 80 }}>
        <ActiveComponent />
      </div>

      {/* Tab Bar */}
      <div
        className="tab-bar fixed bottom-0 left-0 right-0 z-50"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="flex overflow-x-auto scrollbar-none" style={{ scrollbarWidth: "none" }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            const color = tabColors[tab.key];
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="flex-shrink-0 flex flex-col items-center py-2 px-2 transition-all duration-200 active:scale-95"
                style={{ minWidth: 56 }}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center mb-0.5 transition-all duration-200 ${isActive ? "scale-110" : "scale-100"}`}
                  style={{ background: isActive ? color + "22" : "transparent" }}
                >
                  <Icon
                    className="w-4 h-4 transition-colors duration-200"
                    style={{ color: isActive ? color : "#6b7280" }}
                  />
                </div>
                <span
                  className="text-[10px] font-medium transition-colors duration-200"
                  style={{ color: isActive ? color : "#6b7280" }}
                >
                  {tab.label}
                </span>
                {isActive && (
                  <div className="w-1 h-1 rounded-full mt-0.5" style={{ background: color }} />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
