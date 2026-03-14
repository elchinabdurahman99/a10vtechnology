import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-body font-semibold text-sm rounded-xl px-6 py-3 transition-all duration-200 cursor-pointer select-none'

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'var(--text-primary)',
      color: 'var(--bg)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-hi)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
    },
  }

  const hoverClass =
    variant === 'primary'
      ? 'hover:opacity-80 hover:-translate-y-0.5'
      : variant === 'secondary'
      ? 'hover:opacity-70 hover:-translate-y-0.5'
      : 'hover:opacity-60'

  const cls = `${base} ${hoverClass} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} style={variantStyles[variant]}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls} style={variantStyles[variant]}>
      {children}
    </button>
  )
}
