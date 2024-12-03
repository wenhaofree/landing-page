"use client"

import { useEffect, useRef } from 'react'

interface FloatingIconProps {
  icon: JSX.Element
  className?: string
  delay?: number
  duration?: number
}

function FloatingIcon({ icon, className = '', delay = 0, duration = 3 }: FloatingIconProps) {
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = iconRef.current
    if (!element) return

    element.style.animationDelay = `${delay}s`
    element.style.animationDuration = `${duration}s`
  }, [delay, duration])

  return (
    <div 
      ref={iconRef}
      className={`absolute animate-float ${className}`}
    >
      {icon}
    </div>
  )
}

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Book icon */}
      <FloatingIcon
        icon={
          <svg className="w-8 h-8 text-indigo-500/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14H4V6h16v12z"/>
            <path d="M9.5 8.5h5v2h-5zM8 12h8v2H8z"/>
          </svg>
        }
        className="top-24 left-[15%] transform -rotate-12"
        delay={0}
      />

      {/* NFT icon */}
      <FloatingIcon
        icon={
          <svg className="w-10 h-10 text-purple-500/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        }
        className="top-32 right-[20%] transform rotate-12"
        delay={1.5}
        duration={4}
      />

      {/* Community icon */}
      <FloatingIcon
        icon={
          <svg className="w-12 h-12 text-emerald-500/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        }
        className="bottom-20 left-[25%] transform -rotate-6"
        delay={0.8}
      />
    </div>
  )
} 