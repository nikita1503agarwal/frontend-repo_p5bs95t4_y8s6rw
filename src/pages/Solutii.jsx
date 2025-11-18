import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const solutions = [
  {
    title: 'Retail & Mall',
    text: 'Prevenție pierderi, control acces personal și vizitatori, monitorizare zone critice, rapoarte și analize.'
  },
  {
    title: 'Clădiri de birouri',
    text: 'Sisteme integrate: control acces, CCTV, alarmă și detecție incendiu, management vizitatori.'
  },
  {
    title: 'Industrial & Logistică',
    text: 'Perimetru securizat, patrule mobile, supraveghere perimetrală, automatizări și control trafic.'
  },
  {
    title: 'Rezidențial premium',
    text: 'Soluții discrete, securitate perimetrală, supraveghere inteligentă și intervenție rapidă.'
  },
]

export default function Solutii() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Soluții</h1>
        <p className="mt-3 text-blue-100/90 max-w-2xl">Pachete complete adaptate industriei tale, scalabile și integrate.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-blue-100/80">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
