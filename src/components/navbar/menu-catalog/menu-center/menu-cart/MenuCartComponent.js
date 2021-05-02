import React from 'react'
import './MenuCartComponent.scss'
import { observer } from 'mobx-react-lite'
import { CartComponentMenu } from '../../../../common/cart-count/CartComponentMenu'
import products from '../../../../../store/products'

const MenuCartComponent = observer(() => {
  const cartCount = products.cart.length
  return (
    <div>
      <CartComponentMenu count={ cartCount }/>
    </div>
  )
})

export default MenuCartComponent