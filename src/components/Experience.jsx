import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-head">
        <span className="section-num">02</span>
        <h2>Expérience professionnelle</h2>
      </div>
      <div className="timeline">
        {experience.map((job) => (
          <div className="tl-item" key={job.role + job.date}>
            <span className="tl-date">{job.date}</span>
            <h3 className="tl-role">{job.role}</h3>
            <p className="tl-org">{job.org}</p>
            <ul>
              {job.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
