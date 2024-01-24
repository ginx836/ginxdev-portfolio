import { useParams } from 'react-router-dom'
import Button from '../components/utils/Button/Button'
import RenderObjectives from '../components/utils/RenderObjectives.jsx'
import RenderPictures from '../components/utils/RenderPictures.jsx'
import RenderTechnologies from '../components/utils/RenderTechnologies.jsx'
import data from '../data/projects.json'

import '../styles/pages/projectsDetails.scss'

const ActiveProject = () => {
  const { id } = useParams()
  const idNumber = parseInt(id, 10)

  const project = data.find((project) => project.id === idNumber)
  const projectIndex = data.findIndex((project) => project.id === idNumber)

  const prevProject = projectIndex > 0 ? data[projectIndex - 1] : null
  const nextProject =
    projectIndex < data.length - 1 ? data[projectIndex + 1] : null

  if (!project) {
    return <div>404</div>
  }

  return (
    <section key={project.id} className="projects">
      <RenderPictures project={project} />
      <div className="projects-body">
        <h2 className="projects-header">{project.header}</h2>
        <h3 className="projects-subtitle">{project.body_title}</h3>
        <p className="projects-description">{project.description}</p>
        <RenderObjectives project={project} />
        <RenderTechnologies technologies={project.technologies} />
        <div className="projects-link">
          <Button
            buttonText="Lien vers Github"
            onClick={() => window.open(project.link, '_blank')}
          />
          {project.link2 && (
            <Button
              buttonText="Lien vers le site"
              onClick={() => window.open(project.link2, '_blank')}
            />
          )}
        </div>
      <div className="projects-navigation">
        {prevProject && (
          <Button
            buttonText="Précédent"
            onClick={() => window.open(`/projects/${prevProject.id}`, '_self')}
          />
        )}
        {nextProject && (
          <Button
            buttonText="Suivant"
            onClick={() => window.open(`/projects/${nextProject.id}`, '_self')}
          />
        )}
      </div>
      </div>
    </section>
  )
}

export default ActiveProject
