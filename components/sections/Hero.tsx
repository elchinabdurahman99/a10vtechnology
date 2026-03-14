'use client'
import { useLang } from '@/contexts/LangContext'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import CountUp from '@/components/ui/CountUp'



const STATS = [
  { end: 10,  suffix: '+', labelKey: 0 },
  { end: 2,   suffix: '+', labelKey: 1 },
  { end: 100, suffix: '%', labelKey: 2 },
]



export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-0 px-6 md:px-0" style={{ background:'var(--bg)' }}>
      <div className="max-w-6xl mx-auto w-full ">

        {/* Split grid */}
        <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center mb-16">

          {/* ── Left ── */}
          <div>
       

            {/* Headline */}
            <div className="animate-fade-up delay-200 mb-7">
              <h1
                className="font-display font-bold"
                style={{ fontSize:'clamp(2rem,7vw,6rem)', letterSpacing:'-0.03em', lineHeight:1.25 }}
              >
                <span className="block accent-text">{h.headline1}</span>
                <span className="block" style={{ color:'var(--text-primary)' }}>{h.headline2}</span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="animate-fade-up delay-300 max-w-lg mb-10"
              style={{ fontSize:'clamp(.95rem,1.4vw,1.1rem)', color:'var(--text-secondary)', lineHeight:1.85 }}
            >
              {h.description}
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 mb-14">
              <Button href="#projects" variant="primary" className="text-sm px-8 py-3.5">
                {h.viewProjects} <Icon name="arrowRight" size={14} />
              </Button>
              <Button href="#contact" variant="secondary" className="text-sm px-8 py-3.5">
                {h.contactUs}
              </Button>
            </div>

          
          </div>

     
        </div>
      </div>

     
    </section>
  )
}
