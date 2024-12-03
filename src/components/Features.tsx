import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Digital</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Reading</span>
              {' '}Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience a revolutionary approach to digital reading where blockchain meets literature.
            </p>

            <div className="mt-16 grid sm:grid-cols-2 gap-8">
              <FeatureCard
                icon={
                  <svg className="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                }
                title="Digital Ownership"
                description="Secure permanent ownership of your digital books through blockchain technology"
              />
              <FeatureCard
                icon={
                  <svg className="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
                title="Secure Trading"
                description="Every transaction is secured and recorded with smart contract technology"
              />
              <FeatureCard
                icon={
                  <svg className="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                }
                title="Value Growth"
                description="Digital books as NFT assets can be freely traded in the marketplace"
              />
              <FeatureCard
                icon={
                  <svg className="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
                title="Community"
                description="Join a vibrant reader community to share insights and connect worldwide"
              />
            </div>
          </div>

          <div className="relative lg:ml-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-3xl opacity-20 blur-3xl" />
              <div className="relative bg-[#B4E9D6] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/astronaut-reading.png" 
                  alt="Astronaut reading on a planet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 