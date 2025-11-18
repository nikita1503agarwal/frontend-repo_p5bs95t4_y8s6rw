import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const jobs = [
  {
    role: 'Agent securitate',
    location: 'București',
    type: 'Full-time',
    perks: ['Training inițial', 'Echipament asigurat', 'Program în ture']
  },
  {
    role: 'Tehnician sisteme securitate',
    location: 'Cluj-Napoca',
    type: 'Full-time',
    perks: ['Mașină de serviciu', 'Certificări plătite', 'Bonus proiect']
  }
]

export default function Cariere() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Cariere</h1>
        <p className="mt-3 text-blue-100/90 max-w-2xl">Alătură-te unei echipe în creștere, cu proiecte complexe și tehnologii moderne.</p>

        <div className="mt-10 grid gap-6">
          {jobs.map((j) => (
            <div key={j.role} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{j.role}</h3>
                  <p className="text-blue-100/80 text-sm">{j.location} • {j.type}</p>
                </div>
                <a href="#aplica" className="inline-flex items-center px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition">Aplică acum</a>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-blue-100/80">
                {j.perks.map((p) => (
                  <li key={p} className="px-3 py-1 rounded-full bg-white/10 border border-white/10">{p}</li>
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
