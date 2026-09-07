import Nav from './components/Nav.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Project from './components/Project.jsx'
import VideoProjects from './components/VideoProjects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="wrap">
        <Hero />
        <About />
        <Experience />
        <Project />
        <VideoProjects />
        <Skills />
        <Education />
      </main>
      <div className="wrap">
        <Contact />
      </div>
      <footer className="site-footer">
        © {new Date().getFullYear()} Ahlame Dakhani
      </footer>
      <BackToTop />
    </>
  )
}
