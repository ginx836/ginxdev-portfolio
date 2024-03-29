/**
 * Component for a card slider.
 *
 * @component
 * @param {Object[]} data - The data for the slider.
 * @param {number} data[].id - The ID of the card.
 * @param {string} data[].img - The image URL for the card.
 * @param {string} data[].header - The header text for the card.
 * @param {string} data[].body_title - The body title for the card.
 * @returns {JSX.Element} The card slider component.
 */

import PropTypes from 'prop-types'
import { useRef } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import './cardslider.scss'

const CardSlider = ({ data }) => {

  const slides = data
  
  const sliderRef = useRef(null)

  const slideLeft = () => {
    const scrollValue = window.innerWidth <= 425 ? 300 : 420
    sliderRef.current.scrollLeft -= scrollValue
  }

  const slideRight = () => {
    const scrollValue = window.innerWidth <= 425 ? 300 : 420
    sliderRef.current.scrollLeft += scrollValue
  }

  return (
    <section id="main-slider-container">
      <MdChevronLeft
        size={30}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider" ref={sliderRef}>
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
