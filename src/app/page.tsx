'use client'

import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import HowItWorks from '@/components/sections/HowItWorks'
import GamesShowcase from '@/components/sections/GamesShowcase'
import RewardsSection from '@/components/sections/RewardsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <GamesShowcase />
      <RewardsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  )
}
