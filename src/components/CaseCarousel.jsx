import { useState, useEffect, useCallback, useRef } from 'react'

const slides = [
  {
    image: '/assets/cases/case-party-history.png',
    tag: '红色文化 · 数字展厅',
    title: '党建党史展厅',
    desc: '高保真红色文化数字展厅，运用沉浸式空间设计与多媒体交互技术，让党史学习教育突破时空限制，支持远程参观与互动学习。',
    points: [
      { t: '项目背景', d: '传统实体展厅接待能力有限，难以满足大规模党员教育需求。' },
      { t: '解决方案', d: '1:1 数字复刻 + 沉浸式漫游 + 多媒体交互展项。' },
      { t: '交付成果', d: '线上日均访问量显著提升，覆盖受众范围扩大 10 倍以上。' },
    ],
  },
  {
    image: '/assets/cases/case-supply-center.jpg',
    tag: '数字孪生 · 管理中心',
    title: '供应商资源管理中心',
    desc: '为企业打造数字化供应商管理中枢，融合数据可视化大屏与智能交互终端，实现供应链全链路透明化管理与实时决策支持。',
    points: [
      { t: '项目背景', d: '供应商信息分散，管理效率低，缺乏统一的数据决策平台。' },
      { t: '解决方案', d: '数字孪生空间 + 实时数据可视化 + 智能交互终端。' },
      { t: '交付成果', d: '管理效率提升 60%，决策响应时间缩短至秒级。' },
    ],
  },
  {
    image: '/assets/cases/case-bmw-circular.jpg',
    tag: '品牌展馆 · 绿色可持续',
    title: 'BMW CIRCULAR 循环经济展台',
    desc: '为国际品牌打造沉浸式循环概念展馆，结合生态景观与数字媒体艺术，传递可持续发展理念，创造极具视觉冲击力的品牌体验空间。',
    points: [
      { t: '项目背景', d: '品牌需要在大型展会中突出绿色可持续理念与创新能力。' },
      { t: '解决方案', d: '螺旋生态装置 + 沉浸式投影 + 实时数据可视化。' },
      { t: '交付成果', d: '展会期间成为人气焦点，品牌曝光量超预期目标。' },
    ],
  },
  {
    image: '/assets/cases/case-smart-factory.jpg',
    tag: '工业仿真 · 智能制造',
    title: '智能工厂产线仿真系统',
    desc: '基于高精度物理引擎的工业产线仿真平台，还原真实工厂环境与机器人作业流程，用于产线规划验证、员工培训与安全演练。',
    points: [
      { t: '项目背景', d: '产线调试成本高，新员工上手周期长，安全培训风险大。' },
      { t: '解决方案', d: 'UE 引擎 + 物理仿真 + AI 行为树 + VR 接入。' },
      { t: '交付成果', d: '培训效率提升 3 倍，产线调试成本降低 40%。' },
    ],
  },
  {
    image: '/assets/cases/case-vr-store.jpg',
    tag: 'VR/AR · 虚实融合',
    title: 'VR 智能便利店实训系统',
    desc: '基于 UE 引擎开发的 VR 实训应用，模拟便利店经营全流程，融合 AI 导购助手与虚拟交互界面，为新零售从业人员提供沉浸式培训方案。',
    points: [
      { t: '项目背景', d: '连锁门店扩张快，传统培训成本高、标准化难度大。' },
      { t: '解决方案', d: 'VR 沉浸式场景 + AI NPC 交互 + 操作行为评估。' },
      { t: '交付成果', d: '单店培训成本降低 70%，员工上岗周期缩短一半。' },
    ],
  },
  {
    image: '/assets/cases/case-metaverse-track.jpg',
    tag: '元宇宙 · 娱乐体验',
    title: '赛博朋克元宇宙赛道体验',
    desc: '构建未来城市主题的元宇宙驾驶体验场景，融合霓虹美学、物理驾驶模拟与社交互动元素，打造沉浸式数字娱乐产品。',
    points: [
      { t: '项目背景', d: '客户需要面向 Z 世代的创新数字娱乐产品形态。' },
      { t: '解决方案', d: '开放世界场景 + 物理驾驶 + 多人同步 + 霓虹视觉风格。' },
      { t: '交付成果', d: '用户平均停留时长超 25 分钟，口碑传播效应显著。' },
    ],
  },
  {
    image: '/assets/cases/case-pc-assembly.jpg',
    tag: '交互教学 · 技能培训',
    title: 'PC 装机模拟教学系统',
    desc: '开发交互式 3D 硬件装机教学软件，通过引导式操作流程与零部件识别训练，帮助学员掌握计算机组装技能，适用于职业教育与企业内训。',
    points: [
      { t: '项目背景', d: '硬件实操损耗大、场地受限、无法规模化开展教学。' },
      { t: '解决方案', d: '3D 零部件模型 + 步骤引导 + 操作检测 + 评分系统。' },
      { t: '交付成果', d: '已应用于多所院校，学员通过率提升至 95% 以上。' },
    ],
  },
]

const AUTO_INTERVAL = 5000 // 5 seconds per slide

export default function CaseCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState(0) // 1=next, -1=prev, 0=init
  const timerRef = useRef(null)
  const total = slides.length

  const go = useCallback(
    (dir) => {
      setDirection(dir)
      setCurrent((prev) => {
        const next = prev + dir
        return next < 0 ? total - 1 : next >= total ? 0 : next
      })
    },
    [total]
  )

  // Auto-play
  useEffect(() => {
    if (isPaused) return
    timerRef.current = setInterval(() => go(1), AUTO_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [isPaused, go])

  const slide = slides[current]

  return (
    <div
      className="reveal glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-2 rounded-3xl relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Image Area (left) ── */}
      <div className="relative min-h-[280px] lg:min-h-[420px] bg-gradient-to-br from-brand-50 to-cyan-50 border-b lg:border-b-0 lg:border-r border-slate-200/60 overflow-hidden">
        {/* Slides with transition */}
        <div className="absolute inset-0">
          {slides.map((s, i) => (
            <img
              key={s.image}
              src={s.image}
              alt={s.title}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                i === current
                  ? 'opacity-100 scale-100'
                  : i === current - 1 || (current === 0 && i === total - 1)
                    ? 'opacity-0 scale-105'
                    : 'opacity-0 scale-95'
              }`}
              style={{ transitionProperty: 'opacity, transform' }}
            />
          ))}
        </div>

        {/* Gradient overlay at bottom for text readability on image */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

        {/* Slide counter badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md text-white text-xs font-semibold">
          <span className="text-brand-300">{String(current + 1).padStart(2, '0')}</span>
          <span className="text-white/40">/</span>
          <span className="text-white/60">{String(total).padStart(2, '0')}</span>
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => go(-1)}
          aria-label="上一张"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/35 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/55 transition-all duration-250 hover:scale-110"
          style={{ opacity: isPaused ? 1 : 0 }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => go(1)}
          aria-label="下一张"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/35 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center hover:bg-black/55 transition-all duration-250 hover:scale-110"
          style={{ opacity: isPaused ? 1 : 0 }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── Text Area (right) — fixed, content transitions with slide ── */}
      <div className="p-8 md:p-10 relative overflow-hidden">
        {/* Text content with fade transition */}
        <div
          key={current}
          className="animate-fadeIn"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-700 mb-4">
            {slide.tag}
          </span>
          <h3 className="text-2xl font-bold text-ink mb-4 leading-snug">
            {slide.title}
          </h3>
          <p className="text-ink-secondary leading-relaxed mb-6">
            {slide.desc}
          </p>
          <div className="space-y-3">
            {slide.points.map((p) => (
              <div key={p.t} className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                <p className="text-sm text-ink-secondary">
                  <span className="font-semibold text-ink">{p.t}：</span>{p.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-slate-200/50">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1)
                setCurrent(i)
              }}
              aria-label={`跳转到第 ${i + 1} 张`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 bg-brand-500'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-[11px] text-ink-muted">
          {isPaused ? (
            <>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
              已暂停
            </>
          ) : (
            <>
              <svg className="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              自动播放中
            </>
          )}
        </div>
      </div>
    </div>
  )
}
