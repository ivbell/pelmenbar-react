import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ErrorPage from './pages/404/ErrorPage'
import AboutPage from './pages/about-page/AboutPage'
import { BarPage } from './pages/bar-page/BarPage'
import { CartPage } from './pages/cart-page/CartPage'
import { CatalogPage } from './pages/catalog-page/CatalogPage'
import { CategoryPage } from './pages/category-page/CategoryPage'
import { ContactsPage } from './pages/contacts-page/ContactsPage'
import DeliveryPage from './pages/delivery-page/DeliveryPage'
import { GetPelmenbarPage } from './pages/get-pelmenbar-page/GetPelmenbarPage'
import { HomePage } from './pages/home-page/HomePage'

export const useRoutes = () => {
	return (
		<Switch>
			<Route path='/' exact>
				<HomePage />
			</Route>
			<Route path='/catalog' exact>
				<CatalogPage />
			</Route>
			<Route path='/catalog/:name'>
				<CategoryPage />
			</Route>
			<Route path='/delivery' exact>
				<DeliveryPage />
			</Route>
			<Route path='/about' exact>
				<AboutPage />
			</Route>
			<Route path='/contacts'>
				<ContactsPage />
			</Route>
			<Route path='/cart' exact>
				<CartPage />
			</Route>
			<Route path='/bar' exact>
				<BarPage />
			</Route>

			<Route path='/error' exact>
				<ErrorPage />
			</Route>
			<Route path='/get-pelmenbar' exact>
				<GetPelmenbarPage />
			</Route>

			<Redirect to='/error' />
		</Switch>
	)
}
