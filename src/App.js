import { useContext } from "react";
import { ThemeProvider } from "styled-components";

import ThemeSwitcher from "./components/themeSwitcher";
import GlobalStyle from "./style/GlobalStyle";
import { ThemeContext } from "./theme/themeContext";

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="App">
      <ThemeProvider theme={{ theme }}>
        <GlobalStyle />
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
}

export default App;
