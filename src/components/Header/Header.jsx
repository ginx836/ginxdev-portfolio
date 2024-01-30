import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { IoHomeOutline, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
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
              <NavLinkItem key={index} to={link.to}>
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
