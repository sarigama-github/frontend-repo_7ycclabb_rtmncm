import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      {/* Background grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_40%,#000_60%,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Spline 3D centerpiece */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              The AI voice platform for customer magic
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg text-slate-300 max-w-xl"
            >
              Spin up production-grade voice agents that sound natural, understand context, and get things done — no complex setup.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-[0_20px_60px_-15px_rgba(255,255,255,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.65)] transition-all">
                Start for free
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
                Book a demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-lg"
            >
              {[
                { label: 'Avg CSAT', value: '4.9/5' },
                { label: 'Resolution', value: '88%' },
                { label: 'Latency', value: '120ms' }
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <div className="text-xl font-semibold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative h-[380px] sm:h-[520px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-[32px] border border-white/10 overflow-hidden bg-slate-900">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* Gradient auras overlay */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),transparent_60%)] blur-2xl" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.18),transparent_60%)] blur-2xl" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] rounded-full bg-[radial-gradient(circle_at_40%_60%,rgba(251,146,60,0.18),transparent_60%)] blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
