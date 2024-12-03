import { ReactNode } from 'react'

interface CardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

function FeatureCard({ icon, title, description, className = '' }: CardProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      {/* Background cards effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-2xl bg-gradient-to-r 
                  ${i === 0 ? 'from-blue-500 to-indigo-500' : ''}
                  ${i === 1 ? 'from-purple-500 to-pink-500' : ''}
                  ${i === 2 ? 'from-green-500 to-teal-500' : ''}
                  ${i === 3 ? 'from-orange-500 to-red-500' : ''}
                  ${i === 4 ? 'from-yellow-500 to-orange-500' : ''}
                `}
                style={{
                  width: '280px',
                  height: '200px',
                  transform: `rotate(${i * 15}deg)`,
                  opacity: 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="relative p-8 bg-white/80 backdrop-blur-sm">
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}
export default function Features2() {
    return (
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {/* Header */}
            <div className="space-y-8">
              <h2 className="text-7xl font-bold animate-fade-in">
                <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                  Web3 Books
                </span>
              </h2>
              <h3 className="text-6xl font-bold animate-fade-in-delay">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Features
                </span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed animate-fade-in-delay-2">
                Experience{' '}
                <span className="text-orange-500 font-semibold">revolutionary</span>{' '}
                digital reading powered by{' '}
                <span className="text-purple-500 font-semibold">blockchain technology</span>.
                Own your books as{' '}
                <span className="text-blue-500 font-semibold">NFTs</span>, join{' '}
                <span className="text-emerald-500 font-semibold">exclusive communities</span>,
                and connect directly with your favorite{' '}
                <span className="text-pink-500 font-semibold">authors</span>.
              </p>
            </div>
  
            {/* Feature card */}
            <div className="mt-12">
              <FeatureCard
                icon={
                  <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                }
                title="AI-Powered Companions"
                description="Enhance your reading experience with personalized AI insights"
                className="max-w-2xl"
              />
            </div>
  
            {/* Explore button */}
            <div className="mt-12">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }