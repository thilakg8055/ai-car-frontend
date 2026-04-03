// function ResultCard({ data }) {
//     if (!data) return null;

//     return (
//         <div className="p-4 mt-4 bg-gray-100 rounded-xl shadow">

//             <h3 className="text-lg font-bold mb-2">🔍 Possible Causes</h3>
//             <p>{data.causes}</p>

//             <h3 className="text-lg font-bold mt-3">💰 Estimated Cost</h3>
//             <p>{data.cost}</p>

//             <h3 className="text-lg font-bold mt-3">⚠️ Severity</h3>
//             <p>{data.severity}</p>

//             <h3 className="text-lg font-bold mt-3">✅ Suggested Action</h3>
//             <p>{data.action}</p>

//         </div>
//     );
// }

// export default ResultCard;




function ResultCard({ data }) {
    if (!data) return null;

    const severityColor = (s = '') => {
        const low = s.toLowerCase();
        if (low.includes('high') || low.includes('critical') || low.includes('severe')) return { color: '#ff2200', glow: 'rgba(255,34,0,0.3)', bg: 'rgba(255,34,0,0.08)' };
        if (low.includes('medium') || low.includes('moderate')) return { color: '#ff8c00', glow: 'rgba(255,140,0,0.3)', bg: 'rgba(255,140,0,0.08)' };
        return { color: '#00cc66', glow: 'rgba(0,204,102,0.3)', bg: 'rgba(0,204,102,0.08)' };
    };

    const sev = severityColor(data.severity);

    return (
        <div style={{
            marginTop: '16px',
            position: 'relative',
            animation: 'slideUp 0.4s ease-out',
        }}>
            {/* DIAGNOSTIC REPORT header bar */}
            <div style={{
                background: 'linear-gradient(90deg, #ff4500, #cc3300)',
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '4px 4px 0 0',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '16px' }}>🔧</span>
                    <span style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '3px',
                        color: '#fff',
                    }}>DIAGNOSTIC REPORT</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: '#00ff88',
                        boxShadow: '0 0 8px #00ff88',
                        animation: 'blink 2s infinite',
                    }} />
                    <span style={{
                        fontFamily: "'Share Tech Mono', monospace",
                        fontSize: '9px',
                        color: 'rgba(255,255,255,0.8)',
                        letterSpacing: '1px',
                    }}>SCAN COMPLETE</span>
                </div>
            </div>

            {/* Main card body */}
            <div style={{
                background: 'linear-gradient(145deg, #1a1d23, #14161a)',
                border: '1px solid rgba(255,69,0,0.15)',
                borderTop: 'none',
                borderRadius: '0 0 4px 4px',
                overflow: 'hidden',
            }}>
                {/* Severity banner */}
                <div style={{
                    background: sev.bg,
                    borderLeft: `4px solid ${sev.color}`,
                    padding: '14px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}>
                    <AlertIcon color={sev.color} />
                    <div>
                        <div style={{
                            fontFamily: "'Share Tech Mono', monospace",
                            fontSize: '10px',
                            color: sev.color,
                            letterSpacing: '2px',
                            marginBottom: '2px',
                        }}>SEVERITY LEVEL</div>
                        <div style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontWeight: '700',
                            fontSize: '16px',
                            color: sev.color,
                            textShadow: `0 0 15px ${sev.glow}`,
                        }}>{data.severity}</div>
                    </div>
                </div>

                <div style={{ padding: '20px' }}>
                    {/* Grid layout for cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '12px',
                    }}>
                        {/* Possible Causes */}
                        <DiagCard
                            icon={<CauseIcon />}
                            label="POSSIBLE CAUSES"
                            content={data.causes}
                            accentColor="#ff4500"
                        />

                        {/* Estimated Cost */}
                        <DiagCard
                            icon={<CostIcon />}
                            label="ESTIMATED COST"
                            content={data.cost}
                            accentColor="#00aaff"
                        />

                        {/* Suggested Action */}
                        <DiagCard
                            icon={<ActionIcon />}
                            label="SUGGESTED ACTION"
                            content={data.action}
                            accentColor="#00cc66"
                        />
                    </div>

                    {/* Footer scan line */}
                    <div style={{
                        marginTop: '16px',
                        paddingTop: '12px',
                        borderTop: '1px solid rgba(255,255,255,0.04)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <span style={{
                            fontFamily: "'Share Tech Mono', monospace",
                            fontSize: '9px',
                            color: '#333a45',
                            letterSpacing: '1px',
                        }}>AI DIAGNOSTIC ENGINE v2.4.1</span>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            {[...Array(5)].map((_, i) => (
                                <div key={i} style={{
                                    width: '16px',
                                    height: '3px',
                                    background: i < 4 ? '#ff4500' : '#222',
                                    borderRadius: '2px',
                                    opacity: i < 4 ? (1 - i * 0.15) : 1,
                                }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
        </div>
    );
}

function DiagCard({ icon, label, content, accentColor }) {
    return (
        <div style={{
            background: '#0d0f12',
            border: `1px solid rgba(255,255,255,0.06)`,
            borderRadius: '3px',
            padding: '14px 16px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Left accent bar */}
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '3px',
                background: accentColor,
                opacity: 0.8,
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{ color: accentColor }}>{icon}</div>
                <span style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: '10px',
                    color: accentColor,
                    letterSpacing: '2px',
                    opacity: 0.9,
                }}>{label}</span>
            </div>
            <p style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: '15px',
                fontWeight: '500',
                color: '#c8cdd8',
                lineHeight: '1.6',
                margin: 0,
            }}>{content}</p>
        </div>
    );
}

function AlertIcon({ color }) {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="9" x2="12" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="17" x2="12.01" y2="17" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function CauseIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function CostIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function ActionIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <polyline points="9 11 12 14 22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default ResultCard;