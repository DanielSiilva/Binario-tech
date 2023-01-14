import { Routes, Route } from 'react-router-dom'

import {Main} from "../pages/Main/index"

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        
      </Route>
    </Routes>
  )
}
