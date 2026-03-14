'use client'
import { useLang } from '@/contexts/LangContext'
import { devServices, creativeServices } from '@/lib/data'
import Icon from '@/components/ui/Icon'

interface RowProps { icon: string; num: string; title: string; desc: string; idx: number }

function ServiceRow({ icon, num, title, desc, idx }: RowProps) {
  return (
    <div className={`service-row reveal stagger-${(idx % 5) + 1}`}>
      {/* Number */}
      <span className="font-mono text-xs pt-1 flex-shrink-0 w-6" style={{ color:'var(--text-muted)' }}>{num}</span>
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{ background:'var(--accent-glow-sm)', color:'var(--accent)', border:'1px solid var(--border-hi)' }}
      >
        <Icon name={icon} size={16} />
      </div>
      {/* Text */}
      <div className="flex-1 min-w-0">
        <div
          className="font-display font-bold text-base mb-0.5 transition-colors duration-200 group-hover:text-[var(--accent)] service-row-title"
          style={{ color:'var(--text-primary)' }}
        >
          {title}
        </div>
        <p className="text-sm leading-relaxed" style={{ color:'var(--text-muted)', lineHeight:1.65 }}>{desc}</p>
      </div>
      {/* Arrow */}
      <svg
        className="flex-shrink-0 self-center opacity-0 -translate-x-2 transition-all duration-200 service-row-arrow"
        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color:'var(--accent)' }}
      >
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
      </svg>
    </div>
  )
}

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="py-36 px-6" style={{ background:'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
          <div className="reveal">
            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize:'clamp(2.4rem,5vw,3.8rem)', color:'var(--text-primary)', letterSpacing:'-0.03em' }}
            >
              {s.headline}
            </h2>
          </div>
          <p className="reveal stagger-2 leading-relaxed" style={{ color:'var(--text-secondary)', fontSize:'1rem', lineHeight:1.85 }}>
            {s.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-0">
          {/* Dev services */}
          <div>
            <div className="reveal flex items-center gap-3 mb-2">
              <span className="accent-pill">{s.devLabel}</span>
            </div>
            <div>
              {s.dev.map((svc, i) => (
                <ServiceRow
                  key={i} idx={i}
                  icon={devServices[i]?.icon ?? 'globe'}
                  num={String(i + 1).padStart(2, '0')}
                  title={svc.title} desc={svc.desc}
                />
              ))}
            </div>
          </div>

          {/* Creative services */}
          <div>
            <div className="reveal flex items-center gap-3 mb-2">
              <span className="accent-pill">{s.creativeLabel}</span>
            </div>
            <div>
              {s.creative.map((svc, i) => (
                <ServiceRow
                  key={i} idx={i}
                  icon={creativeServices[i]?.icon ?? 'star'}
                  num={String(i + 1).padStart(2, '0')}
                  title={svc.title} desc={svc.desc}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
      {/* Inline hover style since Tailwind can't target .service-row:hover children */}
      <style>{`
        .service-row:hover .service-row-title { color: var(--accent); }
        .service-row:hover .service-row-arrow { opacity: 1; transform: translateX(0); }
      `}</style>
    </section>
  )
}
