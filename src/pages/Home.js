// import { useState } from "react";
// import axios from "axios";
// import InputBox from "../components/InputBox";
// import ResultCard from "../components/ResultCard";

// function Home() {
//     const [result, setResult] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const handleAnalyze = async ({ problem, car }) => {
//         try {
//             setLoading(true);

//             const res = await axios.post("http://localhost:5001/api/diagnose", {
//                 problem,
//                 car,
//             });

//             setResult(res.data);
//         } catch (err) {
//             console.log(err);
//             alert("Error analyzing problem");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">


//             <h1 className="text-3xl font-bold mb-6">
//                 🚗 AI Car Diagnostic Assistant
//             </h1>


//             <div className="w-full max-w-md">
//                 <InputBox onSubmit={handleAnalyze} />

//                 {loading && <p className="mt-4">Analyzing...</p>}

//                 <ResultCard data={result} />
//             </div>
//             <p className="text-white mb-4">
//                 Diagnose your car issues instantly using AI
//             </p>

//         </div>
//     );
// }

// export default Home;


import { useState } from "react";
import axios from "axios";
import InputBox from "../components/InputBox";
import ResultCard from "../components/ResultCard";
const API_URL = process.env.REACT_APP_API_URL;

const CAR_BRANDS = [
    { name: "Hyundai", logo: "🚗" },
    { name: "Honda", logo: "🏎️" },
    { name: "Toyota", logo: "🚙" },
    { name: "BMW", logo: "🏎️" },
    { name: "Mercedes", logo: "🚘" },
    { name: "Ford", logo: "🚗" },
    { name: "Chevrolet", logo: "🚙" },
    { name: "Audi", logo: "🏎️" },
    { name: "Volkswagen", logo: "🚗" },
    { name: "Nissan", logo: "🚙" },
    { name: "Kia", logo: "🚗" },
    { name: "Mahindra", logo: "🚙" },
    { name: "Tata", logo: "🚗" },
    { name: "Maruti Suzuki", logo: "🚘" },
];

const GearIcon = ({ size = 80, opacity = 0.04, style = {} }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity, ...style }}>
        <path
            d="M43.3 5.6l-3.6 7.5a36.5 36.5 0 0 0-8.1 3.4l-8-2.6-9.3 9.3 2.6 8a36.5 36.5 0 0 0-3.4 8.1l-7.5 3.6v13.2l7.5 3.6a36.5 36.5 0 0 0 3.4 8.1l-2.6 8 9.3 9.3 8-2.6a36.5 36.5 0 0 0 8.1 3.4l3.6 7.5h13.2l3.6-7.5a36.5 36.5 0 0 0 8.1-3.4l8 2.6 9.3-9.3-2.6-8a36.5 36.5 0 0 0 3.4-8.1l7.5-3.6V43.3l-7.5-3.6a36.5 36.5 0 0 0-3.4-8.1l2.6-8-9.3-9.3-8 2.6a36.5 36.5 0 0 0-8.1-3.4l-3.6-7.5H43.3zM50 32a18 18 0 1 1 0 36 18 18 0 0 1 0-36z"
            fill="#e84545"
        />
    </svg>
);

const WrenchIcon = ({ size = 60, opacity = 0.05, style = {} }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity, ...style }}>
        <path
            d="M78.5 10.5a19 19 0 0 0-18.7 23L20.5 72.8a7 7 0 1 0 7 7l39.3-39.3a19 19 0 1 0 11.7-30zM74 24a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"
            fill="#3d9cf5"
        />
    </svg>
);

export default function Home() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async ({ problem, car }) => {
        try {
            setLoading(true);
            setResult(null);
            const res = await axios.post(`${API_URL}/api/diagnose`, { problem, car });

            setResult(res.data);
        } catch (err) {
            console.log(err);
            alert("Error analyzing problem");
        } finally {
            setLoading(false);
        }
    };
    //console.log("API URL:", process.env.REACT_APP_API_URL);
    return (

        <div className="min-h-screen relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
            <style>{`
        @keyframes scanline {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes spin-slow-rev { to { transform: rotate(-360deg); } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes fadein { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadein-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadein-x { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes shimmer-bar { 0% { transform: translateX(-150%); } 100% { transform: translateX(350%); } }
        .brand-chip { transition: border-color 0.2s, transform 0.2s; }
        .brand-chip:hover { border-color: var(--accent-red) !important; transform: scale(1.06) translateY(-2px); }
        .tool-chip { transition: border-color 0.2s, transform 0.2s; }
        .tool-chip:hover { border-color: var(--accent-red) !important; transform: translateY(-4px) scale(1.08); }
      `}</style>

            {/* Background decorations */}
            <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
                <GearIcon size={320} opacity={0.03} style={{ position: "absolute", top: -60, right: -60 }} />
                <GearIcon size={200} opacity={0.025} style={{ position: "absolute", bottom: 100, left: -40 }} />
                <WrenchIcon size={180} opacity={0.04} style={{ position: "absolute", top: "40%", right: 20 }} />
                <GearIcon size={120} opacity={0.02} style={{ position: "absolute", bottom: 20, right: "30%" }} />
                <WrenchIcon size={100} opacity={0.03} style={{ position: "absolute", top: 80, left: "20%" }} />
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(232,69,69,0.5), transparent)",
                    animation: "scanline 4s ease-in-out infinite",
                }} />
            </div>

            <div className="relative z-10 flex flex-col items-center px-4 py-8" style={{ minHeight: "100vh" }}>

                {/* Header */}
                <div className="w-full max-w-2xl mb-8" style={{ animation: "fadein 0.7s ease-out both" }}>
                    <div style={{
                        height: "3px",
                        background: "linear-gradient(90deg, transparent, var(--accent-red), var(--accent-orange), var(--accent-red), transparent)",
                        marginBottom: "24px", borderRadius: "2px",
                    }} />

                    <div className="flex items-center gap-4 mb-2">
                        <span style={{ fontSize: "2.5rem", display: "inline-block", animation: "spin-slow 20s linear infinite" }}>⚙️</span>
                        <div>
                            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(1.4rem, 5vw, 2.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", lineHeight: 1 }}>
                                MECHANIC<span style={{ color: "var(--accent-red)" }}>.AI</span>
                            </div>
                            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.2em", marginTop: "4px" }}>
                                AUTOMOTIVE DIAGNOSTIC SYSTEM v2.4
                            </div>
                        </div>
                        <span style={{ fontSize: "2rem", marginLeft: "auto", display: "inline-block", animation: "spin-slow-rev 15s linear infinite" }}>🔧</span>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-red)", boxShadow: "0 0 8px var(--accent-red)", animation: "blink 1.5s ease-in-out infinite" }} />
                        <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.15em" }}>
                            SYSTEM ONLINE — AI ENGINE READY
                        </span>
                    </div>

                    <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "1rem", fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, letterSpacing: "0.04em" }}>
                        Diagnose your vehicle issues instantly with AI-powered analysis
                    </p>
                </div>

                {/* Car brand strip */}
                <div className="w-full max-w-2xl mb-6 overflow-x-auto" style={{ paddingBottom: "4px", animation: "fadein-x 0.6s ease-out 0.25s both" }}>
                    <div className="flex gap-2" style={{ minWidth: "max-content" }}>
                        {CAR_BRANDS.map((brand) => (
                            <div
                                key={brand.name}
                                className="brand-chip"
                                style={{
                                    padding: "5px 12px", borderRadius: "4px",
                                    border: "1px solid var(--border-subtle)",
                                    background: "var(--bg-card)",
                                    fontSize: "0.78rem", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
                                    color: "var(--text-secondary)", letterSpacing: "0.06em",
                                    cursor: "default", whiteSpace: "nowrap",
                                    display: "flex", alignItems: "center", gap: "5px",
                                }}
                            >
                                <span style={{ fontSize: "0.9rem" }}>{brand.logo}</span>
                                {brand.name.toUpperCase()}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools icon row */}
                <div className="w-full max-w-2xl flex gap-4 mb-6" style={{ animation: "fadein 0.6s ease-out 0.4s both" }}>
                    {[
                        { icon: "🔧", label: "WRENCH" },
                        { icon: "🔩", label: "BOLT" },
                        { icon: "⛽", label: "FUEL" },
                        { icon: "🛞", label: "TIRE" },
                        { icon: "🔋", label: "BATTERY" },
                        { icon: "🛠️", label: "TOOLS" },
                        { icon: "💨", label: "EXHAUST" },
                        { icon: "🌡️", label: "TEMP" },
                    ].map((tool) => (
                        <div
                            key={tool.label}
                            className="tool-chip"
                            style={{
                                flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
                                gap: "4px", padding: "10px 4px", borderRadius: "6px",
                                border: "1px solid var(--border-subtle)", background: "var(--bg-card)", cursor: "default",
                            }}
                        >
                            <span style={{ fontSize: "1.3rem" }}>{tool.icon}</span>
                            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.55rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                                {tool.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Main input card */}
                <div className="w-full max-w-2xl" style={{ animation: "fadein-up 0.6s ease-out 0.2s both" }}>
                    <InputBox onSubmit={handleAnalyze} />
                </div>

                {/* Loading state */}
                {loading && (
                    <div className="mt-6 w-full max-w-2xl" style={{
                        padding: "20px", border: "1px solid var(--border-subtle)",
                        borderRadius: "10px", background: "var(--bg-card)",
                        display: "flex", alignItems: "center", gap: "16px",
                        animation: "fadein 0.3s ease-out both",
                    }}>
                        <span style={{ fontSize: "2rem", display: "inline-block", animation: "spin-slow 1s linear infinite" }}>⚙️</span>
                        <div>
                            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "0.9rem", color: "var(--accent-red)", letterSpacing: "0.1em" }}>
                                SCANNING VEHICLE SYSTEMS...
                            </div>
                            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "4px" }}>
                                AI engine analyzing fault codes and symptoms
                            </div>
                        </div>
                        <div style={{ flex: 1, height: "4px", background: "var(--border-subtle)", borderRadius: "2px", overflow: "hidden" }}>
                            <div style={{
                                height: "100%", width: "50%",
                                background: "linear-gradient(90deg, transparent, var(--accent-red), transparent)",
                                borderRadius: "2px",
                                animation: "shimmer-bar 1.2s ease-in-out infinite",
                            }} />
                        </div>
                    </div>
                )}

                {/* Result */}
                <div className="w-full max-w-2xl">
                    <ResultCard data={result} />
                </div>

                {/* Footer */}
                <div className="mt-10 text-center" style={{
                    fontFamily: "'Share Tech Mono', monospace", fontSize: "0.65rem",
                    color: "var(--text-muted)", letterSpacing: "0.15em",
                    animation: "fadein 0.6s ease-out 0.8s both",
                }}>
                    ⚡ MECHANIC.AI — POWERED BY ARTIFICIAL INTELLIGENCE ⚡
                </div>
            </div>
        </div>
    );
}