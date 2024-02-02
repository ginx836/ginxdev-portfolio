import { NavLink } from 'react-router-dom'
import HeroPicture from '../assets/Hero/hero-picture.svg'
import ProfilPicture from '../assets/profil-picture.webp'
import About from '../components/About/About'
import CardSlider from '../components/CardSlider/CardSlider'
import Contact from '../components/Contact/Contact'
import Hero from '../components/Hero/Hero'
import Button from '../components/utils/Button/Button'
import SectionDivider from '../components/utils/SectionDivider'
import Skills from '../components/Skills/Skills'
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
      <SectionDivider title="Réalisations" />
      <CardSlider data={data} />
      <div className="btn-projects-container">
        <NavLink to="/projects/0" onClick={() => window.scrollTo(0, 0)}>
          <Button buttonText="Voir tous les projets" />
        </NavLink>
      </div>
      <SectionDivider title="Skills" />
      <Skills />
      <SectionDivider title="A propos de moi" />
      <About
        title="A propos de moi"
        text={
          <>
            &quot;Tech Enthusiast&quot;, né au début des années 80, j&apos;ai
            grandi avec l&apos;informatique et le numérique.
            <br />
            Parce qu&apos;il n&apos;est jamais trop tard pour apprendre et se
            lancer j&apos;ai décidé de faire de ma passion mon métier après 21
            ans de commerce au service de mes clients.
            <br /> Grâce à OpenClassrooms j&apos;ai pu mettre mon 1er pied à
            l&apos;étrier.
            <br />
            <br /> Mon objectif : Continuer à apprendre et mettre mes
            compétences au service de vos projets.
          </>
        }
        quote={
          <>
            &quot;La seule façon de faire du bon travail est d&apos;aimer ce
            que vous faites&quot; - Steve Jobs
          </>
        }
        img={ProfilPicture}
        img_alt="Cédric Bourquin"
      />
      <SectionDivider id="contact" title="Contactez-moi" />
      <Contact />
    </>
  )
}

export default Home
