import { useState, useEffect, useCallback, useRef } from 'react'

const DEFAULT_INTERVAL = 6000

/**
 * 通用图片轮播组件 —— 支持：
 * - 自动播放（默认6s/张，可通过interval自定义）
 * - 鼠标悬停暂停 + 显示左右箭头
 * - 圆点指示器 + 计数角标(01/05)
 * - 文案联动（tag/title/desc/points随图切换，fadeIn过渡）
 *
 * 用法：<ImageCarousel slides={[{image,tag,title,desc,points}]} interval={5000} />
 */
export default function ImageCarousel({ slides = [], interval = DEFAULT_INTERVAL, className = '' }) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)
  const total = slides.length

  const goTo = useCallback(
    (idx) => setCurrent((prev) => ((idx % total) + total) % total),
    [total]
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [goTo])

  /* ── Auto-play with hover pause ── */
  useEffect(() => {
    if (isPaused || total <= 1) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(next, interval)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [next, isPaused, interval, total])

  /* Single slide → no carousel UI needed */
  if (total <= 1) {
    const s = slides[0]
    return (
      <div className={className}>
        <div className="relative overflow-hidden rounded-2xl bg-slate-100">
          {s?.image && (
            <img src={s.image} alt={s?.title || ''} className="w-full h-auto object-cover rounded-2xl" loading="eager" />
          )}
        </div>
        {s && (
          <>
            {s.tag && (
              <span className="inline-block mt-4 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-700">
                {s.tag}
              </span>
            )}
            {s.title && <h4 className="text-lg font-bold text-ink mt-2 leading-snug">{s.title}</h4>}
            {s.desc && <p className="text-sm text-ink-secondary leading-relaxed mt-2">{s.desc}</p>}
          </>
        )}
      </div>
    )
  }

  const slide = slides[current]

  return (
    <div
      className={`group relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Image Area ── */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[3/2] md:aspect-[2/1] min-h-[200px]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-contain"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Counter badge */}
        <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-black/55 text-white backdrop-blur-sm tracking-wider">
          {String(current + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(total).padStart(2, '0')}
        </div>

        {/* Arrow buttons (visible on hover) */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/85 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="上一张"
        >
          <svg className="w-3.5 h-3.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/85 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="下一张"
        >
          <svg className="w-3.5 h-3.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Pause hint */}
        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] text-white font-medium drop-shadow">自动播放中</span>
        </div>
      </div>

      {/* ── Text Content (cross-fade with image) ── */}
      <div key={current} className="mt-5 animate-fadeIn">
        {slide.tag && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-700 mb-2.5">
            {slide.tag}
          </span>
        )}
        {slide.title && (
          <h4 className="text-lg font-bold text-ink mb-2 leading-snug">{slide.title}</h4>
        )}
        {slide.desc && (
          <p className="text-sm text-ink-secondary leading-relaxed mb-3">{slide.desc}</p>
        )}
        {slide.points && slide.points.length > 0 && (
          <div className="space-y-2">
            {slide.points.map((p, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-1 w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                <p className="text-xs text-ink-secondary">
                  <span className="font-medium text-ink">{p.t}：</span>{p.d}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Dots Indicator ── */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-brand-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`切换到第${i + 1}张`}
          />
        ))}
      </div>
    </div>
  )
}
