import PropTypes from 'prop-types'
import { createContext, useState, useEffect, useCallback } from 'react'

// Création du contexte du thème
export const ThemeContext = createContext()

// Création du fournisseur de thème
export const ThemeProvider = ({ children }) => {
  // Création de l'état pour le mode sombre
  const [isDark, setIsDark] = useState(false)

  // Création d'une fonction pour mettre à jour le thème
  const updateTheme = useCallback(() => {
    // Récupération des couleurs primaires et secondaires actuelles
    const colorPrimary = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary')
      .trim()
    const colorSecondary = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-secondary')
      .trim()

    // Mise à jour des couleurs primaires et secondaires en fonction du mode sombre
    document.documentElement.style.setProperty(
      '--color-primary',
      isDark ? colorSecondary : colorPrimary,
    )
    document.documentElement.style.setProperty(
      '--color-secondary',
      isDark ? colorPrimary : colorSecondary,
    )
  }, [isDark]) // La fonction est mise à jour chaque fois que isDark change

  // Création d'une fonction pour basculer le mode sombre
  const toggleTheme = useCallback(() => {
    // Inversion de l'état du mode sombre
    setIsDark((prevIsDark) => !prevIsDark)
    // Mise à jour du thème
    updateTheme()
  }, [updateTheme]) // La fonction est mise à jour chaque fois que updateTheme change

  // Mise à jour du thème chaque fois que isDark ou updateTheme change
  useEffect(() => {
    updateTheme()
  }, [isDark, updateTheme])

  // Rendu du fournisseur de thème avec les valeurs isDark et toggleTheme
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Vérification des types des props
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// Exportation du fournisseur de thème
export default ThemeProvider
