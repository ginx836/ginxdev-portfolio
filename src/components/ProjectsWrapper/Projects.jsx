import data from '../../data/projects.json'
import Carousel from '../utils/Carousel/Carousel'
import './projects.scss'

const Projects = () => {
  return (
    <div className="projects__wrapper">
      <h2 className="project-header">Mes projets</h2>
      <Carousel data={data} />
    </div>
  )
}

export default Projects
