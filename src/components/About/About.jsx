import PropTypes from 'prop-types'
import './about.scss'

const About = ({title, text, img}) => {
  return (
    <section className="about__wrapper">
      <h2 className='about__title'>{title}</h2>
      <div className="about__content">
        <p className="about__text">{text}
          </p>
        <img className="about__img" src={img} alt="Ma photo de profil" />
    </div>
    </section>
  )
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
}

export default About
