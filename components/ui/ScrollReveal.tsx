'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )

    const observe = () =>
      document
        .querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach((el) => observer.observe(el))

    observe()

    // re-observe after hydration / any DOM change
    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
