import { LinkedinPlain, GithubOriginal } from 'devicons-react'

import PropTypes from 'prop-types'
import './hero.scss'

const Hero = ({ title, text, picture, subtitle, subtitle2 }) => {
  return (
    <div className="hero">
      <img className="hero__picture" src={picture} alt="Avatar" />
      <section className="hero__description">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__text">{text}</p>
        <p className="hero__subtitle">{subtitle}</p>
        <p className="hero__subtitle2">{subtitle2}</p>
        <div className="hero__social">
          <a
            href="https://www.linkedin.com/in/cedric-bourquin-092a8a250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinPlain color="white" size={60} />
          </a>
          <a
            href="https://github.com/ginx836"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOriginal style={{ filter: 'invert(100%)' }} size={60} />
          </a>
        </div>
      </section>
    </div>
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
