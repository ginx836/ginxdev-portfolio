import PropTypes from 'prop-types'

const RenderPictures = ({ project }) => {
  if (!project.pictures || project.pictures.length === 0) return null

  return (
    <div className="picture-container">
      <div className="picture-row row-0">
        <img
          src={project.pictures[0]}
          alt={`${project.header} 0`}
          className="picture-img img-full"
        />
      </div>
      {project.pictures.length > 1 && (
        <div className="picture-row row-1">
          {project.pictures.slice(1, 3).map((picture, index) => (
            <img
              src={picture}
              alt={`${project.header} ${index + 1}`}
              className={`picture-img img-half ${index === 1 ? 'third-img' : ''}`}
              key={index + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

RenderPictures.propTypes = {
  project: PropTypes.shape({
    header: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default RenderPictures
