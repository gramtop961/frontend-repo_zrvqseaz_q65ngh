import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 w-[700px] h-[700px] bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -right-10 w-[600px] h-[600px] bg-emerald-400/10 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-semibold text-white tracking-tight"
            >
              Digitale Räume, die sich nach Freiheit anfühlen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-slate-300 text-lg md:text-xl max-w-2xl"
            >
              Wir gestalten Websites und Markenauftritte, die sich leicht, modern und lebendig anfühlen – mit klarer Struktur, sanften Micro-Interactions und einem Fokus auf Wirkung.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a className="px-5 py-3 rounded-full bg-white text-slate-900 font-medium shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_10px_50px_-10px_rgba(255,255,255,0.55)] transition-shadow" href="#kontakt">
                Projekt anfragen
              </a>
              <a className="px-5 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors" href="#arbeiten">
                Arbeiten ansehen
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3"
            >
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#60a5fa_0,transparent_40%),radial-gradient(circle_at_80%_30%,#34d399_0,transparent_35%)]" />
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i }}
                      className="m-3 rounded-xl bg-slate-800/60 border border-white/5"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-7xl px-6 opacity-80">
        {['Strategie','Design','Entwicklung','Motion'].map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center text-slate-200"
          >
            {label}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
