import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import Contacts from '../../../../../store/contacts'
import MenuHandler from '../../../../../store/MenuHandler'
import { CityBlock } from '../../../../common/city-block/CityBlock'
import './MobileHandleMenu.scss'

export const MobileHandleMenu = observer(() => {
	const toggleMenu = (event) => {
		if (event.target instanceof HTMLAnchorElement) {
			MenuHandler.toggleMenu()
		}
	}

	const addressList = Contacts.address.map((item) => (
		<div key={item.toString()} className='sm-text'>- {item}</div>
	))

	return (
		<div className='full-catalog-block'>
			<div className='mobile-logo-menu-top'>
				<NavLink to='/'>
					<img src='/images/logo.png' alt='' />
				</NavLink>
			</div>
			<span
				onClick={() => MenuHandler.toggleMenu()}
				className='full-catalog-block-close'>
				<CloseOutlinedIcon />
			</span>

			<div className='m-city-block'>
				<CityBlock />
				{addressList}
			</div>

			<div onClick={toggleMenu} className='menu-list-handler'>
				<ul>
					<li>
						<NavLink to='/'>Главная страница</NavLink>
					</li>
					<li>
						<NavLink to='/catalog'>Меню</NavLink>
					</li>
					<li>
						<NavLink to='/bar'>Бар</NavLink>
					</li>
					<li>
						<NavLink to='/delivery'>Доставка</NavLink>
					</li>
					<li>
						<NavLink to='/about'>О нас</NavLink>
					</li>
					<li>
						<NavLink to='/contacts'>Контакты</NavLink>
					</li>
				</ul>
			</div>
		</div>
	)
})
