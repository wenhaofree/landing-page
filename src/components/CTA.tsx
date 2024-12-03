"use client"

import { useEffect, useRef } from 'react'

function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 600
    canvas.height = 600

    // Particle system
    const particles: { x: number; y: number; speed: number; angle: number }[] = []
    const particleCount = 300

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 200 + (Math.random() - 0.5) * 20
      particles.push({
        x: Math.cos(angle) * radius + canvas.width / 2,
        y: Math.sin(angle) * radius + canvas.height / 2,
        speed: 0.2 + Math.random() * 0.3,
        angle: angle
      })
    }

    // Animation loop
    let animationFrameId: number

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = '#8B5CF6'
        ctx.fill()

        // Update position
        particle.x += Math.cos(particle.angle) * particle.speed
        particle.y += Math.sin(particle.angle) * particle.speed

        // Keep particles within sphere bounds
        const dx = particle.x - canvas.width / 2
        const dy = particle.y - canvas.height / 2
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance > 220) {
          particle.angle = Math.atan2(dy, dx) + Math.PI
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full max-w-[600px] max-h-[600px]"
    />
  )
}

export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center p-12">
            {/* Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-indigo-600">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="font-semibold">Start Your Journey</span>
              </div>

              {/* Text */}
              <h2 className="mt-6 text-4xl font-bold">
                Ready to Build Your{' '}
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Digital Library
                </span>
                ?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join our community of book enthusiasts and start collecting unique digital editions. Connect your wallet to begin your Web3 reading journey.
              </p>

              {/* Button */}
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-white font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all">
                Learn More
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Visualization */}
            <div className="relative aspect-square">
              <ParticleSphere />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 