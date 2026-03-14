'use client'
import { useLang } from '@/contexts/LangContext'
import Logo from '@/components/ui/Logo'

const navHrefs = ['#about', '#services', '#projects', '#process', '#contact']

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLang()
  const navLabels = [t.nav.about, t.nav.services, t.nav.projects, t.nav.process, t.nav.contact]

  return (
    <footer className="border-t py-12 px-6" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2.5">
              <Logo size={30} />
              <span className="font-display font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                A10V Technology
              </span>
            </a>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {t.footer.tagline ?? 'Digital Solutions for Businesses'}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-7 flex-wrap justify-center">
            {navLabels.map((label, i) => (
              <a key={navHrefs[i]} href={navHrefs[i]} className="footer-link font-body font-semibold">
                {label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-center md:text-right" style={{ color: 'var(--text-muted)' }}>
            © {year} A10V Technology.<br />
            <span className="text-xs">{t.footer.copy}</span>
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 text-center border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs font-body font-medium" style={{ color: 'var(--border-hi)' }}>
            {t.footer.built}
          </p>
        </div>
      </div>
    </footer>
  )
}
