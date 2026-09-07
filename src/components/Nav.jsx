import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = [
  { href: '#about', label: 'Profil' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projet', label: 'Projet' },
  { href: '#demos', label: 'Vidéos' },
  { href: '#competences', label: 'Compétences' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-mark" onClick={() => setOpen(false)}>
          Ahlame<span>.</span>Dakhani
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={active === l.href ? 'is-active' : ''}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="nav-cta nav-cta-desktop"
          href={profile.gmailCompose}
          target="_blank"
          rel="noopener noreferrer"
        >
          Me contacter
        </a>
        <button
          className={`nav-burger${open ? ' is-open' : ''}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile${open ? ' is-open' : ''}`}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="nav-cta"
          href={profile.gmailCompose}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Me contacter
        </a>
      </div>
    </header>
  )
}
