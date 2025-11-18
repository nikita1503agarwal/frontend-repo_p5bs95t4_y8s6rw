import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Eroare')
      setStatus({ ok: true, message: 'Mulțumim! Te contactăm în curând.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-3 text-blue-100/90 max-w-2xl">Trimite-ne detalii despre proiectul tău și revenim rapid cu o ofertă.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="block text-sm text-blue-100/80 mb-1">Nume</label>
              <input name="nume" required className="w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Numele tău" />
            </div>
            <div>
              <label className="block text-sm text-blue-100/80 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="exemplu@domeniu.ro" />
            </div>
            <div>
              <label className="block text-sm text-blue-100/80 mb-1">Telefon</label>
              <input name="telefon" className="w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="07xx xxx xxx" />
            </div>
            <div>
              <label className="block text-sm text-blue-100/80 mb-1">Mesaj</label>
              <textarea name="mesaj" rows="5" required className="w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Spune-ne pe scurt ce ai nevoie" />
            </div>
            <button type="submit" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition">Trimite</button>

            {status && (
              <div className={`text-sm p-3 rounded-lg ${status.ok ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'}`}>
                {status.message}
              </div>
            )}
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Date de contact</h3>
            <ul className="mt-4 space-y-2 text-blue-100/80">
              <li>Email: office@focussecurity.ro</li>
              <li>Telefon: +40 000 000 000</li>
              <li>Adresă: București, România</li>
            </ul>

            <div className="mt-6 aspect-video rounded-lg overflow-hidden border border-white/10">
              <iframe
                title="Harta"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.802255557739!2d26.102538015535965!3d44.42676797910201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3b8b8b8b8b%3A0x0!2sBucure%C8%99ti!5e0!3m2!1sro!2sro!4v1610000000000"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
