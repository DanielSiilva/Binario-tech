import { BrowserRouter } from "react-router-dom"

import { Theme } from './styles/Theme'
import { GlobalStyle } from "./styles/global"
import { Normalize } from 'styled-normalize'
import { AppRoutes } from "./Route/routes"


function App() {
  return(
    <BrowserRouter>
      <Theme>
        <AppRoutes/>
        <GlobalStyle/>
        <Normalize/>
      </Theme>
    </BrowserRouter>
  )
}

export default App
