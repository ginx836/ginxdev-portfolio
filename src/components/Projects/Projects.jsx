import Carousel from '../utils/Carousel/Carousel'
import './projects.scss'

const Projects = () => {
  const data = [
    {
      id: 0,
      header: 'Projet 1',
      body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
      colour: '#242846',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc1.jpg',
    },
    {
      id: 1,
      header: 'Projet 2',
      body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
      colour: '#ba9077',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc2.jpg',
    },
    {
      id: 2,
      header: 'Proejt 3',
      body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
      colour: '#1ABC9C',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc3.jpg',
    },
    {
      id: 3,
      header: 'Projet 4',
      body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
      colour: '#C0392B',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg',
    },
    {
      id: 4,
      header: 'Projet 5',
      body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
      colour: '#513B56',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg',
    },
  ]

  return (
    <div className="projects__wrapper">
      <h2 className="projects__title">Mes projets</h2>
      <Carousel data={data} />
    </div>
  )
}

export default Projects
