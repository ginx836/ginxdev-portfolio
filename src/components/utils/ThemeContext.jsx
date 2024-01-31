import PropTypes from 'prop-types'
import { createContext, useCallback, useEffect, useState } from 'react'

// Creating a new context for theme
export const ThemeContext = createContext()

// Helper function to get the computed style value and trim it
const getComputedStyleTrim = (property) =>
  getComputedStyle(document.documentElement).getPropertyValue(property).trim()

// Creating a ThemeProvider component
const ThemeProvider = ({ children }) => {
  // State to hold whether dark mode is enabled
  const [isDark, setIsDark] = useState(false)

  // Function to update the theme
  const updateTheme = useCallback(() => {
    // Getting the primary, secondary, tertiary, and tertiary-dark colors
    const colorPrimary = getComputedStyleTrim('--color-primary')
    const colorSecondary = getComputedStyleTrim('--color-secondary')
    const colorTertiary = getComputedStyleTrim('--color-tertiary')
    const colorTertiaryDark = getComputedStyleTrim('--color-tertiary-dark')

    // Setting the primary and secondary colors based on whether dark mode is enabled
    document.documentElement.style.setProperty(
      '--color-primary',
      isDark ? colorSecondary : colorPrimary,
    )
    document.documentElement.style.setProperty(
      '--color-secondary',
      isDark ? colorPrimary : colorSecondary,
    )

    // Setting the tertiary and tertiary-dark colors based on whether dark mode is enabled
    document.documentElement.style.setProperty(
      '--color-tertiary',
      isDark ? colorTertiaryDark : colorTertiary,
    )
    document.documentElement.style.setProperty(
      '--color-tertiary-dark',
      isDark ? colorTertiary : colorTertiaryDark,
    )
  }, [isDark]) // updateTheme will be recreated whenever isDark changes

  const toggleTheme = useCallback(() => {
    setIsDark((prevIsDark) => !prevIsDark)
    updateTheme()
  }, [updateTheme])

  useEffect(() => {
    updateTheme()
  }, [isDark, updateTheme])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeProvider
