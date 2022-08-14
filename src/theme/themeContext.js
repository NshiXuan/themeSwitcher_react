import { createContext, useReducer } from "react"
import themeList from "./themeList"


const ThemeContext = createContext()

const lightTheme = themeList.light
const darkTheme = themeList.dark

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      localStorage.setItem('theme', state.theme === darkTheme ? lightTheme : darkTheme)
      return { theme: state.theme === darkTheme ? lightTheme : darkTheme }
    default:
      return state
  }
}

const ThemeContextProvider = (props) => {
  const getInitialTheme = () => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      return theme
    }

    return themeList.light
  }

  const initialState = {
    theme: getInitialTheme()
  }

  const [state, dispatch] = useReducer(ThemeReducer, initialState)

  const value = {
    theme: state.theme,
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' })
  }

  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
}



export {
  ThemeContext,
  ThemeContextProvider
}