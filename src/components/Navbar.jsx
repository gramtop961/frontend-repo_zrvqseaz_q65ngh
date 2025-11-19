import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm md:text-[15px] text-slate-200/90 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <motion.div
        animate={{
          backgroundColor: scrolled ? 'rgba(2,6,23,0.6)' : 'rgba(2,6,23,0)',
          backdropFilter: scrolled ? 'blur(8px)' : 'blur(0px)'
        }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="border-b border-white/5"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_30px_rgba(59,130,246,0.35)]" />
            <span className="font-semibold tracking-tight text-white">FREIRAUM Studio</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#leistungen">Leistungen</NavLink>
            <NavLink href="#arbeiten">Arbeiten</NavLink>
            <NavLink href="#prozess">Prozess</NavLink>
            <a
              href="#kontakt"
              className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm transition-colors"
            >
              Erstgespräch
            </a>
          </div>

          <button
            className="md:hidden text-white"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-6 pb-6 flex flex-col gap-4 bg-slate-900/70 backdrop-blur">
                <NavLink href="#leistungen" onClick={() => setOpen(false)}>Leistungen</NavLink>
                <NavLink href="#arbeiten" onClick={() => setOpen(false)}>Arbeiten</NavLink>
                <NavLink href="#prozess" onClick={() => setOpen(false)}>Prozess</NavLink>
                <a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm transition-colors w-fit"
                >
                  Erstgespräch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
