import { profile } from '../data.js'
import photo from '../assets/ahlame.jpg'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker hero-in" style={{ '--d': '0s' }}>
            Développement Web Full Stack
          </p>
          <h1 className="hero-in" style={{ '--d': '0.08s' }}>{profile.name}</h1>
          <p className="hero-role hero-in" style={{ '--d': '0.16s' }}>{profile.role}</p>
          <p className="hero-pitch hero-in" style={{ '--d': '0.24s' }}>{profile.pitch}</p>
          <div className="hero-actions hero-in" style={{ '--d': '0.32s' }}>
            <a
              className="btn-primary"
              href={profile.gmailCompose}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuter d'une opportunité
            </a>
            <a className="btn-ghost" href="/cv-ahlame-dakhani.pdf" download>
              Télécharger le CV
            </a>
            <div className="hero-contact-list">
              <a href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
        <div className="hero-photo-frame hero-in" style={{ '--d': '0.1s' }}>
          <img src={photo} alt={profile.name} />
        </div>
      </div>
    </section>
  )
}
