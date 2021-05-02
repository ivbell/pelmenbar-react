import React from 'react'
import './CatalogPage.scss'
import { ProductListComponent } from '../../components/products/products-list/ProductListComponent'
import products from '../../store/products'
import { observer } from 'mobx-react-lite'

export const CatalogPage = observer(() => {
  const productsList = products.products
  return (
    <div className="container">
      <ProductListComponent title="Каталог" products={ productsList }/>
    </div>
  )
})
