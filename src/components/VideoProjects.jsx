import { useState } from 'react'
import { videoProjects } from '../data.js'

function DemoVideo({ video, poster, title }) {
  const [missing, setMissing] = useState(false)

  if (missing) {
    return (
      <div className="demo-video-frame demo-video-empty">
        <span className="demo-video-empty-icon">▶</span>
        <span>Vidéo à venir</span>
      </div>
    )
  }

  return (
    <div className="demo-video-frame">
      <video
        controls
        preload="none"
        poster={poster}
        onError={() => setMissing(true)}
        aria-label={`Démonstration vidéo — ${title}`}
      >
        <source src={video} type="video/mp4" />
        Ton navigateur ne supporte pas la lecture vidéo.
      </video>
    </div>
  )
}

export default function VideoProjects() {
  return (
    <section id="demos">
      <div className="section-head">
        <span className="section-num">04</span>
        <h2>Projets en vidéo</h2>
      </div>
      <div className="demos-grid">
        {videoProjects.map((v) => (
          <div className="demo-card" key={v.title}>
            <DemoVideo video={v.video} poster={v.poster} title={v.title} />
            <h3 className="demo-title">{v.title}</h3>
            <p className="demo-sub">{v.sub}</p>
            <div className="project-stack">
              {v.stack.map((s) => (
                <span className="stack-pill" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
