import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Features2 from '@/components/Features2'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Features2 />
      <CTA />
    </div>
  )
}
