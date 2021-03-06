import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { CityBlock } from '../city-block/CityBlock'
import './Footer.scss'

const Footer = () => {
	return (
		<div className='footer-block'>
			<div className='container'>
				<div className='footer-block__menu'>
					<ul className='footer-block__menu-first d-flex'>
						<li>
							<NavLink to='/about'>О нас</NavLink>
						</li>
						<li>
							<NavLink to='/contacts'>Контакты</NavLink>
						</li>
						<li>
							<NavLink to='/get-pelmenbar'>Франшиза</NavLink>
						</li>
					</ul>
				</div>
				<div className='footer-block__contacts d-flex'>
					<CityBlock />
					<div className='contact-block'>
						<a href='tel:+79126718125' target='_blank' rel='noreferrer'>
							+7 (912) 671‒81‒25
						</a>
					</div>
				</div>
				<div className='content'>
					<a
						href='https://instagram.com/pelmen_bar?igshid=rui0sbrn703g'
						target='_blank'
						rel='noreferrer'>
						<InstagramIcon />
					</a>
					<a
						href='https://api.whatsapp.com/send/?phone=79126718125&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D1%81+%D1%81%D0%B0%D0%B9%D1%82%D0%B0+%D0%B2%D0%B0%D1%88%D0%B5%D0%B9+%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8.%0A%0A&app_absent=0'
						target='blank'
						rel='noreferrer'>
						<WhatsAppIcon />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
