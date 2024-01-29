import { NavLink } from 'react-router-dom'
import HeroPicture from '../assets/Hero/hero-picture.svg'
import ProfilPicture from '../assets/profil-picture.webp'
import About from '../components/About/About'
import CardSlider from '../components/CardSlider/CardSlider'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Button from '../components/utils/Button/Button'
import SectionDivider from '../components/utils/SectionDivider'
import data from '../data/projects.json'
import '../styles/pages/home.scss'

const Home = () => {
  return (
    <>
      <Hero
        title="GINXDEV."
        text={
          <>
            Bonjour, je suis Cédric Bourquin, développeur web junior.
            <br />
            Mon objectif est de vous aider à réaliser vos projets web. <br />
          </>
        }
        subtitle={<>Design, develop & deploy</>}
        subtitle2={<>Keep moving forward</>}
        picture={HeroPicture}
      />
      <SectionDivider title="Mes projets" />
      <CardSlider data={data} />
      <div className="btn-projects-container">
        <NavLink to="/projects/0" onClick={() => window.scrollTo(0, 0)}>
          <Button buttonText="Voir tous les projets" />
        </NavLink>
      </div>
      <SectionDivider id="aboutme" title="A propos de moi" />
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
