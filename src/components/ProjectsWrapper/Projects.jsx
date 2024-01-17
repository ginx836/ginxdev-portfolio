import Carousel from '../utils/Carousel/Carousel'
import data from '../../data/projects.json'
import './projects.scss'

const Projects = () => {

  return (
    <div className="projects__wrapper">
      <h2 className="projects__title">Mes projets</h2>
      <Carousel data={data}/>
    </div>
  )
}

export default Projects
