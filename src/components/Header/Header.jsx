import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import ThemeSwitchButton from '../utils/ThemeSwitcherButton'

const NavLinkItem = ({ to, children }) => <NavLink to={to}>{children}</NavLink>

NavLinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { to: '/', name: 'Accueil', isExternal: false },
    { to: '/contact', name: 'Contact', isExternal: false },
    {
      to: 'https://www.linkedin.com',
      name:
        windowWidth <= 1024 ? (
          <IoLogoLinkedin className="link-icon" size={30} />
        ) : (
          'LinkedIn'
        ),
      textName: 'LinkedIn',
      isExternal: true,
    },
    {
      to: 'https://github.com/ginx836',
      name:
        windowWidth <= 1024 ? (
          <IoLogoGithub className="link-icon" size={30} />
        ) : (
          'Github'
        ),
      textName: 'Github',
      isExternal: true,
    },
  ]

  return (
    <header className="header">
      <div className="header__wrapper">
          <div className="header__logo">
            GD.
            <ThemeSwitchButton />
          </div>
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
                {link.name}
              </a>
            ) : (
              <NavLinkItem key={index} to={link.to}>
                {link.name}
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
