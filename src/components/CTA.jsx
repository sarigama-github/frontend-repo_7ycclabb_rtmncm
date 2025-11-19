import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-amber-400/20 p-1">
          <div className="rounded-[22px] bg-slate-900/60 p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-semibold text-white"
                >
                  Launch your AI voice agent in days, not months
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="mt-3 text-slate-300"
                >
                  Get started with a free sandbox. No credit card required.
                </motion.p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-[0_20px_60px_-15px_rgba(255,255,255,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.65)] transition-all">
                  Create free account
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
