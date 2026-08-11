/**
 * HeroIllustration — 首屏右侧抽象科技插画
 * 中心六边形 + 轨道节点 + 连接线 + 数据流粒子 + 旋转外环
 * 纯 SVG 内嵌，轻量且支持动画
 */
export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 500 500"
        className="w-full max-w-[500px] h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="strokeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>

          {/* Clip for inner content */}
          <clipPath id="hexClip">
            <polygon points="250,80 390,160 390,340 250,420 110,340 110,160" />
          </clipPath>
        </defs>

        {/* Center glow */}
        <circle cx="250" cy="250" r="200" fill="url(#centerGlow)" />

        {/* Outer rotating ring — dashed */}
        <g style={{ transformOrigin: '250px 250px' }} className="animate-spin-slow">
          <circle cx="250" cy="250" r="220" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 12" opacity="0.25" />
        </g>

        {/* Counter-rotating ring */}
        <g style={{ transformOrigin: '250px 250px' }} className="animate-spin-rev">
          <circle cx="250" cy="250" r="195" stroke="#06B6D4" strokeWidth="1" strokeDasharray="2 8" opacity="0.2" />
        </g>

        {/* Main hexagon — filled with gradient */}
        <polygon
          points="250,80 390,160 390,340 250,420 110,340 110,160"
          fill="url(#hexGrad)"
          stroke="url(#strokeGrad)"
          strokeWidth="2"
        />

        {/* Inner hexagon — smaller */}
        <polygon
          points="250,140 340,190 340,310 250,360 160,310 160,190"
          fill="none"
          stroke="url(#strokeGrad2)"
          strokeWidth="1.5"
          opacity="0.4"
        />

        {/* Innermost hexagon */}
        <polygon
          points="250,190 305,220 305,280 250,310 195,280 195,220"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Connection lines from center to hexagon vertices */}
        <line x1="250" y1="250" x2="250" y2="80"  stroke="#2563EB" strokeWidth="1" opacity="0.15" />
        <line x1="250" y1="250" x2="390" y2="160" stroke="#2563EB" strokeWidth="1" opacity="0.15" />
        <line x1="250" y1="250" x2="390" y2="340" stroke="#2563EB" strokeWidth="1" opacity="0.15" />
        <line x1="250" y1="250" x2="250" y2="420" stroke="#2563EB" strokeWidth="1" opacity="0.15" />
        <line x1="250" y1="250" x2="110" y2="340" stroke="#2563EB" strokeWidth="1" opacity="0.15" />
        <line x1="250" y1="250" x2="110" y2="160" stroke="#2563EB" strokeWidth="1" opacity="0.15" />

        {/* Animated dashed connection lines */}
        <line x1="250" y1="250" x2="250" y2="80"  stroke="#06B6D4" strokeWidth="1.5" className="dash-anim" opacity="0.5" />
        <line x1="250" y1="250" x2="390" y2="340" stroke="#3B82F6" strokeWidth="1.5" className="dash-anim" opacity="0.5" style={{ animationDelay: '1s' }} />
        <line x1="250" y1="250" x2="110" y2="340" stroke="#06B6D4" strokeWidth="1.5" className="dash-anim" opacity="0.5" style={{ animationDelay: '2s' }} />

        {/* Center node — pulsing */}
        <circle cx="250" cy="250" r="8" fill="#2563EB" opacity="0.9" className="node-pulse" />
        <circle cx="250" cy="250" r="16" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.3" />

        {/* Vertex nodes on main hexagon */}
        <circle cx="250" cy="80"  r="5" fill="#2563EB" className="node-pulse" />
        <circle cx="390" cy="160" r="5" fill="#3B82F6" className="node-pulse" style={{ animationDelay: '0.4s' }} />
        <circle cx="390" cy="340" r="5" fill="#06B6D4" className="node-pulse" style={{ animationDelay: '0.8s' }} />
        <circle cx="250" cy="420" r="5" fill="#2563EB" className="node-pulse" style={{ animationDelay: '1.2s' }} />
        <circle cx="110" cy="340" r="5" fill="#3B82F6" className="node-pulse" style={{ animationDelay: '1.6s' }} />
        <circle cx="110" cy="160" r="5" fill="#06B6D4" className="node-pulse" style={{ animationDelay: '2s' }} />

        {/* Outer satellite nodes — floating */}
        <g className="animate-float">
          <circle cx="430" cy="100" r="4" fill="#60A5FA" opacity="0.6" />
          <circle cx="430" cy="100" r="10" fill="none" stroke="#60A5FA" strokeWidth="0.8" opacity="0.2" />
        </g>
        <g className="animate-float-rev">
          <circle cx="70" cy="200" r="4" fill="#06B6D4" opacity="0.6" />
          <circle cx="70" cy="200" r="10" fill="none" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2" />
        </g>
        <g className="animate-float-slow">
          <circle cx="420" cy="400" r="3" fill="#3B82F6" opacity="0.5" />
          <circle cx="420" cy="400" r="8" fill="none" stroke="#3B82F6" strokeWidth="0.8" opacity="0.15" />
        </g>
        <g className="animate-float">
          <circle cx="80" cy="420" r="3" fill="#2563EB" opacity="0.5" />
          <circle cx="80" cy="420" r="8" fill="none" stroke="#2563EB" strokeWidth="0.8" opacity="0.15" />
        </g>

        {/* Small floating hexagons outside */}
        <g className="animate-float-slow" style={{ transformOrigin: '440px 250px' }}>
          <polygon points="440,230 455,240 455,260 440,270 425,260 425,240" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.3" />
        </g>
        <g className="animate-float-rev" style={{ transformOrigin: '60px 300px' }}>
          <polygon points="60,280 75,290 75,310 60,320 45,310 45,290" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.3" />
        </g>

        {/* Data flow particles — small dots traveling along lines */}
        <circle r="2.5" fill="#06B6D4" opacity="0.8">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 250,250 L 250,80" />
        </circle>
        <circle r="2.5" fill="#3B82F6" opacity="0.8">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 250,250 L 390,340" />
        </circle>
        <circle r="2" fill="#2563EB" opacity="0.7">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 250,250 L 110,340" />
        </circle>
        <circle r="2" fill="#60A5FA" opacity="0.7">
          <animateMotion dur="5s" repeatCount="indefinite" path="M 250,250 L 110,160" />
        </circle>

        {/* Center label — subtle */}
        <text x="250" y="255" textAnchor="middle" fill="#2563EB" fontSize="11" fontWeight="700" letterSpacing="2" opacity="0.5" fontFamily="monospace">
          MC
        </text>
      </svg>
    </div>
  )
}
