import { project } from '../data.js'

export default function Project() {
  return (
    <section id="projet">
      <div className="section-head">
        <span className="section-num">03</span>
        <h2>Projet de fin d'études</h2>
      </div>
      <div className="project-card">
        <div className="project-top">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-tag">{project.tag}</span>
        </div>
        <p className="project-sub">{project.sub}</p>
        <ul>
          {project.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
        <div className="project-stack">
          {project.stack.map((s) => (
            <span className="stack-pill" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
