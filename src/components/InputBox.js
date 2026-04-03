// import { useState } from "react";

// function InputBox({ onSubmit }) {
//     const [problem, setProblem] = useState("");
//     const [car, setCar] = useState("Hyundai");

//     const handleSubmit = () => {
//         if (!problem) return alert("Enter problem");
//         onSubmit({ problem, car });
//     };

//     return (
//         <div className="p-4 bg-white shadow rounded-xl">
//             <textarea
//                 className="w-full p-2 border rounded mb-3"
//                 rows="4"
//                 placeholder="Describe your car issue..."
//                 onChange={(e) => setProblem(e.target.value)}
//             />

//             <select
//                 className="w-full p-2 border rounded mb-3"
//                 onChange={(e) => setCar(e.target.value)}
//             >
//                 <option>Hyundai</option>
//                 <option>Honda</option>
//                 <option>Toyota</option>
//             </select>

//             <button
//                 onClick={handleSubmit}
//                 className="bg-blue-500 text-white px-4 py-2 rounded w-full"
//             >
//                 Analyze Problem
//             </button>
//         </div>
//     );
// }

// export default InputBox;




import { useState } from "react";

const CAR_BRANDS = [
    { value: "Hyundai", icon: "🚗" },
    { value: "Honda", icon: "🚙" },
    { value: "Toyota", icon: "🚕" },
    { value: "Ford", icon: "🛻" },
    { value: "BMW", icon: "🏎️" },
    { value: "Mercedes", icon: "🚘" },
    { value: "Audi", icon: "🚗" },
    { value: "Volkswagen", icon: "🚙" },
    { value: "Chevrolet", icon: "🛻" },
    { value: "Nissan", icon: "🚕" },
    { value: "Kia", icon: "🚗" },
    { value: "Mazda", icon: "🏎️" },
    { value: "Suzuki", icon: "🚙" },
    { value: "Tata", icon: "🚘" },
    { value: "Mahindra", icon: "🛻" },
];

function InputBox({ onSubmit }) {
    const [problem, setProblem] = useState("");
    const [car, setCar] = useState("Hyundai");
    const [focused, setFocused] = useState(false);

    const handleSubmit = () => {
        console.log("SELECTED CAR:", car);
        if (!problem) return alert("Enter problem");
        onSubmit({ problem, car });
    };

    return (
        <div style={{
            background: 'linear-gradient(145deg, #1a1d23, #14161a)',
            border: '1px solid rgba(255,69,0,0.2)',
            borderRadius: '4px',
            padding: '0',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}>
            {/* Top accent bar */}
            <div style={{
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #ff4500, #ff6a00, transparent)',
                width: '100%',
            }} />

            {/* Corner bolts */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(pos => {
                const isTop = pos.includes('top');
                const isLeft = pos.includes('left');
                return (
                    <div key={pos} style={{
                        position: 'absolute',
                        [isTop ? 'top' : 'bottom']: '12px',
                        [isLeft ? 'left' : 'right']: '12px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 35% 35%, #555, #222)',
                        border: '1px solid #333',
                        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)',
                        zIndex: 2,
                    }} />
                );
            })}

            <div style={{ padding: '24px 28px 28px' }}>
                {/* Section header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                }}>
                    <WrenchIcon />
                    <span style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: '11px',
                        letterSpacing: '3px',
                        color: '#ff4500',
                        textTransform: 'uppercase',
                    }}>Diagnostic Input</span>
                    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(255,69,0,0.4), transparent)' }} />
                </div>

                {/* Vehicle selector */}
                <label style={{
                    display: 'block',
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: '11px',
                    color: '#555a65',
                    letterSpacing: '2px',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                }}>SELECT VEHICLE</label>

                <div style={{ position: 'relative', marginBottom: '16px' }}>
                    <CarSelectIcon />
                    <select
                        value={car}
                        onChange={(e) => setCar(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px 16px 12px 44px',
                            background: '#0d0f12',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '3px',
                            color: '#f0f0f0',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: '600',
                            fontSize: '15px',
                            cursor: 'pointer',
                            appearance: 'none',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                        }}
                        onFocus={e => e.target.style.borderColor = 'rgba(255,69,0,0.5)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    >
                        {CAR_BRANDS.map(b => (
                            <option key={b.value} value={b.value} style={{ background: '#0d0f12' }} onClick={() => setCar(b.value)}>

                                {b.icon}  {b.value}

                            </option>
                        ))}
                    </select>
                    {/* Custom dropdown arrow */}
                    <div style={{
                        position: 'absolute',
                        right: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '5px solid transparent',
                        borderRight: '5px solid transparent',
                        borderTop: '6px solid #ff4500',
                        pointerEvents: 'none',
                    }} />
                </div>

                {/* Fault description */}
                <label style={{
                    display: 'block',
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: '11px',
                    color: '#555a65',
                    letterSpacing: '2px',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                }}>FAULT DESCRIPTION</label>

                <div style={{ position: 'relative', marginBottom: '20px' }}>
                    <textarea
                        rows={5}
                        placeholder="e.g. Engine knocking noise on startup, check engine light on, rough idle..."
                        onChange={(e) => setProblem(e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        style={{
                            width: '100%',
                            padding: '14px 16px',
                            background: '#0d0f12',
                            border: `1px solid ${focused ? 'rgba(255,69,0,0.5)' : 'rgba(255,255,255,0.08)'}`,
                            borderRadius: '3px',
                            color: '#f0f0f0',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '15px',
                            fontWeight: '500',
                            lineHeight: '1.6',
                            resize: 'vertical',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                        }}
                    />
                    {/* Live indicator */}
                    <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                    }}>
                        <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: focused ? '#ff4500' : '#333',
                            boxShadow: focused ? '0 0 8px #ff4500' : 'none',
                            transition: 'all 0.3s',
                            animation: focused ? 'pulse 1.5s infinite' : 'none',
                        }} />
                        <span style={{
                            fontFamily: "'Share Tech Mono', monospace",
                            fontSize: '9px',
                            color: focused ? '#ff4500' : '#333',
                            transition: 'color 0.3s',
                        }}>{focused ? 'INPUT ACTIVE' : 'STANDBY'}</span>
                    </div>
                </div>

                {/* Submit button */}
                <button
                    onClick={handleSubmit}
                    style={{
                        width: '100%',
                        padding: '14px',
                        background: 'linear-gradient(135deg, #ff4500, #cc3300)',
                        border: 'none',
                        borderRadius: '3px',
                        color: '#fff',
                        fontFamily: "'Orbitron', sans-serif",
                        fontWeight: '700',
                        fontSize: '13px',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.2s',
                        boxShadow: '0 4px 20px rgba(255,69,0,0.3)',
                    }}
                    onMouseEnter={e => {
                        e.target.style.background = 'linear-gradient(135deg, #ff5500, #e03a00)';
                        e.target.style.boxShadow = '0 4px 30px rgba(255,69,0,0.6)';
                        e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                        e.target.style.background = 'linear-gradient(135deg, #ff4500, #cc3300)';
                        e.target.style.boxShadow = '0 4px 20px rgba(255,69,0,0.3)';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    ⚡ RUN DIAGNOSTIC
                </button>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        select option { background: #0d0f12; color: #f0f0f0; }
      `}</style>
        </div>
    );
}

function WrenchIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function CarSelectIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            <path d="M7 17H5a2 2 0 01-2-2v-3l2-6h14l2 6v3a2 2 0 01-2 2h-2" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="7" cy="17" r="2" stroke="#ff4500" strokeWidth="1.5" />
            <circle cx="17" cy="17" r="2" stroke="#ff4500" strokeWidth="1.5" />
            <path d="M5 9h14" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

export default InputBox;