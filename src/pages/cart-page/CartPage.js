import React from 'react'
import { observer } from 'mobx-react-lite'
import products from '../../store/products'
import { FullCartComponent } from '../../components/cart-page/FullCartComponent'

export const CartPage = observer(() => {
  const { cart } = products

  if (cart.length === 0) {
    return (
      <div className="cart">
        <div className="cart-block">
          <div className="container">
            <h1>Ваша корзина пуста</h1>
            <strong>Перейдите в каталог, чтобы добавить товар</strong>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="cart">
        <div className="container">
          <h1>Корзина</h1>
        </div>
        <div className="cart-block">
          <FullCartComponent/>
        </div>
      </div>
    )
  }

})