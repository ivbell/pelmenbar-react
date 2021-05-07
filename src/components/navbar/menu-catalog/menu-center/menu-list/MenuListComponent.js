import { observer } from 'mobx-react-lite'
import React from 'react'
import { NavLink } from 'react-router-dom'
import products from '../../../../../store/products'
import './MenuListComponent.scss'

export const MenuListComponent = observer(() => {
	const menuList = products.categoriesPelmenBar.map((item) => (
		<li key={item._id}>
			<NavLink to={'/catalog/' + item.name}>{item.name}</NavLink>
		</li>
	))

	return (
		<div>
			<div className='catalog-block'>
				<ul className='d-flex'>
					{menuList}
					<li>
						<NavLink to='/bar'>Бар</NavLink>
					</li>
				</ul>
			</div>
		</div>
	)
})
