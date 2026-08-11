/**
 * CountUp — 数字从 0 滚动到目标值的动画组件
 * 使用 IntersectionObserver 触发
 */
import { useState, useEffect, useRef } from 'react'

export default function CountUp({ end, duration = 1800, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const isString = typeof end === 'string'
            const numericEnd = isString ? parseInt(end.replace(/[^0-9]/g, ''), 10) : end
            const prefix = isString ? end.replace(/[0-9]/g, '') : ''
            const startTime = performance.now()

            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              // Ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = Math.floor(numericEnd * eased)
              setCount(prefix + current + suffix)
              if (progress < 1) requestAnimationFrame(animate)
              else setCount(end)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, suffix])

  return <span ref={ref}>{count}</span>
}
