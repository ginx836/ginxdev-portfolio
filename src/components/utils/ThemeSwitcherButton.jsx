import { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeContext } from '../utils/ThemeContext'

const ThemeSwitchButton = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  const handleClick = () => {
    toggleTheme()
  }

  return (
    <button className="theme-switcher" onClick={handleClick} aria-label='theme switcher'>
      {isDark ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeSwitchButton
