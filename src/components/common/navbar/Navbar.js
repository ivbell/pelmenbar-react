import React from 'react'
import MenuCatalogComponent from '../../navbar/menu-catalog/MenuCatalogComponent'
import MenuTopComponent from '../../navbar/menu-top/MenuTopComponent'
import { MobileMenuBottomComponent } from '../../navbar/mobile/bottom-menu/MobileMenuBottomComponent'
import MobileFirstMenu from '../../navbar/mobile/first-menu/MobileFirstMenu'

const Navbar = () => {
  return (
    <div>
      <MobileFirstMenu/>
      <MenuTopComponent/>
      <MenuCatalogComponent/>
      <MobileMenuBottomComponent/>
    </div>
  )
}

export default Navbar