import React from 'react'
import './MenuCatalogComponent.scss'
import { MenuListComponent } from './menu-center/menu-list/MenuListComponent'

const MenuCatalogComponent = () => {
	return (
		<div className='catalog-menu'>
			<div className='container d-flex jc-sb'>
				<MenuListComponent />
			</div>
		</div>
	)
}

export default MenuCatalogComponent
