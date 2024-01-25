import PropTypes from 'prop-types'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './carousel.scss'

const Carousel = ({ data }) => {
  const [activeID, setActiveID] = useState(0)
  const [buttonHover, setButtonHover] = useState(false)

  const activeData = data[activeID]

  const buttonStyle = {
    color: buttonHover ? activeData.colour : '#000',
  }

  return (
    <section
      className="wrapper"
      style={{ backgroundImage: `url('${activeData.img}')` }}
    >
      <Selectors data={data} activeID={activeID} changeActive={setActiveID} />
      <Panel
        data={activeData}
        panelStyle={{ backgroundColor: activeData.colour }}
        buttonStyle={buttonStyle}
        toggleButtonColour={() => setButtonHover(!buttonHover)}
      />
    </section>
  )
}

const Panel = ({ data, panelStyle, buttonStyle, toggleButtonColour }) => (
  <aside className="panel" style={panelStyle}>
    <h2 className="panel-header">{data.header}</h2>
    <p className="panel-info">{data.body_title}</p>
    <NavLink to={`/projects/${data.id}`}>
      <button
        className="panel-button"
        style={buttonStyle}
        onMouseEnter={toggleButtonColour}
        onMouseLeave={toggleButtonColour}
      >
        En voir d&apos;avantage
      </button>
    </NavLink>
  </aside>
)

const Selectors = ({ data, activeID, changeActive }) => (
  <div className="selectors">
    {data.map((item) => (
      <Selector
        key={item.id}
        id={item.id}
        handleClick={() => changeActive(item.id)}
        isActive={activeID === item.id}
      />
    ))}
  </div>
)

const Selector = ({ handleClick, isActive }) => (
  <div
    className={`selector ${isActive ? 'active' : ''}`}
    onClick={handleClick}
  ></div>
)

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      colour: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      body_title: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

Panel.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    body_title: PropTypes.string.isRequired,
  }).isRequired,
  panelStyle: PropTypes.object.isRequired,
  buttonStyle: PropTypes.object.isRequired,
  toggleButtonColour: PropTypes.func.isRequired,
}

Selectors.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  activeID: PropTypes.number.isRequired,
  changeActive: PropTypes.func.isRequired,
}

Selector.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default Carousel
