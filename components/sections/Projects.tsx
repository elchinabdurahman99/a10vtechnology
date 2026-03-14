'use client'
import Image from 'next/image'
import { useLang } from '@/contexts/LangContext'
import { projects } from '@/lib/data'

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  return (
    <section id="projects" className="py-32 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal stagger-${(i % 6) + 1} group card block`}
              style={{ textDecoration: 'none' }}
            >
              {/* Image area */}
              <div className="relative overflow-hidden rounded-t-2xl" style={{ aspectRatio: '16/10' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(2,13,12,0.9) 0%, transparent 55%)' }}
                >
                  <span
                    className="teal-pill text-[0.6rem]"
                    style={{ backdropFilter: 'blur(8px)' }}
                  >
                    {p.visitSite}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </span>
                </div>
                {/* Category */}
                <span
                  className="absolute top-3 left-3 text-[0.6rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded"
                  style={{
                    background: 'rgba(2,13,12,0.75)',
                    color: 'white',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-display font-bold text-sm transition-colors duration-200 group-hover:text-[var(--accent-hi)]" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <svg
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                    width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ color: 'var(--accent)' }}
                  >
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {project.desc}
                </p>
                {project.tech && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.6rem] px-2 py-0.5 rounded font-semibold tracking-wide uppercase"
                        style={{ background: 'var(--accent-glow-sm)', color: 'var(--accent)', border: '1px solid var(--border-hi)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
