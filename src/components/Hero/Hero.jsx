import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'

import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './hero.scss'

const Hero = ({ title, text, picture, subtitle, subtitle2 }) => {
  return (
    <section className="hero">
      <img className="hero__picture" src={picture} alt="Avatar" />
      <div className="hero__description">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__text">{text}</p>
        <p className="hero__subtitle">{subtitle}</p>
        <p className="hero__subtitle2">{subtitle2}</p>
        <div className="hero__social">
          <a
            href="https://www.linkedin.com/in/cedric-bourquin-092a8a250/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin className="link-icon" size={60} />
          </a>
          <a
            href="https://github.com/ginx836"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <IoLogoGithub className="link-icon" size={60} />
          </a>
          <NavLink to="/contact">
            <IoMail className="link-icon" size={60} />
          </NavLink>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  picture: PropTypes.string.isRequired,
  subtitle: PropTypes.object.isRequired,
  subtitle2: PropTypes.object.isRequired,
}

export default Hero
