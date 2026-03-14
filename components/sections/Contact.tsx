'use client'
import { useState } from 'react'
import { useLang } from '@/contexts/LangContext'
import Icon from '@/components/ui/Icon'
import Toast from '@/components/ui/Toast'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  const contactLinks = [
    { icon: 'mail',      label: c.emailLabel,     value: 'elchinabdurahman10@gmail.com',   href: 'mailto:elchinabdurahman10@gmail.com',          color: 'var(--accent)' },
    { icon: 'whatsapp',  label: c.whatsappLabel,  value: '+994 50 529 15 97', href: 'https://wa.me/994505291597',      color: '#22c55e' },
    { icon: 'instagram', label: c.instagramLabel, value: '@a10v.tech',        href: 'https://instagram.com/a10v.tech', color: '#ec4899' },
  ]

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setToast({ message: c.toastSuccess, type: 'success' })
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setToast({ message: c.toastError, type: 'error' })
      }
    } catch {
      setToast({ message: c.toastError, type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-32 px-6" style={{ background: 'var(--bg)' }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className=" mb-16">
          {/* <div className="reveal">
            <h2
              className="font-display font-bold leading-tight glow-heading"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em' }}
            >
              {c.headline}{' '}
              <span className="accent-text">{c.headlineAccent}</span>
            </h2>
          </div> */}
          <p className="text-center font-bold" style={{ color: 'var(--text-secondary)', fontSize: '1.9rem' }}>
            {c.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — contact links */}
          <div className="lg:col-span-2 space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl p-4 border transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${link.color}18`, color: link.color }}
                >
                  <Icon name={link.icon} size={18} />
                </div>
                <div>
                  <div className="text-xs font-body font-bold mb-0.5 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    {link.label}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {link.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Availability */}
            <div
              className="rounded-xl p-5 border"
              style={{ background: 'var(--accent-glow-sm)', borderColor: 'var(--border-hi)', borderRadius: 12 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full animate-glow-pulse" style={{ background: 'var(--accent)' }} />
                <span className="text-xs font-bold" style={{ color: 'var(--accent)' }}>
                  {c.available}
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {c.availableDesc}{' '}
                <strong style={{ color: 'var(--text-secondary)' }}>{c.availableStrong}</strong>{' '}
                {c.availableEnd}
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border p-7 space-y-5"
              style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-body font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    {c.labelName}
                  </label>
                  <input
                    type="text" required
                    placeholder={c.placeholderName}
                    className="form-input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-body font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    {c.labelEmail}
                  </label>
                  <input
                    type="email" required
                    placeholder={c.placeholderEmail}
                    className="form-input"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-body font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                  {c.labelSubject}
                </label>
                <input
                  type="text"
                  placeholder={c.placeholderSubject}
                  className="form-input"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-body font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                  {c.labelMessage}
                </label>
                <textarea
                  required rows={5}
                  placeholder={c.placeholderMessage}
                  className="form-input"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
                style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                    {c.sending}
                  </>
                ) : (
                  <>
                    {c.send}
                    <Icon name="arrowRight" size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
