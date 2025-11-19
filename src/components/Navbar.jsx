import { Menu, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-[0_0_40px_rgba(99,102,241,0.5)]" />
            <motion.span
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white font-semibold tracking-tight"
            >
              NovaAI
            </motion.span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              "Product",
              "Solutions",
              "Pricing",
              "Docs"
            ].map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * (i + 1) }}
                href="#"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 transition-colors"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              Live Demo
            </a>
            <button className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.6)] transition-shadow">
              Get started
            </button>
            <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/80">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
