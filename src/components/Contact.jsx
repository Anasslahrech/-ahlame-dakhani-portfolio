import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-head">
        <span className="section-num">07</span>
        <h2>Contact</h2>
      </div>
      <p className="contact-lead">
        Disponible pour un poste de développeuse Full Stack — discutons de votre projet.
      </p>
      <dl className="contact-rows">
        <div className="contact-row">
          <dt>Email</dt>
          <dd>
            <a href={profile.gmailCompose} target="_blank" rel="noopener noreferrer">
              {profile.email}
            </a>
          </dd>
        </div>
        <div className="contact-row">
          <dt>Téléphone</dt>
          <dd>
            <a href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a>
          </dd>
        </div>
        <div className="contact-row">
          <dt>Localisation</dt>
          <dd>{profile.location}</dd>
        </div>
      </dl>
    </section>
  )
}
