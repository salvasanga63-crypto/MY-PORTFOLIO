import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ['About', 'Skills', 'Projects', 'Research', 'Journey', 'GitHub', 'Contact']

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          SALVATORY<span className="brand-dot">.</span>
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          {links.map((link) => (
            <a
              key={link}
              href={link === 'GitHub' ? '#github' : `#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-button theme-button"
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
