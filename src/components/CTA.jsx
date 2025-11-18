export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%),radial-gradient(circle_at_70%_80%,white,transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Ai nevoie de o evaluare de risc?</h2>
            <p className="mt-2 text-white/90 max-w-2xl">Trimite-ne câteva detalii despre locație și îți oferim o soluție personalizată, conformă cu legislația.</p>
          </div>
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:bg-white/90 transition">
            Programează o discuție
          </a>
        </div>
      </div>
    </section>
  )
}
