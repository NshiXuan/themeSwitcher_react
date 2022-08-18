import React, { memo, useContext } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

import { ThemeContext } from '../../theme/themeContext'
import themeList from '../../theme/themeList'
import ThemeSwitcherStyle from './style'

const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <ThemeSwitcherStyle>
      <input type="checkbox" id="switcher" onChange={e => toggleTheme()} checked={theme === themeList.dark} />
      <label htmlFor="switcher" >
        <div className="icon">
          <FiSun />
        </div>
        <div className="icon">
          <FiMoon />
        </div>
      </label>
    </ThemeSwitcherStyle>
  )
})

export default ThemeSwitcher