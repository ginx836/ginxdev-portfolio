import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const NavLinkItem = ({ to, closeMenu, children }) => (
  <NavLink to={to} onClick={closeMenu}>
    {children}
  </NavLink>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { to: '/', name: 'Accueil' },
    // { to: '/about', name: 'A Propos' },
    { to: '/contact', name: 'Contact' },
  ]

  return (
    <header className={`header ${isOpen ? 'open' : ''}`}>
      <div className={`header__wrapper ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className="header__logo" onClick={closeMenu}>
          GD
        </NavLink>
        <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <NavLinkItem key={index} to={link.to} closeMenu={closeMenu}>
              {link.name}
            </NavLinkItem>
          ))}
        </nav>
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>
    </header>
  )
}

export default Header
