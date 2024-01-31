import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { IoHomeOutline, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import ThemeSwitchButton from '../utils/ThemeSwitcherButton'

const NavLinkItem = ({ to, children, 'aria-label': ariaLabel }) => (
  <NavLink to={to} aria-label={ariaLabel}>
    {children}
  </NavLink>
)

NavLinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
}

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth) // Définit la largeur de la fenêtre du navigateur.

  // Fonction pour définir la largeur de la fenêtre du navigateur.
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    {
      to: '/',
      icon: <IoHomeOutline className="link-icon" size={30} />,
      name: 'accueil',
      textName: 'accueil',
      isExternal: false,
    },
    {
      to: 'https://www.linkedin.com',
      icon: <IoLogoLinkedin className="link-icon" size={30} />,
      name: 'linkedIn',
      textName: 'linkedIn',
      isExternal: true,
    },
    {
      to: 'https://github.com/ginx836',
      icon: <IoLogoGithub className="link-icon" size={30} />,
      name: 'github',
      textName: 'github',
      isExternal: true,
    },
  ]

  // Utilise la fonction windowWidth pour définir la largeur de la fenêtre du navigateur et afficher les icônes ou les noms des liens.
  return (
    <header className="header">
      <div className="header__logo">GD.</div>
      <div className="nav-wrapper">
        <ThemeSwitchButton />
        <nav className="header__nav">
          {navLinks.map((link, index) =>
            link.isExternal ? (
              <a
                key={index}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.textName}
              >
                {windowWidth <= 1024 ? link.icon : link.name}
              </a>
            ) : (
              <NavLinkItem key={index} to={link.to} aria-label={link.textName}>
                {windowWidth <= 1024 ? link.icon : link.name}
              </NavLinkItem>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
