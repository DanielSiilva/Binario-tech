import { Routes, Route } from 'react-router-dom'
import { Earphone } from '../pages/Main/Earphone'

import {Main} from "../pages/Main/index"
import { Keyboard } from '../pages/Main/Keyboard'
import { Mouse } from '../pages/Main/Mouse'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path='/' element={<Keyboard />} />
        <Route path='/mouses' element={<Mouse />} />
        <Route path='/earphones' element={<Earphone />} />
      </Route>
    </Routes>
  )
}
