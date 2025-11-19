import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Soft radial background auras */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[80vh] w-[80vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/3 right-10 h-[60vh] w-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[40vh] w-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.12),transparent_60%)] blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <CTA />

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-10 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} NovaAI, Inc. All rights reserved.
      </footer>
    </div>
  )
}

export default App
