import PropTypes from 'prop-types'

const RenderPictures = ({ project }) => {
  if (!project.pictures || project.pictures.length === 0) return null

  const pictureRows = []
  let rowIndex = 0

  // Render the first row with a single image
  pictureRows.push(
    <div className="picture-row" key={rowIndex++}>
      <img
        src={project.pictures[0]}
        alt={`${project.header} 0`}
        className="picture-img img-full"
      />
    </div>,
  )

  // Render subsequent rows with 1 or 2 images
  for (let i = 1; i < project.pictures.length; i += 2) {
    const pictureRow = (
      <div className="picture-row" key={rowIndex++}>
        <img
          src={project.pictures[i]}
          alt={`${project.header} ${i}`}
          className="picture-img img-half"
        />
        {i + 1 < project.pictures.length && (
          <img
            src={project.pictures[i + 1]}
            alt={`${project.header} ${i + 1}`}
            className="picture-img img-half"
          />
        )}
      </div>
    )
    pictureRows.push(pictureRow)
  }

  return <div className="picture-container">{pictureRows}</div>
}

RenderPictures.propTypes = {
  project: PropTypes.shape({
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    header: PropTypes.string.isRequired,
  }).isRequired,
}

export default RenderPictures
