import PropTypes from 'prop-types'
import './about.scss'

const About = ({ text, img, quote }) => {
  return (
    <section className="about__wrapper">
      <div className="about__content">
        <p className="about__text">{text}</p>
        <img className="about__img" src={img} alt="Ma photo de profil" />
      </div>
        <p className="about__quote">{quote}</p>
    </section>
  )
}

About.propTypes = {
  text: PropTypes.object.isRequired,
  quote: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
}

export default About
