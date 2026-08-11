/**
 * FloatingShapes — 半透明浮动几何形状背景装饰
 * 放在 section 内 absolute 定位，增加层次感和科技氛围
 */
export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Hexagon outline — top right */}
      <svg className="float-shape animate-float-slow" style={{ top: '8%', right: '5%', width: '90px', height: '90px' }} viewBox="0 0 100 100" fill="none">
        <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" stroke="#2563EB" strokeWidth="1.5" />
      </svg>

      {/* Triangle — mid left */}
      <svg className="float-shape animate-float-rev" style={{ top: '45%', left: '3%', width: '70px', height: '70px' }} viewBox="0 0 100 100" fill="none">
        <polygon points="50,10 90,85 10,85" stroke="#3B82F6" strokeWidth="1.5" />
      </svg>

      {/* Ring circle — bottom right */}
      <svg className="float-shape animate-float" style={{ bottom: '12%', right: '8%', width: '80px', height: '80px' }} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" stroke="#06B6D4" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="28" stroke="#2563EB" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* Small hexagon — top left */}
      <svg className="float-shape animate-float-rev" style={{ top: '15%', left: '8%', width: '50px', height: '50px' }} viewBox="0 0 100 100" fill="none">
        <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" stroke="#60A5FA" strokeWidth="2" />
      </svg>

      {/* Dotted line decoration */}
      <svg className="float-shape" style={{ top: '30%', right: '12%', width: '120px', height: '2px' }} viewBox="0 0 120 2" fill="none">
        <line x1="0" y1="1" x2="120" y2="1" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 6" />
      </svg>

      {/* Plus/cross — bottom left */}
      <svg className="float-shape animate-float-slow" style={{ bottom: '20%', left: '6%', width: '40px', height: '40px' }} viewBox="0 0 40 40" fill="none">
        <line x1="20" y1="4" x2="20" y2="36" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="4" y1="20" x2="36" y2="20" stroke="#3B82F6" strokeWidth="1.5" />
      </svg>

      {/* Square outline rotated — mid right */}
      <svg className="float-shape animate-float" style={{ top: '60%', right: '4%', width: '55px', height: '55px', transform: 'rotate(45deg)' }} viewBox="0 0 100 100" fill="none">
        <rect x="15" y="15" width="70" height="70" stroke="#06B6D4" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
