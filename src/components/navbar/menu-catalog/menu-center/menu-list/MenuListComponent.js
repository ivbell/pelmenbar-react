import React from 'react'
import './MenuListComponent.scss'
import { NavLink } from 'react-router-dom'
import products from '../../../../../store/products'
import { observer } from 'mobx-react-lite'

export const MenuListComponent = observer(() => {

  const menuList = products.categories.map((item) =>
    <li key={ item._id }>
      <NavLink to={ '/catalog/' + item.name }>{ item.name }</NavLink>
    </li>,
  )

  return (
    <div>
      <div className="catalog-block">
        <ul className="d-flex">
          { menuList }
          <li>
            <NavLink to="/bar">Бар</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
})
