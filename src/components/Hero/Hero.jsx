import './hero.scss'


const Hero = ({ title, text, picture, subtitle, subtitle2}) => {
  return (
    <div className="hero">
      <img className="hero__picture" src={picture} alt="Avatar" />
      <section className="hero__description">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__text">{text}</p>
        <p className="hero__subtitle">{subtitle}</p>
        <p className="hero__subtitle2">{subtitle2}</p>
      </section>
    </div>
  )
}

export default Hero
