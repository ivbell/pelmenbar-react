import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../store/products'
import { observer } from 'mobx-react-lite'
import { ProductListComponent } from '../../components/products/products-list/ProductListComponent'
import { MenuListComponent } from '../../components/navbar/menu-catalog/menu-center/menu-list/MenuListComponent'
import { ProductListPBComponent } from './../../components/menu-PB/product-list-PB/ProductListPBComponent';

export const MenuPBPage = observer(() => {
	let categoriesList
	let categoryId
	let categoriesProductList = []
	const categoryName = useParams().name

	products.categoriesPB.map((item) => {
		if (item.name === categoryName) {
			categoriesList = item.name
			categoryId = item._id
		}
	})

	products.productsPB.map((item) => {
		if (item.category === categoryId) {
			categoriesProductList.push(item)
		}
	})

	if (categoriesList) {
		return (
			<div>
				<MenuListComponent slug='menu' lists={products.categoriesPB} />
				<ProductListPBComponent
					title={categoriesList}
					products={categoriesProductList}
				/>
			</div>
		)
	} else {
		return (
			<div>
				<MenuListComponent slug='menu' lists={products.categoriesPB} />
				<ProductListPBComponent products={products.productsPB} />
			</div>
		)
	}
})
