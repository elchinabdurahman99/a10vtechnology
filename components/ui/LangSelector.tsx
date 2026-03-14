'use client'
import { useLang } from '@/contexts/LangContext'
import type { Lang } from '@/lib/translations'

export default function LangSelector() {
  const { lang, setLang } = useLang()

  return (
    <div
      className="flex items-center rounded-lg overflow-hidden"
      style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}
    >
      {(['EN', 'AZ'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="px-3 py-1.5 text-xs font-bold tracking-wide transition-all duration-200"
          style={{
            background: lang === l ? 'var(--text-primary)' : 'transparent',
            color: lang === l ? 'var(--bg)' : 'var(--text-muted)',
          }}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
