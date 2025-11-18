import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Acasă' },
  { to: '/servicii', label: 'Servicii' },
  { to: '/solutii', label: 'Soluții' },
  { to: '/cariere', label: 'Cariere' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white' : 'text-blue-100/80 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://focussecurity.ro/wp-content/uploads/2022/02/cropped-focus-security-white.png"
              alt="Focus Security"
              className="h-8 w-auto"
            />
            <span className="sr-only">Focus Security</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClasses} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-white/5 transition"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'text-white bg-white/5' : 'text-blue-100/80 hover:text-white hover:bg-white/5'
                    }`
                  }
                  onClick={() => setOpen(false)}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
