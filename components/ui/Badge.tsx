interface BadgeProps {
  children: React.ReactNode
  color?: string
}

export default function Badge({ children, color }: BadgeProps) {
  return (
    <span
      className="inline-block text-xs font-mono px-2.5 py-1 rounded-full border"
      style={
        color
          ? {
              background: `${color}18`,
              borderColor: `${color}35`,
              color: color,
            }
          : {
              background: 'rgba(37,99,235,0.1)',
              borderColor: 'rgba(37,99,235,0.25)',
              color: '#3b82f6',
            }
      }
    >
      {children}
    </span>
  )
}
