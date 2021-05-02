import React from 'react'
import './MenuCatalogComponent.scss'
import { MenuListComponent } from './menu-center/menu-list/MenuListComponent'
import MenuCartComponent from './menu-center/menu-cart/MenuCartComponent'

const MenuCatalogComponent = () => {
  return (
    <div className="catalog-menu">
      <div className="container d-flex jc-sb">
        <MenuListComponent/>
        <MenuCartComponent/>
      </div>
    </div>
  )
}

export default MenuCatalogComponent