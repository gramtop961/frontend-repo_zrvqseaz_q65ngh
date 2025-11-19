import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Aurora Health',
    tags: ['Brand', 'Website'],
    gradient: 'from-indigo-400 via-sky-400 to-emerald-300'
  },
  {
    title: 'North Studio',
    tags: ['Identity', 'Motion'],
    gradient: 'from-rose-400 via-fuchsia-400 to-violet-400'
  },
  {
    title: 'Lumen Commerce',
    tags: ['Shop', 'UX'],
    gradient: 'from-amber-300 via-orange-400 to-pink-400'
  }
]

export default function Showcase() {
  return (
    <section id="arbeiten" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-semibold text-white tracking-tight"
            >
              Ausgewählte Arbeiten
            </motion.h2>
            <p className="text-slate-300 mt-4 max-w-2xl">Ein kuratierter Einblick in jüngste Projekte – reduziert dargestellt, mit Fokus auf Atmosphäre und Wirkung.</p>
          </div>
          <a href="#" className="hidden md:inline-flex text-sm text-white/80 hover:text-white">Alle Projekte</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`aspect-[4/5] bg-gradient-to-br ${p.gradient}`} />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">{p.title}</h3>
                  <p className="text-slate-300 text-xs mt-1">{p.tags.join(' • ')}</p>
                </div>
                <div className="text-white/70 text-xs inline-flex px-3 py-1 rounded-full bg-white/10">Case</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
