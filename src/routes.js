import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HomePage } from './pages/home-page/HomePage'
import { CatalogPage } from './pages/catalog-page/CatalogPage'
import DeliveryPage from './pages/delivery-page/DeliveryPage'
import AboutPage from './pages/about-page/AboutPage'
import { ContactsPage } from './pages/contacts-page/ContactsPage'
import { CartPage } from './pages/cart-page/CartPage'
import ErrorPage from './pages/404/ErrorPage'
import { BarPage } from './pages/bar-page/BarPage'
import { CategoryPage } from './pages/category-page/CategoryPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage/>
      </Route>
      <Route path="/catalog" exact>
        <CatalogPage/>
      </Route>
      <Route path="/catalog/:name">
        <CategoryPage/>
      </Route>
      <Route path="/delivery" exact>
        <DeliveryPage/>
      </Route>
      <Route path="/about" exact>
        <AboutPage/>
      </Route>
      <Route path="/contacts">
        <ContactsPage/>
      </Route>
      <Route path="/cart" exact>
        <CartPage/>
      </Route>
      <Route path="/bar" exact>
        <BarPage/>
      </Route>

      <Route path="/error" exact>
        <ErrorPage/>
      </Route>

      <Redirect to="/"/>
    </Switch>
  )
}
