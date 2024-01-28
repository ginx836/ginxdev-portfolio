import PropTypes from 'prop-types'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import './cardslider.scss'

const CardSlider = ({ data }) => {
  const slides = data

  const slideLeft = () => {
    const slider = document.getElementById('slider')
    const scrollValue = window.innerWidth <= 425 ? 300 : 425
    slider.scrollLeft -= scrollValue
  }

  const slideRight = () => {
    const slider = document.getElementById('slider')
    const scrollValue = window.innerWidth <= 425 ? 300 : 425
    slider.scrollLeft += scrollValue
  }

  return (
    <section id="main-slider-container">
      <MdChevronLeft
        size={30}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">
        {slides.map((data) => (
          <NavLink
            key={data.id}
            to={`/projects/${data.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="slider-card">
              <img
                className="card-img"
                src={data.img}
                alt={`image du site ${data.header}`}
              />
              <div className="slider-content">
                <h3 className="slider-content-header">{data.header}</h3>
                <p className="slider-content-info">{data.body_title}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <MdChevronRight
        size={30}
        className="slider-icon right"
        onClick={slideRight}
      />
    </section>
  )
}

CardSlider.propTypes = {
  data: PropTypes.array.isRequired,
}

export default CardSlider
