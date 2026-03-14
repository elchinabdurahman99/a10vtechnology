interface LogoProps {
  size?: number
}

export default function Logo({ size = 36 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="A10V Technology logo"
    >
      <defs>
        <linearGradient id="a10v-bg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="9" fill="url(#a10v-bg)" />
      <line x1="18" y1="8"  x2="9"  y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="8"  x2="27" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12.5" y1="21" x2="23.5" y2="21" stroke="white" strokeWidth="2"   strokeLinecap="round" />
    </svg>
  )
}
