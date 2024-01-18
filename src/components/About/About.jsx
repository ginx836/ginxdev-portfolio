import './about.scss'

const About = ({title, text, img, img_alt}) => {
  return (
    <section className="about__wrapper">
      <h2 className='about__title'>{title}</h2>
      <div className="about__content">
        <p className="about__text">{text}
          </p>
        <img className="about__img" src={img} alt="img_alt" />
    </div>
    </section>
  )
}

export default About
