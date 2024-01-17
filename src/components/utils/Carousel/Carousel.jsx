import './carousel.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Carousel = ({ data }) => {
  const [activeID, setActiveID] = useState(0)
  const [buttonHover, setButtonHover] = useState(false)

  const activeData = data[activeID]

  const buttonStyle = {
    color: buttonHover ? activeData.colour : '#ffffff',
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
      Plus
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

export default Carousel
