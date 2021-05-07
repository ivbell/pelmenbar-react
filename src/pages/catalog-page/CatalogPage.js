import { observer } from 'mobx-react-lite'
import React from 'react'
import { MenuListComponent } from '../../components/navbar/menu-catalog/menu-center/menu-list/MenuListComponent'
import { ProductListComponent } from '../../components/products/products-list/ProductListComponent'
import products from '../../store/products'
import './CatalogPage.scss'

export const CatalogPage = observer(() => {
	const productsList = products.products

	return (
		<div>
			<MenuListComponent slug='catalog' lists={products.categoriesHappylmen} />
			<div className='container'>
				<ProductListComponent title='Каталог' products={productsList} />
			</div>
		</div>
	)
})
