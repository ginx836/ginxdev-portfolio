import { TECHNOLOGIES } from '../utils/constants'
import PropTypes from 'prop-types'

const RenderTechnologies = ({ technologies, size }) => {
  return (
    <div className="technologies-container">
      <ul>
        {technologies &&
          technologies.length > 0 &&
          technologies.map((technology, index) => {
            const TechnologyComponent = TECHNOLOGIES[technology]
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
