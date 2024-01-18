import Hero from '../components/Hero/Hero'
import Projects from '../components/ProjectsWrapper/Projects'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

import Avatar from '../assets/Hero/avatar.jpeg'
import ProfilPicture from '../assets/profil-picture.webp'

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
      <About 
        title="About me"
        text={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, laboriosam dolorem incidunt nulla culpa pariatur provident, obcaecati nobis vel quia ducimus quas ea ratione, eos fugiat? Quae sit eius rerum itaque eum, explicabo omnis quasi ab autem ipsum accusamus vel vero sed harum incidunt quidem asperiores quaerat, in temporibus recusandae. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, laboriosam dolorem incidunt nulla culpa pariatur provident, obcaecati nobis vel quia ducimus quas ea ratione, eos fugiat? Quae sit eius rerum itaque eum, explicabo omnis quasi ab autem ipsum accusamus vel vero sed harum incidunt quidem asperiores quaerat, in temporibus recusandae. Quisquam, quos.
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
