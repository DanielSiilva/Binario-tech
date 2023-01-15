import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from './styles'

import { Headphones, Keyboard } from 'phosphor-react'
import { List } from 'phosphor-react'
import { Mouse } from 'phosphor-react'



export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <List size={60} color='#ffff'/>
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <Keyboard/>
              <span>Teclados</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/mouses'>
            <Mouse />
              <span>Mouses</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='/earphones'>
            <Headphones />
              <span>Fones</span>
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </Container>
  )
}
