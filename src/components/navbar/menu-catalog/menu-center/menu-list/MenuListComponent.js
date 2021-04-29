import React from 'react'
import './MenuListComponent.scss'
import { NavLink } from 'react-router-dom'

const MenuListComponent = () => {
  return (
    <div>
      <div className="catalog-block">
        <ul className="d-flex">
          <li>
            <NavLink to="/catalog">Пельмени</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Вареники</NavLink>
          </li>
          <li>
            <NavLink to="/bar">Бар</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuListComponent