import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const businessCards = [
  {
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 36c0-3 4-7 8-7s8 4 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 18h12M28 24h12M28 30h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'AI 数字员工',
    desc: '不是聊天框，而是敢进入业务流程的 AI 执行系统。理解知识、遵循流程、调用系统，安全可控地完成真实工作。',
    to: '/products#ai',
    accent: 'from-blue-500/15 to-blue-400/10',
    iconBg: 'bg-blue-100 text-blue-600',
    border: 'border-slate-200/60 hover:border-blue-300',
    glow: 'hover:shadow-[0_8px_40px_rgba(37,99,235,0.10)]',
  },
  {
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="14" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.6" />
        <path d="M24 6v4M24 38v4M10 20h4M34 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'VR/AR 虚实融合',
    desc: '基于 UE4/Unity 引擎，提供 XR 内容研发与定制化整体解决方案。从数字展厅到工业仿真，全链路覆盖。',
    to: '/products#xr',
    accent: 'from-cyan-500/15 to-teal-400/10',
    iconBg: 'bg-cyan-100 text-cyan-600',
    border: 'border-slate-200/60 hover:border-cyan-300',
    glow: 'hover:shadow-[0_8px_40px_rgba(6,182,212,0.10)]',
  },
  {
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none">
        <path d="M24 8l-4 4h-8c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4h-8l-4-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="26" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="26" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    title: '无人机训练软件',
    desc: '军事风洞跳伞训练仿真平台，高精度物理引擎与沉浸式交互体验。更多内容即将上线。',
    to: '/products#drone',
    accent: 'from-purple-500/15 to-violet-400/10',
    iconBg: 'bg-purple-100 text-purple-600',
    border: 'border-slate-200/60 hover:border-purple-300',
    glow: 'hover:shadow-[0_8px_40px_rgba(139,92,246,0.10)]',
    badge: '即将上线',
  },
  {
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="20" width="40" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12h4v8h-4zM20 8h4v12h-4zM28 4h4v16h-4zM36 12h4v8h-4z" stroke="currentColor" strokeWidth="1.5" />
        <line x1="24" y1="32" x2="24" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="42" r="3" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    title: '智慧交通',
    desc: '自研时空分层预测模型，突破 GCN 瓶颈。动态图结构学习 + BiGCN 出行预测 + T2GAN 态势推演。',
    to: '/products#traffic',
    accent: 'from-amber-500/15 to-orange-400/10',
    iconBg: 'bg-amber-100 text-amber-600',
    border: 'border-slate-200/60 hover:border-amber-300',
    glow: 'hover:shadow-[0_8px_40px_rgba(245,158,11,0.10)]',
  },
]

const stats = [
  { value: '2022', label: '年成立' },
  { value: '4', label: '大业务线' },
  { value: '5+', label: '年技术积累' },
  { value: '100%', label: '自主可控' },
]

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active')
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="overflow-hidden">
      {/* ───── Hero ───── */}
      <section className="bg-hero min-h-screen flex items-center relative overflow-hidden pt-16">
        {/* Glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-orb w-[600px] h-[600px] top-[-15%] right-[-10%] bg-blue-400 animate-orb-1" />
          <div className="glow-orb w-[400px] h-[400px] bottom-[-10%] left-[-5%] bg-sky-300 animate-orb-2" style={{ opacity: 0.20 }} />
          <div className="glow-orb w-[300px] h-[300px] top-[45%] left-[55%] bg-indigo-300 animate-orb-3" style={{ opacity: 0.15 }} />
        </div>

        {/* Hex grid */}
        <div className="absolute inset-0 hex-grid opacity-60" />

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="reveal mb-8">
              <span className="section-tag">
                <svg className="w-3 h-3" viewBox="0 0 12 12"><circle cx="6" cy="6" r="3" fill="currentColor"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" /></circle></svg>
                智能科技 · 虚实融合
              </span>
            </div>

            <h1 className="reveal text-4xl md:text-6xl lg:text-7xl font-extrabold text-ink leading-[1.08] mb-8 text-balance tracking-tight">
              虚实融合
              <br />
              <span className="text-gradient">智创未来</span>
            </h1>

            <p className="reveal text-lg md:text-xl text-ink-secondary max-w-lg mb-12 leading-relaxed">
              AI 与虚实融合整体解决方案提供商。从数字员工到智慧交通，从 VR 仿真到无人机训练，以技术连接虚拟与现实。
            </p>

            <div className="reveal flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary text-base">
                <span className="relative z-10">了解产品</span>
              </Link>
              <Link to="/contact" className="btn-outline text-base">
                联系我们
              </Link>
            </div>
          </div>
        </div>

        <div className="bottom-fade" />
      </section>

      {/* ───── Business Cards ───── */}
      <section className="py-24 md:py-32 bg-section relative">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="section-tag mb-6">核心业务</span>
            <h2 className="section-title mt-6">四大业务线</h2>
            <p className="section-subtitle">全链路智能解决方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {businessCards.map((card, i) => (
              <Link
                key={card.title}
                to={card.to}
                className={`reveal group relative p-8 rounded-2xl bg-white/55 backdrop-blur-sm border transition-all duration-500 hover:-translate-y-1 ${card.border} ${card.glow}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {card.badge && (
                  <span className="absolute top-5 right-5 px-2.5 py-1 bg-brand-100 text-brand-700 text-[11px] font-semibold rounded-full border border-brand-200 uppercase tracking-wider">
                    {card.badge}
                  </span>
                )}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.accent} ${card.iconBg.replace(/text-\S+/, '').replace(/bg-\S+/, '')} flex items-center justify-center mb-5 border border-slate-200/50`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{card.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed">{card.desc}</p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
                  了解更多
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Stats ───── */}
      <section className="py-16 md:py-20 bg-section-alt relative">
        <div className="absolute inset-0 hex-grid opacity-40" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="reveal text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-gradient tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-ink-muted font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-24 md:py-32 bg-section relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400" style={{ opacity: 0.18 }} />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">准备好开启合作了吗？</h2>
          <p className="text-lg text-ink-secondary mb-10 leading-relaxed">
            无论您需要 AI 赋能、VR 仿真还是交通智能方案，我们都准备好听取您的需求。
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4 inline-flex">
            <span className="relative z-10">立即联系</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
