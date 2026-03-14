import { LangProvider }  from '@/contexts/LangContext'
import ScrollReveal     from '@/components/ui/ScrollReveal'
import Navbar           from '@/components/sections/Navbar'
import Hero             from '@/components/sections/Hero'
import About            from '@/components/sections/About'
import Services         from '@/components/sections/Services'
import Projects         from '@/components/sections/Projects'
import Process          from '@/components/sections/Process'
import Contact          from '@/components/sections/Contact'
import Footer           from '@/components/sections/Footer'

export default function Page() {
  return (
    <LangProvider>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
