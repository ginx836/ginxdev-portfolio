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
            Bonjour, je suis Cédric Bourquin, développeur web orienté{' '}
            <Front-End></Front-End>. <br /> Mon objectif est de vous aider à
            réaliser vos projets web.
            <br />
          </>
        }
        subtitle={<>Design, develop & deploy</>}
        subtitle2={<>Keep moving forward</>}
        picture={HeroPicture}
      />
      <Projects />
      <About
        title="About me"
        text={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            laboriosam dolorem incidunt nulla culpa pariatur provident,
            obcaecati nobis vel quia ducimus quas ea ratione, eos fugiat? Quae
            sit eius rerum itaque eum, explicabo omnis quasi ab autem ipsum
            accusamus vel vero sed harum incidunt quidem asperiores quaerat, in
            temporibus recusandae. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eaque, laboriosam dolorem incidunt
            nulla culpa pariatur provident, obcaecati nobis vel quia ducimus
            quas ea ratione, eos fugiat? Quae sit eius rerum itaque eum,
            explicabo omnis quasi ab autem ipsum accusamus vel vero sed harum
            incidunt quidem asperiores quaerat, in temporibus recusandae.
            Quisquam, quos.
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
