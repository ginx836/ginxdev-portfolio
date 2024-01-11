import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <p className="header__logo">GD</p>
        <nav className="header__nav">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/projects">Projets</NavLink>
          <NavLink to="/about">A Propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
