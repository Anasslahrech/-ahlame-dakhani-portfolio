import { skills } from '../data.js'

export default function Skills() {
  return (
    <section id="competences">
      <div className="section-head">
        <span className="section-num">05</span>
        <h2>Compétences</h2>
      </div>
      <div className="skills-grid">
        {skills.map((g) => (
          <div className="skill-group" key={g.group}>
            <h3>{g.group}</h3>
            <div className="skill-tags">
              {g.tags.map((t) => (
                <span className="stack-pill" key={t.name}>
                  {t.icon && <i className={t.icon} aria-hidden="true" />}
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}