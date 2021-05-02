import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutHomeComponent from '../../components/home-page/about/AboutHomeComponent'
import './HomePage.scss'
import { ProductListComponent } from '../../components/products/products-list/ProductListComponent'
import products from '../../store/products'
import { observer } from 'mobx-react-lite'

export const HomePage = observer(() => {

  const productsList = products.products

  return (
    <div className="home-page">
      <div className="container">
        <NavLink to="/catalog">
          <img src="/images/slide/banner.jpg" alt=""/>
        </NavLink>
        <ProductListComponent title="Популярные" products={ productsList }/>
        <AboutHomeComponent/>
      </div>
    </div>
  )
})

