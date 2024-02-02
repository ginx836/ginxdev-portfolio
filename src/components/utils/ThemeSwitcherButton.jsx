import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeContext } from '../utils/ThemeContext'
import { useContext } from 'react'

const ThemeSwitchButton = () => {
  const { theme, toggleThemeMode } = useContext(ThemeContext)

  const handleClick = () => {
    toggleThemeMode()
  }

  return (
    <button
      className="theme-switcher"
      onClick={handleClick}
      aria-label="theme switcher"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeSwitchButton
