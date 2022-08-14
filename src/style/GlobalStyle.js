import { createGlobalStyle } from 'styled-components'
import themeList from '../theme/themeList'

const GlobalStyle = createGlobalStyle`
:root{
  --darkBlue: #0A0F19;
  --lightBlue: #F3F1FE;
  --mediumSlateBlue: #6C62E2;
  --themeSwitcherBg: #cfc8f4;
  --white: #fff;
}

body{
  background-color: ${props => props.theme.theme === themeList.light ? 'var(--lightBlue)' : 'var(--darkBlue)'};
  /* background-color: var(--lightBlue); */
}
`
export default GlobalStyle