import { useEffect } from 'react'
import FloatingShapes from '../components/FloatingShapes'

const values = [
  {
    title: '铭刻品质',
    desc: '对每一项技术交付负责，追求长期价值而非短期成果。',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12,2 15,8 22,9 17,14 18,21 12,17.5 6,21 7,14 2,9 9,8" />
      </svg>
    ),
    gradient: 'from-blue-500/10 to-blue-400/5',
  },
  {
    title: '澄澈创新',
    desc: '保持技术视野的透明与开阔，持续探索虚实融合的边界。',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M1 12h4M19 12h4" />
      </svg>
    ),
    gradient: 'from-cyan-500/10 to-teal-400/5',
  },
  {
    title: '安全可控',
    desc: '技术自研，数据不出域，全流程可追溯可审计。',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l7 4v5c0 5-3.1 9.7-7 11-3.9-1.3-7-6-7-11V6l7-4z" />
      </svg>
    ),
    gradient: 'from-indigo-500/10 to-blue-400/5',
  },
  {
    title: '务实落地',
    desc: '从概念到交付全链路闭环，不画饼，做出真实效果。',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 13l3 3 7-7" strokeWidth="2" />
      </svg>
    ),
    gradient: 'from-amber-500/10 to-orange-400/5',
  },
]

const techStack = [
  { name: 'UE4 / Unity', desc: '引擎研发' },
  { name: 'Transformer', desc: '时空预测' },
  { name: 'GCN / BiGCN', desc: '图神经网络' },
  { name: 'T2GAN', desc: '对抗生成' },
  { name: 'HTC Vive / Hololens', desc: 'XR 设备适配' },
  { name: 'Agent 框架', desc: 'AI 智能调度' },
]

export default function About() {
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
    <div>
      {/* ───── Hero ───── */}
      <section className="bg-hero pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-orb w-[450px] h-[450px] top-[-10%] right-[-5%] bg-blue-400" style={{ opacity: 0.22 }} />
          <div className="glow-orb w-[300px] h-[300px] bottom-[-5%] left-[10%] bg-cyan-300" style={{ opacity: 0.12 }} />
        </div>
        <div className="absolute inset-0 hex-grid opacity-50" />
        <FloatingShapes />

        {/* Hero geometric decoration */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none opacity-30 hidden md:block">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <polygon points="200,40 340,120 340,280 200,360 60,280 60,120" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.3" />
            <polygon points="200,80 300,140 300,260 200,320 100,260 100,140" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.2" />
            <polygon points="200,120 260,160 260,240 200,280 140,240 140,160" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.15" />
            <circle cx="200" cy="200" r="6" fill="#2563EB" opacity="0.4" className="node-pulse" />
            <line x1="200" y1="200" x2="200" y2="40" stroke="#2563EB" strokeWidth="0.5" opacity="0.1" />
            <line x1="200" y1="200" x2="340" y2="280" stroke="#2563EB" strokeWidth="0.5" opacity="0.1" />
            <line x1="200" y1="200" x2="60" y2="280" stroke="#2563EB" strokeWidth="0.5" opacity="0.1" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="reveal">
            <span className="section-tag mb-6">关于铭澄</span>
          </div>
          <h1 className="reveal text-4xl md:text-5xl font-extrabold text-ink mb-8 mt-6 tracking-tight">
            铭刻品质<span className="text-ink-muted mx-3">·</span>澄澈创新
          </h1>
          <p className="reveal text-lg text-ink-secondary max-w-3xl mx-auto leading-relaxed">
            成立于 2022 年，以"虚实融合"为核心能力的智能科技企业。扎根 XR 内容研发与引擎技术，
            持续升级 AI 与时空大数据能力，为各行业提供从概念到落地的全链路智能解决方案。
          </p>
        </div>
        <div className="bottom-fade" />
      </section>

      {/* ───── Values ───── */}
      <section className="py-24 md:py-32 bg-section-alt relative">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <FloatingShapes />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="section-tag">核心价值观</span>
            <h2 className="section-title mt-6">我们的行事准则</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`reveal group relative p-8 text-center rounded-2xl bg-gradient-to-br ${v.gradient} backdrop-blur-lg border border-slate-200/60 hover:border-brand-300/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Decorative corner */}
                <svg className="absolute top-2 right-2 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity" viewBox="0 0 48 48" fill="none">
                  <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-5 border border-brand-200 group-hover:border-brand-300 transition-colors relative z-10">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-ink mb-3 relative z-10">{v.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed relative z-10">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Tech Stack ───── */}
      <section className="py-24 md:py-32 bg-section relative">
        <div className="absolute inset-0 hex-grid opacity-40" />
        <FloatingShapes />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="section-tag">技术能力</span>
            <h2 className="section-title mt-6">自研核心 · 多引擎协同</h2>
          </div>
          <div className="reveal max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="text-center p-5 rounded-xl border border-slate-200/60 hover:border-brand-200 hover:bg-brand-50/60 transition-all duration-300"
                  >
                    <div className="text-base font-bold text-ink mb-1 font-mono tracking-tight">{tech.name}</div>
                    <div className="text-xs text-ink-muted">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Timeline ───── */}
      <section className="py-24 md:py-32 bg-section-alt relative">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <FloatingShapes />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="section-tag">发展历程</span>
            <h2 className="section-title mt-6">我们的旅程</h2>
          </div>

          <div className="reveal relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-300 via-brand-200 to-brand-300 hidden md:block" />

            <div className="space-y-12">
              {[
                {
                  year: '2022',
                  title: '公司成立',
                  desc: '北京铭澄互动科技有限公司注册成立，聚焦 XR 内容研发与定制化解决方案。',
                  right: true,
                },
                {
                  year: '2024',
                  title: '技术升级',
                  desc: '拓展 AI 与时空大数据方向，启动智慧交通与 AI 数字员工产品研发。',
                  right: false,
                },
                {
                  year: '2026',
                  title: '全面布局',
                  desc: '四大业务线成型，AI 数字员工 + 智慧交通 + VR/AR + 无人机训练全线推进。',
                  right: true,
                },
              ].map((item) => (
                <div key={item.year} className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                  <div className={`md:w-1/2 ${item.right ? 'text-right md:pr-8' : 'hidden md:block'}`}>
                    {item.right && (
                      <div className="reveal">
                        <div className="text-brand-600 font-extrabold text-2xl font-mono mb-1">{item.year}</div>
                        <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                        <p className="text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                  </div>

                  <div className="w-4 h-4 rounded-full bg-brand-500 shadow-[0_0_12px_rgba(37,99,235,0.4)] border-2 border-white z-10 shrink-0" />

                  <div className={`md:w-1/2 ${!item.right ? 'md:pl-8' : 'hidden md:block'}`}>
                    {!item.right && (
                      <div className="reveal">
                        <div className="text-brand-600 font-extrabold text-2xl font-mono mb-1">{item.year}</div>
                        <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                        <p className="text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
