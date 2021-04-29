import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuHandler from '../../../../../store/MenuHandler'
import { CityBlock } from '../../../../common/city-block/CityBlock'
import './MobileHandleMenu.scss'

export const MobileHandleMenu = () => {
	const toggleMenu = (event) => {
		if (event.target instanceof HTMLAnchorElement) {
			MenuHandler.toggleMenu()
		}
	}

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
				<div className='sm-text'>- пр. Ленина 5б, цокольный этаж, ТЦ S&T</div>
				<div className='sm-text'>- Экомол «Гранат», Амундсена 63</div>
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
}
