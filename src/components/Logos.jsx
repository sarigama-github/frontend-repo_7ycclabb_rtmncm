export default function Logos() {
  const logos = [
    { name: 'Acme', svg: (
      <svg viewBox="0 0 100 20" className="h-6 opacity-60 hover:opacity-100 transition-opacity"><text x="0" y="15" className="fill-white/80 font-semibold">acme</text></svg>
    )},
    { name: 'Quanta', svg: (
      <svg viewBox="0 0 100 20" className="h-6 opacity-60 hover:opacity-100 transition-opacity"><text x="0" y="15" className="fill-white/80 font-semibold">quanta</text></svg>
    )},
    { name: 'Nexus', svg: (
      <svg viewBox="0 0 100 20" className="h-6 opacity-60 hover:opacity-100 transition-opacity"><text x="0" y="15" className="fill-white/80 font-semibold">nexus</text></svg>
    )},
    { name: 'Aperture', svg: (
      <svg viewBox="0 0 100 20" className="h-6 opacity-60 hover:opacity-100 transition-opacity"><text x="0" y="15" className="fill-white/80 font-semibold">aperture</text></svg>
    )},
    { name: 'Cosmo', svg: (
      <svg viewBox="0 0 100 20" className="h-6 opacity-60 hover:opacity-100 transition-opacity"><text x="0" y="15" className="fill-white/80 font-semibold">cosmo</text></svg>
    )},
  ]

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-slate-400 mb-6">Trusted by modern teams</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center">
              {l.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
