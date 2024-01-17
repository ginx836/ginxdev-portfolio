import Hero from '../components/Hero/Hero'
import Projects from '../components/ProjectsWrapper/Projects'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

import Avatar from '../assets/Hero/avatar.jpeg'

import '../styles/pages/home.scss'

const Home = () => {
  return (
    <>
      <Hero
        title="Welcome to GinxDev"
        text={
          <>
            Hi, my name is Cédric Bourquin and I am a web developer. <br />I am
            currently learning React and I am looking for my first job as a Frontend
            Developer.
          </>
        }
        picture={Avatar}
      />
      <Projects />
      <About />
      <Footer />
    </>
  )
}

export default Home
