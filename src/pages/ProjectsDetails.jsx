import data from '../data/projects.json'
import { useParams } from 'react-router-dom'

const ActiveProject = () => {

  const { id } = useParams()
  const idNumber = parseInt(id, 10)

  const projects = data.find((project) => project.id === idNumber)
  if (projects === undefined) {
    return <div>404</div>
  }

  return (
    <div>
      <section key={projects.id} className="projects__details">
        <h2 className="projects__details__title">{projects.header}</h2>
        <img
          src={projects.img}
          alt={projects.header}
          className="projects__details__image"
        />
        <p className="projects__details__description">{projects.body}</p>
      </section>
    </div>
  )
}

export default ActiveProject
