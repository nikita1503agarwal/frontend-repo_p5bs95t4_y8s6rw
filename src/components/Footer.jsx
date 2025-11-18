export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-blue-100/80">
          <div className="md:col-span-2">
            <img
              src="https://focussecurity.ro/wp-content/uploads/2022/02/cropped-focus-security-white.png"
              alt="Focus Security"
              className="h-8 w-auto mb-4"
            />
            <p className="max-w-md">Soluții de securitate integrate pentru companii, sedii industriale și retail. Monitorizare 24/7, intervenție rapidă și echipe certificate.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Linkuri utile</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/servicii" className="hover:text-white">Servicii</a></li>
              <li><a href="/solutii" className="hover:text-white">Soluții</a></li>
              <li><a href="/cariere" className="hover:text-white">Cariere</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: office@focussecurity.ro</li>
              <li>Telefon: +40 000 000 000</li>
              <li>Program: L-V 09:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-blue-200/60">© {new Date().getFullYear()} Focus Security. Toate drepturile rezervate.</div>
      </div>
    </footer>
  )
}
