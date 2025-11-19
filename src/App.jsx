import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Ambient grid and glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.3) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-500/20 blur-[140px] rounded-full" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Process />
        <CTA />
      </main>

      <footer className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} FREIRAUM Studio</p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
