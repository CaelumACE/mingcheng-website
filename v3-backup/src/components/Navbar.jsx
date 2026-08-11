import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于我们' },
  { path: '/products', label: '产品服务' },
  { path: '/contact', label: '联系我们' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'top-3 mx-4 md:mx-8' : 'top-0 mx-0'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-500 ${
          scrolled
            ? 'glass-nav px-6 py-2.5'
            : 'bg-transparent px-6 py-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo — simple text */}
          <Link to="/" className="flex items-center gap-1 group">
            <span className="text-xl md:text-2xl font-extrabold tracking-wide text-gradient">
              铭澄
            </span>
            <span className="text-lg md:text-xl font-semibold text-ink-secondary tracking-wider">
              互动
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-ink-secondary hover:text-ink hover:bg-slate-100/60'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-500" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-100/60 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span className={`block h-[1.5px] bg-ink rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block h-[1.5px] bg-ink rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[1.5px] bg-ink rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            menuOpen ? 'max-h-64 mt-3' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-ink-secondary hover:text-ink hover:bg-slate-100/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
