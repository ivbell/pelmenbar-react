import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import MenuHandler from '../../../../store/MenuHandler'
import { MobileHandleMenu } from './mobile-handle-menu/MobileHandleMenu'
import './MobileMenuBottomComponent.scss'
import products from '../../../../store/products'
import { CartCountComponent } from '../../../common/cart-count/CartCountComponent'

export const MobileMenuBottomComponent = observer(() => {
  const countProduct = products.cart.length

  return (
    <div className="bottom-menu-mobile">
      <ul className="d-flex jc-sb">
        <li onClick={ () => MenuHandler.toggleMenu() } className="list-burger">
          <MenuIcon/>
        </li>

        <li className="list-cart">
          <NavLink to="/cart">
            <ShoppingCartOutlinedIcon/>
            <CartCountComponent count={ countProduct }/>
          </NavLink>
        </li>
      </ul>

      { MenuHandler.isShow && <MobileHandleMenu/> }
    </div>
  )
})
