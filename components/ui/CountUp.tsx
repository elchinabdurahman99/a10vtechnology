'use client'
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function CountUp({ end, suffix = '', prefix = '', duration = 1800 }: CountUpProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          let t0: number

          const tick = (ts: number) => {
            if (!t0) t0 = ts
            const progress = Math.min((ts - t0) / duration, 1)
            // ease-out cubic
            const eased = 1 - (1 - progress) ** 3
            setValue(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className="animate-number-appear tabular-nums">
      {prefix}{value}{suffix}
    </span>
  )
}
