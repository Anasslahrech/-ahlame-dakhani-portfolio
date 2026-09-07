import { about } from '../data.js'

export default function About() {
  return (
    <section id="about">
      <div className="section-head">
        <span className="section-num">01</span>
        <h2>Profil</h2>
      </div>
      <div className="about-body">
        <div>
          {about.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <dl className="about-facts">
          {about.facts.map((f) => (
            <div className="about-fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
