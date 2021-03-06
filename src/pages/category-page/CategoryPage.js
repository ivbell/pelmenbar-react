import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../store/products'
import { observer } from 'mobx-react-lite'
import { ProductListComponent } from '../../components/products/products-list/ProductListComponent'
import { MenuListComponent } from '../../components/navbar/menu-catalog/menu-center/menu-list/MenuListComponent'

export const CategoryPage = observer(() => {
	let categoriesList
	let categoryId
	let categoriesProductList = []
	const categoryName = useParams().name

	products.categoriesHappylmen.map((item) => {
		if (item.name === categoryName) {
			categoriesList = item.name
			categoryId = item._id
		}
	})

	products.products.map((item) => {
		if (item.category === categoryId) {
			categoriesProductList.push(item)
		}
	})

	if (categoriesList) {
		return (
			<div>
				<MenuListComponent
					slug='catalog'
					lists={products.categoriesHappylmen}
				/>
				<ProductListComponent
					title={categoryName}
					products={categoriesProductList}
				/>
			</div>
		)
	} else {
		return (
			<div>
				<MenuListComponent
					slug='catalog'
					lists={products.categoriesHappylmen}
				/>
				<ProductListComponent title='Каталог' products={products.products} />
			</div>
		)
	}
})
