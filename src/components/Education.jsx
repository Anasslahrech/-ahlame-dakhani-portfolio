import { education } from '../data.js'

export default function Education() {
  return (
    <section id="formation">
      <div className="section-head">
        <span className="section-num">06</span>
        <h2>Formation</h2>
      </div>
      <div>
        {education.map((e) => (
          <div className="edu-item" key={e.title}>
            <span className="edu-year">{e.year}</span>
            <div>
              <h3 className="edu-title">{e.title}</h3>
              <p className="edu-org">{e.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
