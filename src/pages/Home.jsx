import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Blog from '../components/Blog'
import WriteupsSection from '../components/WriteupsSection'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <WriteupsSection />
      <Contact />
    </main>
  )
}

export default Home