import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { NavLink } from 'react-router-dom'
import products from '../../../store/products'
import './CartFixedComponent.scss'

export const CartFixedComponent = observer(() => {
	const count = products.cart.length
	if (count) {
		return (
			<div className='container'>
				<div className='cart-fixed-component'>
					<NavLink to='/cart'>
						<ShoppingCartOutlinedIcon />
						<span>{count}</span>
					</NavLink>
				</div>
			</div>
		)
	} else {
		return <div></div>
	}
})
