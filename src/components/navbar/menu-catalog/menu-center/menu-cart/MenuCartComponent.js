import React from 'react'
import './MenuCartComponent.scss'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

const MenuCartComponent = () => {
  return (
    <div>
      <div className="cart-block">
        <div
          className="cart-block-icon"
        >
          <ShoppingCartOutlinedIcon/>
        </div>
        {/*<div*/}
        {/*  className="cart-block-full"*/}
        {/*>*/}
        {/*  <ShoppingCartOutlinedIcon/>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default MenuCartComponent