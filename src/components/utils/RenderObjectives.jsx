import PropTypes from 'prop-types'

const renderObjectives = ({project}) => {
  if (!project.objectifs || project.objectifs.length === 0) return null

  return (
    <div className="objectives-container">
      <h2 className="projects-subtitle">Objectifs</h2>
      <hr />
      <ul>
        {project.objectifs.map((objectif, index) => (
          <li key={index}>{objectif}</li>
        ))}
      </ul>
    </div>
  )
}

renderObjectives.propTypes = {
  project: PropTypes.shape({
    objectifs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default renderObjectives