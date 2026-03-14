'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import translations, { type Lang, type Translations } from '@/lib/translations'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LangContext = createContext<LangContextType>({
  lang: 'EN',
  setLang: () => {},
  t: translations.EN,
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('EN')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang
    if (stored === 'AZ' || stored === 'EN') setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
