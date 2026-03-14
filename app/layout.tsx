import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'A10V ',
  description:
    'A10V Technology is a small independent tech partnership building websites, web applications, CRM systems, and managing digital presence for businesses.',
  keywords: ['web development', 'web design', 'CRM', 'social media management', 'Azerbaijan', 'freelance developer'],
  authors: [{ name: 'A10V Technology' }],
  openGraph: {
    title: 'A10V ',
    description: 'We help businesses build websites and manage their digital presence.',
    type: 'website',
    siteName: 'A10V Technology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A10V Technology',
    description: 'Modern websites and digital solutions for businesses.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of wrong theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
