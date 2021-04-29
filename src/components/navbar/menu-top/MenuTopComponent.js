import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuTopComponent = () => {
  return (
    <div>
      <div className="logo-menu d-flex">
        <NavLink to="/"><img src="/images/logo.png" alt=""/> </NavLink>
        <div>
          <ul className="logo-menu-first d-flex">
            <li>
              <NavLink to="/delivery">Доставка</NavLink>
            </li>
            <li>
              <NavLink to="/about">О нас</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuTopComponent