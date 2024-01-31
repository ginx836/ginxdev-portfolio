import PropTypes from 'prop-types'
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
