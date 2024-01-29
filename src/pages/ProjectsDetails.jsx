import {
  FaCircleChevronLeft,
  FaCircleChevronRight,
} from 'react-icons/fa6'
import { FaHome } from 'react-icons/fa'
import { NavLink, Navigate, useParams } from 'react-router-dom'
import Button from '../components/utils/Button/Button'
import RenderObjectives from '../components/utils/RenderObjectives.jsx'
import RenderPictures from '../components/utils/RenderPictures.jsx'
import RenderTechnologies from '../components/utils/RenderTechnologies.jsx'
import data from '../data/projects.json'

import '../styles/pages/projectsdetails.scss'

const ActiveProject = () => {
  const { id } = useParams()
  const idNumber = parseInt(id, 10)

  const project = data.find((project) => project.id === idNumber)
  const projectIndex = data.findIndex((project) => project.id === idNumber)

  const prevProject = projectIndex > 0 ? data[projectIndex - 1] : null
  const nextProject =
    projectIndex < data.length - 1 ? data[projectIndex + 1] : null

  if (!project) {
    return <Navigate to="/404" />
  }
  return (
    <section key={project.id} className="projects">
      <RenderPictures project={project} />

      <div className="projects-body">
        <h2 className="projects-header">{project.header}</h2>
        <h3 className="projects-subtitle">{project.body_title}</h3>
        <p className="projects-description">{project.description}</p>

        <RenderObjectives project={project} />
        <RenderTechnologies technologies={project.technologies} size={50} />

        <div className="projects-link">
          {prevProject && (
            <NavLink
              to={`/projects/${prevProject.id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <FaCircleChevronLeft className="link-icon" size={40} />
            </NavLink>
          )}

          <Button
            className="LinkButton"
            buttonText="Github"
            href={project.link}
          />

          {project.link2 && <Button buttonText="site" href={project.link2} />}

          {nextProject ? (
            <NavLink
              to={`/projects/${nextProject.id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <FaCircleChevronRight className="link-icon" size={40} />
            </NavLink>
          ) : (
            <NavLink
              to="/"
              onClick={() => window.scrollTo(0, 0)}
            >
              <FaHome className="link-icon" size={40} />
            </NavLink>
          )}
        </div>
      </div>
    </section>
  )
}

export default ActiveProject
