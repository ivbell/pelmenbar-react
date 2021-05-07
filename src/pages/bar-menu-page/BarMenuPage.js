import React from 'react'
import { MenuListComponent } from '../../components/navbar/menu-catalog/menu-center/menu-list/MenuListComponent'
import products from '../../store/products'
import { ProductListPBComponent } from './../../components/menu-PB/product-list-PB/ProductListPBComponent'
import './BarMenuPage.scss'


export const BarMenuPage = () => {
	const productsList = products.productsPB

	return (
		<div>
			<MenuListComponent slug='menu' lists={products.categoriesPB} />
			<div className='container'>
				<ProductListPBComponent title='Меню Pelmen Bar' products={productsList} />
			</div>
		</div>
	)
}
