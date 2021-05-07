import { observer } from 'mobx-react-lite'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuListComponent.scss'

export const MenuListComponent = observer(({ lists, slug }) => {
	const menuList = lists.map((item) => (
		<li key={item._id}>
			<NavLink to={`/${slug}/` + item.name}>{item.name}</NavLink>
		</li>
	))

	return (
		<div className='menu-list-component'>
			<div className='container'>
				<ul className='d-flex'>{menuList}</ul>
			</div>
		</div>
	)
})
