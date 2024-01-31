// Desc: This file is used to render the stack icons in the project page.
//       It is used in the ProjectsDetails.jsx file.


import { TECHNOLOGIES } from '../utils/constants'
import PropTypes from 'prop-types'

const RenderTechnologies = ({ technologies, size }) => {
  return (
    <div className="technologies-container">
      <ul>
        {technologies &&
          technologies.length > 0 &&
          technologies.map((technology, index) => {
            const TechnologyComponent = TECHNOLOGIES[technology] // Get the component from the TECHNOLOGIES object.
            return (
              <li key={index}>
                <TechnologyComponent size={size} />
              </li>
            )
          })}
      </ul>
    </div>
  )
}

RenderTechnologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number.isRequired,
}

export default RenderTechnologies
