"use client";
import { useState } from "react";
import { User, Car, Home, Wind, Battery, Bell, Volume2, RefreshCw, Shield, ChevronRight, LogOut, Smartphone } from "lucide-react";

type ToggleItem = {
  key: string;
  label: string;
  desc: string;
  val: boolean;
  color: string;
};

export default function SettingsTab() {
  const [automations, setAutomations] = useState<Record<string, boolean>>({
    v2gNight: true,
    floodAuto: true,
    solarPriority: true,
    droneNotif: true,
    quietDrone: false,
  });

  const [lifecycle, setLifecycle] = useState<Record<string, boolean>>({
    autoSecondLife: true,
    recycleReminder: true,
  });

  const [healthAlert, setHealthAlert] = useState(75);

  const toggle = (group: "automations" | "lifecycle", key: string) => {
    if (group === "automations") {
      setAutomations((prev) => ({ ...prev, [key]: !prev[key] }));
    } else {
      setLifecycle((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const automationItems: ToggleItem[] = [
    { key: "v2gNight", label: "Auto V2G at night", desc: "Sell surplus to HiveGrid 22:00–06:00", val: automations.v2gNight, color: "bg-green-500" },
    { key: "floodAuto", label: "Flood auto-mode", desc: "Switch to island mode when flood detected", val: automations.floodAuto, color: "bg-orange-500" },
    { key: "solarPriority", label: "Solar priority routing", desc: "Prefer solar over grid for all loads", val: automations.solarPriority, color: "bg-yellow-500" },
    { key: "droneNotif", label: "SkyDeliver 2-min alert", desc: "Notify 2 minutes before drone arrives", val: automations.droneNotif, color: "bg-cyan-500" },
    { key: "quietDrone", label: "Quiet mode (drone)", desc: "Reduce drone noise — longer delivery time", val: automations.quietDrone, color: "bg-indigo-500" },
  ];

  const lifecycleItems: ToggleItem[] = [
    { key: "autoSecondLife", label: "Auto 2nd-life enrollment", desc: "BYD auto-collects battery when due", val: lifecycle.autoSecondLife, color: "bg-green-500" },
    { key: "recycleReminder", label: "Recycling reminder", desc: "Notify when battery ready for Rayong", val: lifecycle.recycleReminder, color: "bg-blue-500" },
  ];

  return (
    <div className="pb-6 space-y-4">
      {/* Header */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold text-white">Settings</h2>
        <p className="text-xs text-gray-400">Smart automation & account preferences</p>
      </div>

      {/* Profile Card */}
      <div className="mx-4 glass rounded-2xl p-4" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(16,185,129,0.08) 100%)" }}>
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black" style={{ background: "linear-gradient(135deg, #4ade80, #22d3ee)" }}>
            N
          </div>
          <div className="flex-1">
            <p className="text-base font-bold text-white">Nattapong K.</p>
            <p className="text-xs text-gray-400">nattapong@byd-eco.th</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(74,222,128,0.2)", color: "#4ade80" }}>
                EcoLoop Complete
              </span>
              <span className="text-xs text-gray-500">· Founding member</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10">
          <div className="glass rounded-xl p-2 flex flex-col items-center gap-1">
            <Car className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-gray-400">BYD Seal</span>
          </div>
          <div className="glass rounded-xl p-2 flex flex-col items-center gap-1">
            <Home className="w-4 h-4 text-green-400" />
            <span className="text-xs text-gray-400">EcoHome</span>
          </div>
          <div className="glass rounded-xl p-2 flex flex-col items-center gap-1">
            <Wind className="w-4 h-4 text-cyan-400" />
            <span className="text-xs text-gray-400">SkyDeliver</span>
          </div>
        </div>
      </div>

      {/* Smart Automation */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Smart Automation</p>
        <div className="glass rounded-2xl p-4 space-y-4">
          {automationItems.map((item) => (
            <div key={item.key} className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="text-xs text-gray-400 truncate">{item.desc}</p>
              </div>
              <button
                onClick={() => toggle("automations", item.key)}
                className={`w-12 h-6 rounded-full relative transition-colors duration-200 flex-shrink-0 ${item.val ? item.color : "bg-gray-700"}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-200 ${item.val ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lifecycle & Recycling */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Lifecycle & Recycling</p>
        <div className="glass rounded-2xl p-4 space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <p className="text-sm font-medium text-white">Battery Health Alert</p>
              <span className="text-sm font-bold text-yellow-400">{healthAlert}%</span>
            </div>
            <input
              type="range"
              min={50} max={90} step={5}
              value={healthAlert}
              onChange={(e) => setHealthAlert(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-0.5">Alert when battery health drops below this level</p>
          </div>

          {lifecycleItems.map((item) => (
            <div key={item.key} className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
              <button
                onClick={() => toggle("lifecycle", item.key)}
                className={`w-12 h-6 rounded-full relative transition-colors duration-200 flex-shrink-0 ${item.val ? item.color : "bg-gray-700"}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-200 ${item.val ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Account */}
      <div className="mx-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Account</p>
        <div className="glass rounded-2xl overflow-hidden">
          {[
            { icon: <User className="w-4 h-4 text-gray-400" />, label: "Edit Profile", sub: "Name, email, phone" },
            { icon: <Bell className="w-4 h-4 text-gray-400" />, label: "Notifications", sub: "Push, SMS, email preferences" },
            { icon: <Shield className="w-4 h-4 text-gray-400" />, label: "Privacy & Security", sub: "2FA, data sharing" },
            { icon: <Smartphone className="w-4 h-4 text-gray-400" />, label: "Linked Devices", sub: "BYD Seal · EcoHome Hub · Drone prefs" },
            { icon: <RefreshCw className="w-4 h-4 text-gray-400" />, label: "App version", sub: "BYD EcoLoop v2.4.1 (latest)" },
          ].map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-3 p-4 hover:bg-white/5 transition-colors border-b border-gray-800 last:border-0"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="text-xs text-gray-400">{item.sub}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          ))}
        </div>
      </div>

      {/* Sign out */}
      <div className="mx-4">
        <button className="w-full glass rounded-2xl p-4 flex items-center justify-center gap-2 text-red-400 hover:bg-red-500/10 transition-colors">
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
