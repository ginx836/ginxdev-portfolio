import PropTypes from 'prop-types'
import './about.scss'

const About = ({ text, img }) => {
  return (
    <section className="about__wrapper">
      <div className="about__content">
        <p className="about__text">{text}</p>
        <img className="about__img" src={img} alt="Ma photo de profil" />
      </div>
    </section>
  )
}

About.propTypes = {
  text: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
}

export default About
