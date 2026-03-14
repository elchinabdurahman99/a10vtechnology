'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLang } from '@/contexts/LangContext'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'
import LangSelector from '@/components/ui/LangSelector'
import Logo from '@/components/ui/Logo'

const navHrefs = ['#about', '#services', '#projects', '#process', '#contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLang()

  const navLabels = [t.nav.about, t.nav.services, t.nav.projects, t.nav.process, t.nav.contact]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md' : 'bg-transparent'}`}
      style={{
        background: scrolled ? 'var(--bg-alpha)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto  py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <Logo size={34} />
          <span className="font-display font-bold text-base" style={{ color: 'var(--text-primary)' }}>
            A10V{' '}
            <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Technology</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLabels.map((label, i) => (
            <a key={navHrefs[i]} href={navHrefs[i]} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="hidden md:flex items-center gap-3">
          <LangSelector />
          <ThemeToggle />
          <Button href="#contact" variant="primary" className="text-base px-7 py-2.5">
            {t.nav.cta}
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <LangSelector />
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: 'var(--text-secondary)' }} />
            <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: 'var(--text-secondary)' }} />
            <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: 'var(--text-secondary)' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-6 flex flex-col gap-4" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          {navLabels.map((label, i) => (
            <a key={navHrefs[i]} href={navHrefs[i]} className="nav-link py-1 text-base" onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="self-start mt-2">
            {t.nav.cta}
          </Button>
        </div>
      )}
    </header>
  )
}
