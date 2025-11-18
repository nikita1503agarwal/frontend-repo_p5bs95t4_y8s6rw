import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    title: 'Pază umană și control acces',
    bullets: [
      'Pază obiective comerciale și industriale',
      'Control acces personal și vizitatori',
      'Patrule mobile și ronduri digitale',
      'Planuri de securitate dedicate'
    ]
  },
  {
    title: 'Sisteme CCTV și analiză video',
    bullets: [
      'Proiectare și instalare sisteme supraveghere',
      'Analiză video inteligentă și detecție',
      'Monitorizare centralizată 24/7',
      'Mentenață și SLA garantat'
    ]
  },
  {
    title: 'Sisteme de alarmă și anti-efracție',
    bullets: [
      'Senzori certificați și centrale moderne',
      'Integrare cu dispeceratul și intervenție',
      'Alerte în timp real și rapoarte',
      'Testare periodică și audit'
    ]
  },
  {
    title: 'Detecție incendiu și siguranță',
    bullets: [
      'Proiectare și punere în funcțiune',
      'Întreținere conformă cu normele',
      'Instruire personal și proceduri',
      'Integrare cu sisteme existente'
    ]
  }
]

export default function Servicii() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Servicii</h1>
        <p className="mt-3 text-blue-100/90 max-w-2xl">Portofoliu complet de servicii de securitate, adaptat industriei tale.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-blue-100/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
