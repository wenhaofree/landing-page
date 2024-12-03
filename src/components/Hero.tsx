import FloatingIcons from './FloatingIcons'

export default function Hero() {
  return (
    <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute left-[50%] top-0 h-[800px] w-[800px] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 blur-3xl" />
      </div>

      {/* Floating background icons */}
      <FloatingIcons />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Welcome badge */}
          <div className="inline-flex items-center rounded-full px-4 py-1 mb-8 bg-white/80 backdrop-blur-sm shadow-sm">
            <span className="text-sm font-medium text-gray-900">✨ Welcome to the Future of Reading</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Discover the Future of Reading
            <span className="block text-4xl sm:text-6xl mt-4">with <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text">Web3 Books</span></span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the revolution in digital reading. Purchase, collect, and trade unique NFT books 
            <span className="text-indigo-600"> while supporting your favorite authors directly</span>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
              Connect Wallet
            </button>
            <button className="rounded-md bg-white/80 backdrop-blur-sm px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-200 hover:bg-white transition-colors">
              Explore Collection →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 