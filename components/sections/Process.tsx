'use client'
import { useLang } from '@/contexts/LangContext'

export default function Process() {
  const { t } = useLang()
  const p = t.process

  return (
    <section id="process" className="py-32 px-6" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
          <div className="reveal">
            <h2
              className="font-display font-bold leading-tight glow-heading"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em' }}
            >
              {p.headline}
            </h2>
          </div>
          <p className="reveal stagger-2 leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.85 }}>
            {p.description}
          </p>
        </div>

        {/* Steps — cards with connecting left border */}
        <div className="relative space-y-3 mb-6">
          {/* Vertical line */}
          <div
            className="absolute left-[16px] top-8 bottom-8 w-px hidden lg:block"
            style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
          />

          {p.steps.map((step, i) => (
            <div
              key={step.title}
              className={`reveal stagger-${i + 1} group flex flex-col lg:flex-row gap-6 lg:gap-10`}
            >
              {/* Step badge */}
              <div className="flex-shrink-0 z-10">
                <div className="num-tag">{String(i + 1).padStart(2, '0')}</div>
              </div>

              {/* Card */}
              <div className="flex-1 card p-7 group-hover:bg-[var(--surface-up)]">
                <h3 className="font-display font-bold text-base mb-3" style={{ color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  )
}
