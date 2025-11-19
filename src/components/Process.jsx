import { motion } from 'framer-motion'

const steps = [
  { n: '01', t: 'Kickoff', d: 'Ziele, Positionierung und Wirkung klären. Wir schaffen gemeinsame Orientierung.' },
  { n: '02', t: 'Design Sprints', d: 'Schnelle Iterationen mit greifbaren Prototypen – visuell und inhaltlich.' },
  { n: '03', t: 'Build', d: 'Sauber entwickelt mit Fokus auf Performance, Accessibility und SEO.' },
  { n: '04', t: 'Launch & Care', d: 'Rollout, Monitoring und laufende Weiterentwicklung.' }
]

export default function Process() {
  return (
    <section id="prozess" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-12"
        >
          So arbeiten wir
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="text-white/60 text-sm mb-2">{s.n}</div>
              <div className="text-white font-medium">{s.t}</div>
              <div className="text-slate-300 text-sm mt-2 leading-relaxed">{s.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
