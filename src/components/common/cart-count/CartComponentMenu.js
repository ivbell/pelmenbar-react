import React from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { NavLink } from 'react-router-dom'

export const CartComponentMenu = ({ count }) => {
  if (count > 0) {
    return (
      <div className="cart-block">
        <NavLink to="/cart">
          <div className="cart-block-full">
            <ShoppingCartOutlinedIcon/>
            <span>{ count }</span>
          </div>
        </NavLink>
      </div>
    )
  } else {
    return (
      <div className="cart-block">
        <div className="cart-block-icon">
          <ShoppingCartOutlinedIcon/>
        </div>
      </div>
    )
  }
}
