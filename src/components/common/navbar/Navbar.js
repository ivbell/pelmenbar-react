import React from 'react'
import MenuTopComponent from '../../navbar/menu-top/MenuTopComponent'
import { MobileMenuBottomComponent } from '../../navbar/mobile/bottom-menu/MobileMenuBottomComponent'

const Navbar = () => {
	return (
		<div>
			<MenuTopComponent />
			<MobileMenuBottomComponent />
		</div>
	)
}

export default Navbar
