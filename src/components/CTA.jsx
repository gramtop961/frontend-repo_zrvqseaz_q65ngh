import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="kontakt" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 md:p-14"
        >
          <div className="absolute -top-24 -right-10 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-10 w-80 h-80 bg-emerald-400/20 blur-3xl rounded-full" />

          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">Bereit für mehr Freiraum?</h3>
            <p className="text-slate-300 mt-3 max-w-2xl">
              Lass uns über dein Projekt sprechen. Wir melden uns innerhalb von 24 Stunden und schlagen die nächsten Schritte vor.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 grid md:grid-cols-[1.2fr_1fr_auto] gap-3"
            >
              <input
                type="text"
                placeholder="Dein Name"
                className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-medium px-5 py-3 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)] transition-shadow"
              >
                Erstgespräch sichern
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
