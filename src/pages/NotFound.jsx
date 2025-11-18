import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold">404</h1>
          <p className="mt-2 text-blue-100/80">Pagina nu a fost găsită.</p>
          <a href="/" className="mt-6 inline-flex items-center px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition">Înapoi acasă</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
