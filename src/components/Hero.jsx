import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-24">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Soluții integrate de securitate pentru companii moderne
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100/90">
            Protecție completă, 24/7, prin tehnologii de ultimă generație și echipe certificate. De la supraveghere video la monitorizare și intervenție.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/servicii" className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition">
              Vezi serviciile
            </a>
            <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition border border-white/10">
              Cere ofertă
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
