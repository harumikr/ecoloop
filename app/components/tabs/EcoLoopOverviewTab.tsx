"use client";
import { useState } from "react";
import {
  Sun, Wind, Home, Zap, Leaf, DollarSign, Car, Battery,
  Package, Shield, Users, ArrowRight, ArrowDown, Check,
  Wifi, Globe, RefreshCw, CloudSun, TrendingUp
} from "lucide-react";

const products = [
  {
    key: "solar",
    name: "SolarSkin EV",
    tagline: "EV yang menghasilkan energi sendiri",
    color: "#60a5fa",
    colorBg: "rgba(96,165,250,0.12)",
    icon: Car,
    accentClass: "gradient-text-blue",
    features: [
      { icon: Sun, label: "Solar Harvesting", desc: "Panel surya di atap, kap, pintu & bagasi — hingga 2.39 kW" },
      { icon: Zap, label: "V2H — Vehicle to Home", desc: "Kirim energi dari baterai EV ke rumah saat malam hari" },
      { icon: TrendingUp, label: "V2G — Jual ke HiveGrid", desc: "Auto-jual surplus energi ke jaringan tetangga" },
      { icon: Shield, label: "Departure Guard", desc: "Garansi baterai 80% sebelum jam keberangkatan" },
      { icon: RefreshCw, label: "Eco Driving Score", desc: "Skor & tips mengemudi hemat energi real-time" },
      { icon: CloudSun, label: "Remote AC Pre-Cool", desc: "Dinginkan kabin sebelum kamu tiba" },
    ],
    stats: [
      { val: "+34 km", label: "solar/hari" },
      { val: "฿92", label: "hemat/hari" },
      { val: "3.1 kg", label: "CO₂ dicegah" },
    ],
  },
  {
    key: "sky",
    name: "SkyDeliver",
    tagline: "Pengiriman via drone, bebas macet & banjir",
    color: "#22d3ee",
    colorBg: "rgba(34,211,238,0.12)",
    icon: Wind,
    accentClass: "gradient-text-green",
    features: [
      { icon: Wind, label: "Drone Delivery", desc: "Drone otonom dari SkyHub langsung ke locker kamu" },
      { icon: Package, label: "SkyHub Locker Grid", desc: "20 locker per hub — buka via NFC/smartphone" },
      { icon: Wifi, label: "Live Tracking", desc: "Pantau posisi drone secara real-time di peta" },
      { icon: Shield, label: "Flood Resilient", desc: "Tetap beroperasi saat jalan banjir & macet" },
      { icon: Globe, label: "Integrasi Platform", desc: "Lazada, Shopee, Grab Express — SkyDeliver otomatis dipilih" },
      { icon: DollarSign, label: "Harga Terjangkau", desc: "฿18–35 per pengiriman, same-day aerial" },
    ],
    stats: [
      { val: "18 min", label: "ETA rata-rata" },
      { val: "฿18–35", label: "per kiriman" },
      { val: "20", label: "locker/hub" },
    ],
  },
  {
    key: "home",
    name: "EcoHome",
    tagline: "Rumah pintar yang menghasilkan & berbagi energi",
    color: "#4ade80",
    colorBg: "rgba(74,222,128,0.12)",
    icon: Home,
    accentClass: "gradient-text-green",
    features: [
      { icon: Sun, label: "Solar Rooftop", desc: "Panel surya rumah menghasilkan hingga 2.7 kW terus-menerus" },
      { icon: Battery, label: "Home Battery (2nd Life)", desc: "Baterai LFP bekas EV — reuse kapasitas 84%, hemat lingkungan" },
      { icon: Users, label: "HiveGrid Network", desc: "Jual-beli energi peer-to-peer dengan tetangga terdekat" },
      { icon: Zap, label: "V2G Export", desc: "Ekspor energi otomatis ke grid saat surplus" },
      { icon: Shield, label: "Auto Island Mode", desc: "Disconnect dari PLN otomatis saat banjir/blackout" },
      { icon: DollarSign, label: "Carbon Credit", desc: "Dapatkan kredit karbon ฿42/hari dari BYD ledger" },
    ],
    stats: [
      { val: "฿284", label: "kredit/hari" },
      { val: "6.1 kWh", label: "dibagikan/hari" },
      { val: "3×", label: "blackout survived" },
    ],
  },
];

const flowNodes = [
  { id: "solar", label: "SolarSkin EV", color: "#60a5fa", icon: "🚗" },
  { id: "home", label: "EcoHome", color: "#4ade80", icon: "🏠" },
  { id: "hive", label: "HiveGrid", color: "#fbbf24", icon: "⚡" },
  { id: "wallet", label: "EcoWallet", color: "#a78bfa", icon: "💳" },
  { id: "sky", label: "SkyDeliver", color: "#22d3ee", icon: "🚁" },
];

const walletItems = [
  { icon: Home, label: "HiveGrid export", amt: "฿3,240/bln", color: "#4ade80" },
  { icon: Zap, label: "V2G sales", amt: "฿1,850/bln", color: "#60a5fa" },
  { icon: Sun, label: "Solar export", amt: "฿2,100/bln", color: "#fbbf24" },
  { icon: Leaf, label: "Carbon credit", amt: "฿890/bln", color: "#34d399" },
  { icon: Users, label: "Referral bonus", amt: "฿500/bln", color: "#a78bfa" },
];

const tiers = [
  {
    name: "SolarSkin Only",
    price: "฿3,500",
    color: "#60a5fa",
    items: ["SolarSkin EV — full access", "EcoWallet dasar"],
  },
  {
    name: "SkyDeliver Add-on",
    price: "฿5,000",
    color: "#22d3ee",
    items: ["SolarSkin EV", "SkyDeliver unlimited", "EcoWallet"],
  },
  {
    name: "EcoLoop Complete",
    price: "฿9,000",
    color: "#4ade80",
    highlight: true,
    items: [
      "SolarSkin EV — full access",
      "SkyDeliver — unlimited deliveries",
      "EcoHome — HiveGrid + 2nd life battery",
      "EcoWallet — auto credit settlement",
      "Priority BYD service booking",
    ],
  },
];

export default function EcoLoopOverviewTab() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  return (
    <div className="pb-6 space-y-6">
      {/* ── HERO ─────────────────────────────────────── */}
      <div
        className="px-4 pt-6 pb-4"
        style={{ background: "linear-gradient(180deg, rgba(74,222,128,0.08) 0%, transparent 100%)" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl"
            style={{ background: "linear-gradient(135deg, #4ade80, #22d3ee)" }}
          >
            ♻
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest">BYD</p>
            <h1 className="text-2xl font-black text-white leading-none">EcoLoop</h1>
          </div>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          Ekosistem hidup hijau terintegrasi — EV solar, pengiriman drone, rumah pintar & dompet energi dalam satu platform.
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { val: "฿127K+", label: "Kredit earned", color: "#4ade80" },
            { val: "4.2 kg", label: "CO₂/hari dicegah", color: "#22d3ee" },
            { val: "87", label: "EcoScore harian", color: "#fbbf24" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-xl p-3 text-center">
              <p className="text-lg font-black" style={{ color: s.color }}>{s.val}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ECOSYSTEM DIAGRAM ────────────────────────── */}
      <div className="px-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Bagaimana Ekosistem Bekerja</p>
        <div
          className="glass rounded-2xl p-5"
          style={{ background: "linear-gradient(135deg, rgba(10,15,30,0.8) 0%, rgba(16,24,40,0.8) 100%)" }}
        >
          {/* Central node */}
          <div className="flex flex-col items-center mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-2 pulse-glow"
              style={{ background: "linear-gradient(135deg, rgba(74,222,128,0.3), rgba(34,211,238,0.3))", border: "2px solid rgba(74,222,128,0.5)" }}
            >
              ♻
            </div>
            <p className="text-sm font-bold gradient-text-green">EcoLoop Hub</p>
            <p className="text-xs text-gray-500">Platform & HiveGrid</p>
          </div>

          {/* 4-way connection grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { emoji: "🚗", name: "SolarSkin EV", sub: "Solar harvest + V2G", color: "#60a5fa", flow: "⚡ Kirim energi" },
              { emoji: "🚁", name: "SkyDeliver", sub: "Drone via SkyHub", color: "#22d3ee", flow: "📦 Terima kiriman" },
              { emoji: "🏠", name: "EcoHome", sub: "Baterai + HiveGrid", color: "#4ade80", flow: "☀ Jual solar" },
              { emoji: "💳", name: "EcoWallet", sub: "Kredit otomatis", color: "#a78bfa", flow: "฿ Kredit & bayar" },
            ].map((n) => (
              <div
                key={n.name}
                className="glass rounded-xl p-3 flex flex-col items-center text-center gap-1.5"
                style={{ borderColor: n.color + "40", borderWidth: 1 }}
              >
                <span className="text-xl">{n.emoji}</span>
                <p className="text-xs font-semibold text-white">{n.name}</p>
                <p className="text-xs text-gray-500">{n.sub}</p>
                <div
                  className="rounded-full px-2 py-0.5 text-xs font-medium mt-1"
                  style={{ background: n.color + "20", color: n.color }}
                >
                  {n.flow}
                </div>
              </div>
            ))}
          </div>

          {/* Flow arrows description */}
          <div className="mt-4 pt-3 border-t border-gray-800 space-y-2">
            {[
              { from: "EV + EcoHome", arrow: "→", to: "HiveGrid", desc: "Jual energi surplus ke tetangga", color: "#fbbf24" },
              { from: "HiveGrid", arrow: "→", to: "EcoWallet", desc: "Otomatis jadi kredit ฿", color: "#a78bfa" },
              { from: "EcoWallet", arrow: "→", to: "Subscription", desc: "Kredit menutup biaya bulanan", color: "#4ade80" },
              { from: "SkyDeliver", arrow: "→", to: "SkyHub Locker", desc: "Drone antar ke locker terdekat", color: "#22d3ee" },
            ].map((f) => (
              <div key={f.desc} className="flex items-center gap-2 text-xs">
                <span className="text-gray-400 font-medium w-20 text-right">{f.from}</span>
                <span style={{ color: f.color }} className="font-bold">{f.arrow}</span>
                <span className="text-white font-medium w-20">{f.to}</span>
                <span className="text-gray-500 flex-1">{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CIRCULAR ECONOMY ─────────────────────────── */}
      <div className="px-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Siklus Ekonomi Hijau</p>
        <div className="glass rounded-2xl p-4">
          <div className="flex items-stretch gap-0">
            {[
              { emoji: "☀", label: "Hasilkan Energi", sub: "Solar EV & rumah", color: "#fbbf24" },
              { emoji: "⚡", label: "Jual ke Grid", sub: "HiveGrid peer-to-peer", color: "#4ade80" },
              { emoji: "💳", label: "Kredit EcoWallet", sub: "฿8,580/bulan", color: "#a78bfa" },
              { emoji: "🔄", label: "Bayar Langganan", sub: "Hampir gratis!", color: "#22d3ee" },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex-1 flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-2"
                  style={{ background: step.color + "25", border: `1px solid ${step.color}50` }}
                >
                  {step.emoji}
                </div>
                <p className="text-xs font-semibold text-white text-center leading-tight">{step.label}</p>
                <p className="text-xs text-gray-500 text-center mt-0.5">{step.sub}</p>
                {i < arr.length - 1 && (
                  <div className="absolute" style={{ display: "none" }} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-1 justify-center">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: ["#fbbf24", "#4ade80", "#a78bfa", "#22d3ee"][i] }}>
                  {i + 1}
                </div>
                {i < 3 && <ArrowRight className="w-3 h-3 text-gray-600" />}
              </div>
            ))}
          </div>
          <div className="mt-3 glass rounded-xl p-3 text-center">
            <p className="text-xs text-gray-400">Pendapatan April 2026</p>
            <p className="text-lg font-black gradient-text-green">+฿8,580</p>
            <p className="text-xs text-gray-500">menutup 95.3% dari ฿9,000 langganan</p>
          </div>
        </div>
      </div>

      {/* ── PRODUCT DEEP DIVES ───────────────────────── */}
      <div className="px-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">3 Produk Utama</p>
        <div className="space-y-4">
          {products.map((p) => {
            const Icon = p.icon;
            const isOpen = activeProduct === p.key;
            return (
              <div
                key={p.key}
                className="glass rounded-2xl overflow-hidden"
                style={{ borderLeft: `3px solid ${p.color}` }}
              >
                {/* Header */}
                <button
                  onClick={() => setActiveProduct(isOpen ? null : p.key)}
                  className="w-full p-4 flex items-center gap-3 text-left"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: p.colorBg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-white">{p.name}</p>
                    <p className="text-xs text-gray-400">{p.tagline}</p>
                  </div>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200"
                    style={{ background: p.color + "20", transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                  >
                    <ArrowRight className="w-3 h-3" style={{ color: p.color }} />
                  </div>
                </button>

                {/* Stats row — always visible */}
                <div className="px-4 pb-3 grid grid-cols-3 gap-2">
                  {p.stats.map((s) => (
                    <div key={s.label} className="glass rounded-lg p-2 text-center">
                      <p className="text-sm font-bold" style={{ color: p.color }}>{s.val}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Expanded features */}
                {isOpen && (
                  <div className="px-4 pb-4 space-y-2 border-t border-gray-800 pt-3">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Fitur Lengkap</p>
                    {p.features.map((f) => {
                      const FIcon = f.icon;
                      return (
                        <div key={f.label} className="flex items-start gap-3 glass rounded-xl p-3">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: p.color + "20" }}
                          >
                            <FIcon className="w-3.5 h-3.5" style={{ color: p.color }} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-white">{f.label}</p>
                            <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{f.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── ECOWALLET BREAKDOWN ──────────────────────── */}
      <div className="px-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">EcoWallet — Sumber Kredit</p>
        <div className="glass rounded-2xl p-4 space-y-3">
          {walletItems.map((w) => {
            const WIcon = w.icon;
            return (
              <div key={w.label} className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: w.color + "20" }}
                >
                  <WIcon className="w-3.5 h-3.5" style={{ color: w.color }} />
                </div>
                <span className="flex-1 text-sm text-gray-300">{w.label}</span>
                <span className="text-sm font-bold" style={{ color: w.color }}>{w.amt}</span>
              </div>
            );
          })}
          <div className="pt-3 border-t border-gray-800 flex justify-between">
            <span className="text-sm font-semibold text-white">Total Pendapatan</span>
            <span className="text-sm font-black gradient-text-green">+฿8,580/bln</span>
          </div>
          <div className="glass rounded-xl p-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">Kredit tersedia</p>
              <p className="text-base font-black gradient-text-green">฿8,580</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600" />
            <div className="text-right">
              <p className="text-xs text-gray-400">Dari total langganan</p>
              <p className="text-base font-black text-white">฿9,000</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600" />
            <div className="text-right">
              <p className="text-xs text-gray-400">Sisa bayar</p>
              <p className="text-base font-black text-yellow-400">฿420</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SUBSCRIPTION TIERS ───────────────────────── */}
      <div className="px-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Paket Langganan</p>
        <div className="space-y-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="glass rounded-2xl p-4"
              style={{
                borderColor: t.color + (t.highlight ? "80" : "30"),
                borderWidth: t.highlight ? 2 : 1,
                background: t.highlight ? `linear-gradient(135deg, ${t.color}10 0%, rgba(34,211,238,0.08) 100%)` : undefined,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  {t.highlight && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: t.color + "25", color: t.color }}
                    >
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-xl font-black text-white">{t.price}</p>
                  <p className="text-xs text-gray-400">/bulan</p>
                </div>
              </div>
              <div className="space-y-1.5">
                {t.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: t.color }} />
                    <span className="text-xs text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── KEY TECH & VALUES ────────────────────────── */}
      <div className="px-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Keunggulan Teknologi</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { emoji: "🔋", title: "Battery 2nd Life", desc: "Baterai EV bekas jadi home battery — 84% kapasitas tersisa", color: "#4ade80" },
            { emoji: "🌐", title: "HiveGrid P2P", desc: "Jual-beli energi antar tetangga tanpa perantara utilitas", color: "#fbbf24" },
            { emoji: "🚁", title: "Flood Resilient", desc: "Drone tetap beroperasi saat jalan banjir & ground blocked", color: "#22d3ee" },
            { emoji: "🛡", title: "Island Mode", desc: "Rumah tetap bertenaga saat PLN padam — auto disconnect grid", color: "#f97316" },
            { emoji: "🌿", title: "Carbon Credits", desc: "Hasilkan kredit karbon dari BYD ledger — ฿42/hari", color: "#34d399" },
            { emoji: "📊", title: "EcoScore", desc: "Skor harian 0–100 gabungkan EV + rumah + gaya hidup hijau", color: "#a78bfa" },
          ].map((k) => (
            <div key={k.title} className="glass rounded-2xl p-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-2"
                style={{ background: k.color + "20" }}
              >
                {k.emoji}
              </div>
              <p className="text-xs font-bold text-white mb-1">{k.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{k.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FOOTER TAGLINE ───────────────────────────── */}
      <div className="mx-4 rounded-2xl p-5 text-center"
        style={{ background: "linear-gradient(135deg, rgba(74,222,128,0.15) 0%, rgba(34,211,238,0.10) 50%, rgba(99,102,241,0.12) 100%)", border: "1px solid rgba(74,222,128,0.2)" }}
      >
        <p className="text-2xl mb-2">♻</p>
        <p className="text-base font-black gradient-text-green mb-1">Drive. Deliver. Live Green.</p>
        <p className="text-xs text-gray-400 leading-relaxed">
          EcoLoop bukan sekadar aplikasi — ini adalah ekosistem hidup berkelanjutan yang menghubungkan energi, mobilitas, dan komunitas dalam satu siklus tertutup.
        </p>
      </div>
    </div>
  );
}
