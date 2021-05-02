import React from 'react'
import './ProductListComponent.scss'
import { ProductTitleComponent } from '../product-title/ProductTitleComponent'
import { ProductItemComponent } from '../products-item/ProductItemComponent'

export const ProductListComponent = ({ title, products }) => {
  const listItem = products.map((product) =>
    <section key={ product._id } className="catalog-item">
      <ProductItemComponent product={ product }/>
    </section>,
  )

  return (
    <section className="catalog-block">
      <div className="container">
        <div className="catalog-block-head">
          <ProductTitleComponent title={ title }/>
        </div>
      </div>

      <div className="product-list row d-flex">
        { listItem }
      </div>
    </section>
  )
}