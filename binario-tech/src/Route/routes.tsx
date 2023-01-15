import { Routes, Route } from 'react-router-dom'

import {Main} from "../pages/Main/index"
import { Mouse } from '../pages/Main/Mouse'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path='/mouse' element={<Mouse />} />
      </Route>
    </Routes>
  )
}
