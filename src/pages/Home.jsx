import Hero from '../components/Hero/Hero'
import Projects from '../components/ProjectsWrapper/Projects'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import HeroPicture from '../assets/Hero/hero-picture.svg'
import ProfilPicture from '../assets/profil-picture.webp'

import '../styles/pages/home.scss'

const Home = () => {
  return (
    <>
      <Hero
        title="GINXDEV."
        text={
          <>
            Bonjour, je suis Cédric Bourquin, développeur web orienté Front-End. <br />
            Mon objectif est de vous aider à réaliser vos projets web. <br />
          </>
        }
        subtitle={<>Design, develop & deploy</>}
        subtitle2={<>Keep moving forward</>}
        picture={HeroPicture}
      />
      <Projects />
      <About
        title="A propos de moi"
        text={
          <>
            Né au début de l&apos;ère des premiers ordinateurs personnels,
            j&apos;ai grandi avec la technologie et cette passion ne m&apos;a
            jamais quitté.
            <br /> &quot;Tech Enthusiast&quot; depuis toujours, j&apos;ai décidé
            de me lancer dans le développement web en 2023 après 21 ans de
            commerce au service de mes clients.
            <br /> Grâce à OpenClassrooms j&apos;ai pu mettre mon 1er pied à
            l&apos;étrier.
            <br />
            <br /> Mon objectif : Continuer à apprendre et de mettre mes
            compétences au service de vos projets.
          </>
        }
        img={ProfilPicture}
        img_alt="Cédric Bourquin"
      />
      <Footer />
    </>
  )
}

export default Home
