import { motion } from 'framer-motion'
import { Sparkles, Zap, ShieldCheck, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Neural voices that feel alive',
    desc: 'Expressive, natural speech with multi-lingual support and emotion controls.'
  },
  {
    icon: Zap,
    title: 'Realtime understanding',
    desc: 'Low-latency intent recognition and context memory for fluid conversations.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    desc: 'SOC 2 ready, SSO/SAML, PII redaction, and regional data residency.'
  },
  {
    icon: MessageSquare,
    title: 'Drop-in integrations',
    desc: 'Connect your CRM, helpdesk, calendar, and internal tools in minutes.'
  }
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.05 * i }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.45)]">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
