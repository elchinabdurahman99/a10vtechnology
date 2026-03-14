'use client'
import { useEffect } from 'react'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  const isSuccess = type === 'success'

  return (
    <div
      className="fixed bottom-6 right-6 z-[200] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl animate-fade-up"
      style={{
        background: 'var(--surface)',
        border: `1px solid ${isSuccess ? 'rgba(63,185,80,0.5)' : 'rgba(239,68,68,0.5)'}`,
        minWidth: '300px',
        maxWidth: '420px',
        boxShadow: `0 8px 32px ${isSuccess ? 'rgba(63,185,80,0.12)' : 'rgba(239,68,68,0.12)'}`,
      }}
      role="alert"
    >
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
        style={{ background: isSuccess ? 'rgba(63,185,80,0.15)' : 'rgba(239,68,68,0.15)' }}
      >
        {isSuccess ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3fb950" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
      </div>

      <p className="text-sm font-semibold flex-1" style={{ color: 'var(--text-primary)' }}>
        {message}
      </p>

      <button
        onClick={onClose}
        className="shrink-0 transition-opacity hover:opacity-100 opacity-40"
        style={{ color: 'var(--text-muted)' }}
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}
