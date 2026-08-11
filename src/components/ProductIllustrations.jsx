/**
 * ProductIllustrations — 四大业务线的抽象 SVG 插画
 * 每个插画用对应业务线的配色，纯 SVG 内嵌
 */

export function AIIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {/* Background rounded rect */}
      <rect x="20" y="20" width="360" height="260" rx="16" fill="url(#aiGrad)" stroke="#BFDBFE" strokeWidth="1" opacity="0.6" />

      {/* Neural network nodes */}
      {/* Layer 1 */}
      <circle cx="80" cy="90" r="12" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
      <circle cx="80" cy="150" r="12" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
      <circle cx="80" cy="210" r="12" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />

      {/* Layer 2 */}
      <circle cx="180" cy="70" r="12" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="180" cy="130" r="12" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="180" cy="190" r="12" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="180" cy="250" r="12" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5" />

      {/* Layer 3 */}
      <circle cx="280" cy="100" r="12" fill="#93C5FD" stroke="#06B6D4" strokeWidth="1.5" />
      <circle cx="280" cy="180" r="12" fill="#93C5FD" stroke="#06B6D4" strokeWidth="1.5" />

      {/* Output */}
      <circle cx="340" cy="140" r="16" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" className="node-pulse" />

      {/* Connections */}
      <g opacity="0.3">
        <line x1="92" y1="90" x2="168" y2="70" stroke="#2563EB" strokeWidth="1" />
        <line x1="92" y1="90" x2="168" y2="130" stroke="#2563EB" strokeWidth="1" />
        <line x1="92" y1="150" x2="168" y2="130" stroke="#2563EB" strokeWidth="1" />
        <line x1="92" y1="150" x2="168" y2="190" stroke="#2563EB" strokeWidth="1" />
        <line x1="92" y1="210" x2="168" y2="190" stroke="#2563EB" strokeWidth="1" />
        <line x1="92" y1="210" x2="168" y2="250" stroke="#2563EB" strokeWidth="1" />
        <line x1="192" y1="70" x2="268" y2="100" stroke="#3B82F6" strokeWidth="1" />
        <line x1="192" y1="130" x2="268" y2="100" stroke="#3B82F6" strokeWidth="1" />
        <line x1="192" y1="130" x2="268" y2="180" stroke="#3B82F6" strokeWidth="1" />
        <line x1="192" y1="190" x2="268" y2="180" stroke="#3B82F6" strokeWidth="1" />
        <line x1="192" y1="250" x2="268" y2="180" stroke="#3B82F6" strokeWidth="1" />
        <line x1="292" y1="100" x2="324" y2="140" stroke="#06B6D4" strokeWidth="1.5" className="dash-anim" />
        <line x1="292" y1="180" x2="324" y2="140" stroke="#06B6D4" strokeWidth="1.5" className="dash-anim" />
      </g>

      {/* Animated particles */}
      <circle r="2.5" fill="#06B6D4" opacity="0.8">
        <animateMotion dur="2s" repeatCount="indefinite" path="M 92,150 L 168,130" />
      </circle>
      <circle r="2.5" fill="#3B82F6" opacity="0.8">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 192,130 L 268,100" />
      </circle>

      {/* Labels */}
      <text x="80" y="280" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">Input</text>
      <text x="180" y="280" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">Hidden</text>
      <text x="280" y="280" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">Process</text>
      <text x="340" y="280" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">Output</text>
    </svg>
  )
}

export function XRIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="xrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0891B2" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect x="20" y="20" width="360" height="260" rx="16" fill="url(#xrGrad)" stroke="#A5F3FC" strokeWidth="1" opacity="0.6" />

      {/* VR Headset shape */}
      <rect x="110" y="100" width="180" height="90" rx="20" fill="#CFFAFE" stroke="#06B6D4" strokeWidth="2" />
      <rect x="125" y="115" width="60" height="55" rx="8" fill="#06B6D4" fillOpacity="0.15" stroke="#0891B2" strokeWidth="1.5" />
      <rect x="215" y="115" width="60" height="55" rx="8" fill="#06B6D4" fillOpacity="0.15" stroke="#0891B2" strokeWidth="1.5" />

      {/* Headset strap */}
      <path d="M 110,120 Q 80,140 90,180" stroke="#06B6D4" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M 290,120 Q 320,140 310,180" stroke="#06B6D4" strokeWidth="2" fill="none" opacity="0.4" />

      {/* Screen content — 3D cubes inside lenses */}
      <g transform="translate(155, 142) scale(0.4)">
        <polygon points="0,0 25,-15 50,0 50,30 25,45 0,30" fill="#06B6D4" fillOpacity="0.3" stroke="#0891B2" strokeWidth="1" />
        <line x1="25" y1="-15" x2="25" y2="15" stroke="#0891B2" strokeWidth="0.5" opacity="0.5" />
      </g>
      <g transform="translate(245, 142) scale(0.4)">
        <polygon points="0,0 25,-15 50,0 50,30 25,45 0,30" fill="#06B6D4" fillOpacity="0.3" stroke="#0891B2" strokeWidth="1" />
        <line x1="25" y1="-15" x2="25" y2="15" stroke="#0891B2" strokeWidth="0.5" opacity="0.5" />
      </g>

      {/* Floating 3D objects around headset */}
      {/* Cube — top left */}
      <g transform="translate(60, 60) scale(0.5)" className="animate-float">
        <polygon points="0,0 30,-18 60,0 60,36 30,54 0,36" fill="#06B6D4" fillOpacity="0.1" stroke="#06B6D4" strokeWidth="1.5" />
        <line x1="30" y1="-18" x2="30" y2="18" stroke="#06B6D4" strokeWidth="0.8" opacity="0.4" />
        <line x1="0" y1="0" x2="30" y2="18" stroke="#06B6D4" strokeWidth="0.8" opacity="0.4" />
        <line x1="60" y1="0" x2="30" y2="18" stroke="#06B6D4" strokeWidth="0.8" opacity="0.4" />
      </g>

      {/* Sphere — top right */}
      <g className="animate-float-rev">
        <circle cx="340" cy="70" r="18" fill="none" stroke="#0891B2" strokeWidth="1.5" opacity="0.4" />
        <ellipse cx="340" cy="70" rx="18" ry="8" fill="none" stroke="#0891B2" strokeWidth="1" opacity="0.3" />
        <ellipse cx="340" cy="70" rx="8" ry="18" fill="none" stroke="#0891B2" strokeWidth="1" opacity="0.3" />
      </g>

      {/* Connection lines — virtual to real */}
      <line x1="90" y1="78" x2="120" y2="110" stroke="#06B6D4" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" className="dash-anim" />
      <line x1="322" y1="88" x2="280" y2="110" stroke="#06B6D4" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" className="dash-anim" />

      {/* Data stream below */}
      <g opacity="0.3">
        <rect x="60" y="230" width="280" height="2" rx="1" fill="#06B6D4" />
        <rect x="80" y="240" width="200" height="1.5" rx="0.75" fill="#06B6D4" opacity="0.5" />
        <rect x="100" y="248" width="150" height="1" rx="0.5" fill="#06B6D4" opacity="0.3" />
      </g>

      {/* Particle flowing along bottom */}
      <circle r="3" fill="#06B6D4" opacity="0.7">
        <animateMotion dur="3s" repeatCount="indefinite" path="M 60,231 L 340,231" />
      </circle>
    </svg>
  )
}

export function DroneIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="droneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect x="20" y="20" width="360" height="260" rx="16" fill="url(#droneGrad)" stroke="#DDD6FE" strokeWidth="1" opacity="0.6" />

      {/* Wind tunnel — concentric circles representing airflow */}
      <circle cx="200" cy="150" r="100" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.1" />
      <circle cx="200" cy="150" r="75" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.15" />
      <circle cx="200" cy="150" r="50" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.2" />
      <circle cx="200" cy="150" r="25" fill="#8B5CF6" fillOpacity="0.05" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.3" />

      {/* Drone body — simplified top-down view */}
      <g transform="translate(200, 150)">
        {/* Center body */}
        <rect x="-12" y="-12" width="24" height="24" rx="4" fill="#A78BFA" fillOpacity="0.3" stroke="#8B5CF6" strokeWidth="1.5" />

        {/* Arms */}
        <line x1="-12" y1="-12" x2="-40" y2="-40" stroke="#8B5CF6" strokeWidth="2" />
        <line x1="12" y1="-12" x2="40" y2="-40" stroke="#8B5CF6" strokeWidth="2" />
        <line x1="-12" y1="12" x2="-40" y2="40" stroke="#8B5CF6" strokeWidth="2" />
        <line x1="12" y1="12" x2="40" y2="40" stroke="#8B5CF6" strokeWidth="2" />

        {/* Rotors */}
        <circle cx="-40" cy="-40" r="14" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.5" className="animate-spin-slow" />
        <circle cx="40" cy="-40" r="14" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.5" className="animate-spin-rev" />
        <circle cx="-40" cy="40" r="14" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.5" className="animate-spin-rev" />
        <circle cx="40" cy="40" r="14" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.5" className="animate-spin-slow" />

        {/* Rotor blades */}
        <line x1="-54" y1="-40" x2="-26" y2="-40" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
        <line x1="26" y1="-40" x2="54" y2="-40" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
      </g>

      {/* Wind flow lines — left to right */}
      <g opacity="0.25">
        <path d="M 40,100 Q 120,100 200,150" stroke="#8B5CF6" strokeWidth="1" fill="none" strokeDasharray="4 6" className="dash-anim" />
        <path d="M 40,150 Q 120,150 200,150" stroke="#8B5CF6" strokeWidth="1.5" fill="none" strokeDasharray="4 6" className="dash-anim" />
        <path d="M 40,200 Q 120,200 200,150" stroke="#8B5CF6" strokeWidth="1" fill="none" strokeDasharray="4 6" className="dash-anim" />
      </g>

      {/* Exit flow — right side */}
      <g opacity="0.2">
        <path d="M 200,150 Q 280,150 360,120" stroke="#A78BFA" strokeWidth="1" fill="none" strokeDasharray="3 5" className="dash-anim" />
        <path d="M 200,150 Q 280,150 360,150" stroke="#A78BFA" strokeWidth="1" fill="none" strokeDasharray="3 5" className="dash-anim" />
        <path d="M 200,150 Q 280,150 360,180" stroke="#A78BFA" strokeWidth="1" fill="none" strokeDasharray="3 5" className="dash-anim" />
      </g>

      {/* Data points — measurement markers */}
      <circle cx="100" cy="80" r="3" fill="#8B5CF6" opacity="0.5" className="node-pulse" />
      <circle cx="320" cy="100" r="3" fill="#8B5CF6" opacity="0.5" className="node-pulse" style={{ animationDelay: '0.5s' }} />
      <circle cx="300" cy="240" r="3" fill="#8B5CF6" opacity="0.5" className="node-pulse" style={{ animationDelay: '1s' }} />
      <circle cx="80" cy="220" r="3" fill="#8B5CF6" opacity="0.5" className="node-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Grid — ground reference */}
      <g opacity="0.08">
        <line x1="20" y1="260" x2="380" y2="260" stroke="#8B5CF6" strokeWidth="1" />
        <line x1="50" y1="270" x2="350" y2="270" stroke="#8B5CF6" strokeWidth="1" />
      </g>

      {/* "Coming Soon" indicator */}
      <rect x="160" y="265" width="80" height="16" rx="8" fill="#8B5CF6" fillOpacity="0.1" stroke="#A78BFA" strokeWidth="1" opacity="0.5" />
      <text x="200" y="276" textAnchor="middle" fill="#8B5CF6" fontSize="8" fontWeight="600" fontFamily="monospace" opacity="0.6">SIMULATION</text>
    </svg>
  )
}

export function TrafficIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="trafficGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect x="20" y="20" width="360" height="260" rx="16" fill="url(#trafficGrad)" stroke="#FDE68A" strokeWidth="1" opacity="0.6" />

      {/* City grid — road network */}
      <g opacity="0.15">
        <line x1="60" y1="60" x2="340" y2="60" stroke="#475569" strokeWidth="2" />
        <line x1="60" y1="120" x2="340" y2="120" stroke="#475569" strokeWidth="2" />
        <line x1="60" y1="180" x2="340" y2="180" stroke="#475569" strokeWidth="2" />
        <line x1="60" y1="240" x2="340" y2="240" stroke="#475569" strokeWidth="2" />
        <line x1="80" y1="40" x2="80" y2="260" stroke="#475569" strokeWidth="2" />
        <line x1="160" y1="40" x2="160" y2="260" stroke="#475569" strokeWidth="2" />
        <line x1="240" y1="40" x2="240" y2="260" stroke="#475569" strokeWidth="2" />
        <line x1="320" y1="40" x2="320" y2="260" stroke="#475569" strokeWidth="2" />
      </g>

      {/* Intersection nodes — graph network */}
      <g>
        <circle cx="80" cy="60" r="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" className="node-pulse" />
        <circle cx="160" cy="60" r="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="240" cy="60" r="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '0.6s' }} />
        <circle cx="320" cy="60" r="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '0.9s' }} />

        <circle cx="80" cy="120" r="6" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '0.2s' }} />
        <circle cx="160" cy="120" r="8" fill="#2563EB" fillOpacity="0.2" stroke="#2563EB" strokeWidth="2" className="node-pulse" />
        <circle cx="240" cy="120" r="6" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="320" cy="120" r="6" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '0.8s' }} />

        <circle cx="80" cy="180" r="6" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '0.4s' }} />
        <circle cx="160" cy="180" r="6" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '0.7s' }} />
        <circle cx="240" cy="180" r="8" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="2" className="node-pulse" />
        <circle cx="320" cy="180" r="6" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '1s' }} />

        <circle cx="80" cy="240" r="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '0.6s' }} />
        <circle cx="160" cy="240" r="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '0.9s' }} />
        <circle cx="240" cy="240" r="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '1.2s' }} />
        <circle cx="320" cy="240" r="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '1.5s' }} />
      </g>

      {/* Bidirectional flow — BiGCN representation */}
      <g opacity="0.5">
        <line x1="160" y1="120" x2="240" y2="180" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 4" className="dash-anim" />
        <line x1="240" y1="180" x2="160" y2="120" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" className="dash-anim" style={{ animationDelay: '1.5s' }} />
      </g>

      {/* Traffic flow particles */}
      <circle r="3" fill="#2563EB" opacity="0.8">
        <animateMotion dur="2s" repeatCount="indefinite" path="M 80,60 L 320,60" />
      </circle>
      <circle r="3" fill="#F59E0B" opacity="0.8">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 320,240 L 80,240" />
      </circle>
      <circle r="2.5" fill="#06B6D4" opacity="0.7">
        <animateMotion dur="3s" repeatCount="indefinite" path="M 80,60 L 80,240" />
      </circle>
      <circle r="2.5" fill="#3B82F6" opacity="0.7">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M 320,60 L 320,240" />
      </circle>

      {/* Labels */}
      <text x="200" y="285" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="monospace" opacity="0.5">SPATIAL-TEMPORAL GRAPH NETWORK</text>
    </svg>
  )
}

export function ProductIllustration({ type }) {
  switch (type) {
    case 'ai':     return <AIIllustration />
    case 'xr':     return <XRIllustration />
    case 'drone':  return <DroneIllustration />
    case 'traffic': return <TrafficIllustration />
    default: return null
  }
}
