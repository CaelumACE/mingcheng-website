import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import HeroIllustration from '../components/HeroIllustration'
import FloatingShapes from '../components/FloatingShapes'
import CountUp from '../components/CountUp'
import CaseCarousel from '../components/CaseCarousel'

const businessCards = [
  {
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="white" strokeWidth="1.5" />
        <circle cx="16" cy="24" r="5" stroke="white" strokeWidth="1.5" />
        <path d="M8 36c0-3 4-7 8-7s8 4 8 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 18h12M28 24h12M28 30h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="24" r="2" fill="#bfdbfe" />
      </svg>
    ),
    title: 'AI 数字员工',
    desc: '不是聊天框，而是敢进入业务流程的 AI 执行系统。理解知识、遵循流程、调用系统，安全可控地完成真实工作。',
    to: '/products#ai',
    iconBox: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    iconGlow: 'shadow-[0_10px_28px_rgba(37,99,235,0.35)]',
    border: 'border-slate-200/60 hover:border-blue-300',
    glow: 'hover:shadow-[0_8px_40px_rgba(37,99,235,0.10)]',
    topbar: 'from-blue-500 to-indigo-500',
  },
  {
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="14" width="36" height="24" rx="3" stroke="white" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="8" stroke="white" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="#a5f3fc" />
        <path d="M24 6v4M24 38v4M10 20h4M34 20h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'VR/AR 虚实融合',
    desc: '基于 UE4/Unity 引擎，提供 XR 内容研发与定制化整体解决方案。从数字展厅到工业仿真，全链路覆盖。',
    to: '/products#xr',
    iconBox: 'bg-gradient-to-br from-cyan-500 to-teal-600',
    iconGlow: 'shadow-[0_10px_28px_rgba(6,182,212,0.35)]',
    border: 'border-slate-200/60 hover:border-cyan-300',
    glow: 'hover:shadow-[0_8px_40px_rgba(6,182,212,0.10)]',
    topbar: 'from-cyan-500 to-teal-500',
  },
  {
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none">
        <path d="M24 8l-4 4h-8c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4h-8l-4-4z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="26" r="6" stroke="white" strokeWidth="1.5" />
        <circle cx="24" cy="26" r="2" fill="#ddd6fe" />
      </svg>
    ),
    title: '无人机训练软件',
    desc: '军事风洞跳伞训练仿真平台，高精度物理引擎与沉浸式交互体验。更多内容即将上线。',
    to: '/products#drone',
    iconBox: 'bg-gradient-to-br from-violet-500 to-purple-600',
    iconGlow: 'shadow-[0_10px_28px_rgba(139,92,246,0.35)]',
    border: 'border-slate-200/60 hover:border-purple-300',
    glow: 'hover:shadow-[0_8px_40px_rgba(139,92,246,0.10)]',
    badge: '即将上线',
    topbar: 'from-violet-500 to-purple-500',
  },
  {
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="20" width="40" height="12" rx="2" stroke="white" strokeWidth="1.5" />
        <path d="M12 12h4v8h-4zM20 8h4v12h-4zM28 4h4v16h-4zM36 12h4v8h-4z" stroke="white" strokeWidth="1.5" />
        <line x1="24" y1="32" x2="24" y2="40" stroke="white" strokeWidth="1.5" />
        <circle cx="24" cy="42" r="3" fill="#fde68a" />
      </svg>
    ),
    title: '智慧交通',
    desc: '自研时空分层预测模型，突破 GCN 瓶颈。动态图结构学习 + BiGCN 出行预测 + T2GAN 态势推演。',
    to: '/products#traffic',
    iconBox: 'bg-gradient-to-br from-amber-500 to-orange-600',
    iconGlow: 'shadow-[0_10px_28px_rgba(245,158,11,0.35)]',
    border: 'border-slate-200/60 hover:border-amber-300',
    glow: 'hover:shadow-[0_8px_40px_rgba(245,158,11,0.10)]',
    topbar: 'from-amber-500 to-orange-500',
  },
]

const stats = [
  { value: '2022', label: '年成立' },
  { value: '4', label: '大业务线' },
  { value: '5+', label: '年技术积累' },
  { value: '100', label: '% 自主可控' },
]

const whyChoose = [
  {
    title: '技术自主可控',
    desc: '核心算法与引擎自研，支持私有化部署，数据不出域，安全合规。',
    accent: 'from-blue-500/15 to-blue-400/10',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <path d="M16 3l11 4v8c0 7-4.5 11.5-11 14C9.5 26.5 5 22 5 15V7l11-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M11 16l3.5 3.5L21 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: '虚实融合基因',
    desc: '深耕 XR 与 UE4/Unity 引擎技术，虚拟与现实无缝衔接。',
    accent: 'from-cyan-500/15 to-teal-400/10',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l10 6v12l-10 6-10-6V10l10-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M16 4v24M6 10l20 12M26 10L6 22" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: '全链路交付',
    desc: '从咨询规划、研发实施到落地运维，提供一站式闭环服务。',
    accent: 'from-purple-500/15 to-violet-400/10',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="17" y="17" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15 10h4v12h-4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: '多行业纵深',
    desc: '服务交通、工业、文娱等领域，既懂技术更懂业务场景。',
    accent: 'from-amber-500/15 to-orange-400/10',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="16" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
]

const casePoints = [
  { t: '项目背景', d: '实体展馆受时空限制，远程展示与培训成本高。' },
  { t: '解决方案', d: '高保真数字孪生 + 沉浸式交互 + 实时数据可视化。' },
  { t: '交付成果', d: '线上访问量大幅提升，线下接待与培训成本显著下降。' },
]

const partners = [
  { name: '上海银联', logo: '/assets/logo-unionpay.png' },
  { name: '国家电网', logo: '/assets/logo-stategrid.png' },
  { name: '北京工业大学', logo: '/assets/logo-bjut.png' },
  { name: 'BMW', logo: '/assets/logo-bmw.png' },
  { name: 'IBM', logo: '/assets/logo-ibm.png' },
  { name: '凯捷咨询', logo: '/assets/logo-capgemini.png' },
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
        {/* Glow orbs — the only background layer in hero (kept clean) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-orb w-[600px] h-[600px] top-[-15%] right-[-10%] bg-blue-400 animate-orb-1" />
          <div className="glow-orb w-[400px] h-[400px] bottom-[-10%] left-[-5%] bg-sky-300 animate-orb-2" style={{ opacity: 0.20 }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="max-w-3xl">
              <div className="reveal mb-8">
                <span className="section-tag">
                  <svg className="w-3 h-3" viewBox="0 0 12 12"><circle cx="6" cy="6" r="3" fill="currentColor"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" /></circle></svg>
                  智能科技 · 虚实融合
                </span>
              </div>

              <h1 className="reveal display-title mb-6 text-balance">
                铭刻创新
                <br />
                <span className="text-gradient">澄澈未来</span>
              </h1>

              <p className="reveal text-xl md:text-2xl font-semibold text-brand-600 mb-6">
                铭澄互动 —— 让智能触手可及
              </p>

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

            {/* Right: Hero Illustration */}
            <div className="reveal hidden lg:flex items-center justify-center">
              <HeroIllustration />
            </div>
          </div>
        </div>

        <div className="bottom-fade" />
      </section>

      {/* ───── Business Cards ───── */}
      <section className="py-24 md:py-32 bg-section relative">
        <div className="absolute inset-0 dot-grid opacity-30" />
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
                className={`reveal group fx-border relative p-8 rounded-2xl bg-white/55 backdrop-blur-sm border transition-all duration-500 hover:-translate-y-1 ${card.border} ${card.glow}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {card.badge && (
                  <span className="absolute top-5 right-5 px-2.5 py-1 bg-brand-100 text-brand-700 text-[11px] font-semibold rounded-full border border-brand-200 uppercase tracking-wider">
                    {card.badge}
                  </span>
                )}
                <div className={`w-14 h-14 rounded-xl ${card.iconBox} ${card.iconGlow} flex items-center justify-center mb-5 border border-white/20 ring-4 ring-white/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                  {card.icon}
                </div>
                <span className={`absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r ${card.topbar} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <h3 className="h3-title mb-3">{card.title}</h3>
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
        <div className="absolute inset-0 hex-grid opacity-25" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="reveal text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-gradient tracking-tight mb-2">
                  <CountUp end={stat.value} />
                </div>
                <div className="text-sm text-ink-muted font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Why Choose Us ───── */}
      <section className="py-24 md:py-32 bg-section relative">
        <div className="absolute inset-0 hex-grid opacity-25" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="section-tag mb-6">核心优势</span>
            <h2 className="section-title mt-6">为什么选择铭澄</h2>
            <p className="section-subtitle">技术为根，落地为本</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((item, i) => (
              <div
                key={item.title}
                className="reveal fx-border group relative p-7 rounded-2xl bg-white/55 backdrop-blur-sm border border-slate-200/60 transition-all duration-500 hover:-translate-y-1 hover:bg-white/85"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-5 border border-slate-200/50 text-brand-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="h3-title mb-3">{item.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Featured Case Carousel ───── */}
      <section className="py-24 md:py-32 bg-section-alt relative">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="section-tag mb-6">标杆案例</span>
            <h2 className="section-title mt-6">真实落地，看得见的成果</h2>
            <p className="section-subtitle">从概念到交付，我们陪客户走完最后一公里</p>
          </div>

          {/* Carousel: auto-play 5s, pause on hover, arrow nav, dot indicators */}
          <CaseCarousel />

          {/* More cases chips */}
          <div className="reveal flex flex-wrap justify-center gap-3 mt-10">
            {['数字展厅', '工业仿真', '智慧交通指挥中心', 'VR 培训系统', '元宇宙体验', '交互教学'].map((c) => (
              <span key={c} className="px-4 py-2 rounded-full text-sm font-medium text-ink-secondary bg-white/60 border border-slate-200/60 backdrop-blur-sm">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Partners ───── */}
      <section className="py-16 md:py-20 bg-section relative">
        <div className="absolute inset-0 diag-grid opacity-30" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 reveal">
            <span className="section-tag">合作伙伴</span>
            <p className="text-sm text-ink-muted mt-4">持续服务各行业客户，与生态伙伴共创价值</p>
          </div>
          <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group flex items-center justify-center h-28 md:h-32 rounded-2xl border border-slate-200/40 bg-white/20 hover:bg-white/50 hover:border-slate-300/60 hover:shadow-sm transition-all duration-300"
              >
                <img src={p.logo} alt={p.name} className="h-14 md:h-18 w-auto object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
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
        <FloatingShapes />
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
