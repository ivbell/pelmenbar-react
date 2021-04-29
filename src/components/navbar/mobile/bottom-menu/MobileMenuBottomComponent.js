import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import MenuHandler from '../../../../store/MenuHandler'
import { MobileHandleMenu } from './mobile-handle-menu/MobileHandleMenu'
import './MobileMenuBottomComponent.scss'

export const MobileMenuBottomComponent = observer(() => {
	return (
		<div className='bottom-menu-mobile'>
			<ul className='d-flex jc-sb'>
				<li onClick={() => MenuHandler.toggleMenu()} className='list-burger'>
					<MenuIcon />
				</li>

				<li className='list-cart'>
					<NavLink to='/cart'>
						<ShoppingCartOutlinedIcon />
						<span>1</span>
					</NavLink>
				</li>
			</ul>

			{MenuHandler.isShow && <MobileHandleMenu />}
		</div>
	)
})
