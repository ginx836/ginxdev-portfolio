import data from '../data/projects.json'
import { useParams } from 'react-router-dom'
import Button from '../components/utils/Button/Button'

import '../styles/pages/projectsDetails.scss'

const ActiveProject = () => {
  const { id } = useParams()
  const idNumber = parseInt(id, 10)

  const projects = data.find((project) => project.id === idNumber)
  if (projects === undefined) {
    return <div>404</div>
  }

  return (
    <>
      <section key={projects.id} className="projects-details">
        <h2 className="projects-details__title">{projects.header}</h2>
        {projects.pictures && (
        <div className="picture-container">
          {projects.pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`${projects.header} ${index}`}
              className="picture-container__img"
            />
          ))}
        </div>
        )}
        <div className="projects-details-body">
          <h3 className="projects-details-body__title">
            {projects.body_title}
          </h3>
          <hr />
          <p className="projects-details-body__description">
            {projects.description}
          </p>
        </div>
        <div className="projects-details__link">
          <Button
            buttonText="Lien vers Github"
            onClick={() => window.open(projects.link, '_blank')}
          />
          {projects.link2 && (
            <Button
              buttonText="Lien vers le site"
              onClick={() => window.open(projects.link2, '_blank')}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default ActiveProject
