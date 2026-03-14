'use client'
import { useLang } from '@/contexts/LangContext'
import CountUp from '@/components/ui/CountUp'

const METRIC_STATS = [
  { end: 50, suffix: '+' },
  { end: 4,  suffix: '+' },
  { end: 100, suffix: '%' },
  { end: null },
]

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="py-32 px-6" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="reveal">
            <h2
              className="font-display font-bold leading-[1.02] mb-6 glow-heading"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em' }}
            >
              {a.headline}{' '}
              <span className="accent-text">{a.headlineAccent}</span>
            </h2>
            <a
              href="#contact"
              className="accent-pill group hover:opacity-80 transition-opacity cursor-pointer"
              style={{ textDecoration: 'none' }}
            >
              <svg className="transition-transform duration-200 group-hover:translate-x-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
              Work with us
            </a>
          </div>
          <div className="reveal stagger-2">
            <p
              className="leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)', color: 'var(--text-secondary)', lineHeight: 1.85 }}
            >
              {a.description}
            </p>
          </div>
        </div>

      

        {/* Values */}
        <div className="grad-divider mb-12" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {a.values.map((v, i) => (
            <div
              key={v.title}
              className={`reveal stagger-${i + 1} group card p-7`}
              style={{ background: 'var(--bg)' }}
            >
              <div className="num-tag mb-5">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                {v.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
