import { motion } from 'framer-motion'
import { Star, Layout, Rocket, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Marke mit Gefühl',
    text: 'Wir schaffen Charakter – klar in der Linie, weich in der Wirkung. Mit starken Typo- und Farbakzenten.'
  },
  {
    icon: Layout,
    title: 'Struktur & Flow',
    text: 'Informationsarchitektur mit Sinn. Inhalte führen, statt zu überladen. Schnell zu erfassen, gerne zu erleben.'
  },
  {
    icon: Star,
    title: 'Micro-Interactions',
    text: 'Sanfte Bewegungen, die nie ablenken – sondern Fokus erzeugen und Qualität spürbar machen.'
  },
  {
    icon: Rocket,
    title: 'Performance',
    text: 'Leichtgewichtig gebaut, SEO-ready und messbar schnell – von Anfang an.'
  }
]

export default function Features() {
  return (
    <section id="leistungen" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold text-white tracking-tight"
          >
            Was wir gut können
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-300 mt-4 max-w-2xl"
          >
            Ein Setup aus Strategie, Design und Entwicklung – abgestimmt auf Marken, die digital vorausgehen wollen.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-500 to-emerald-400 flex items-center justify-center text-white mb-4 shadow-[0_0_24px_rgba(59,130,246,0.35)]">
                <Icon size={18} />
              </div>
              <h3 className="text-white font-medium mb-2">{title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
