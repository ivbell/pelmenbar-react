import React from 'react'
import { MagazineMapComponent } from '../../components/common/map/MagazineMapComponent'
import contacts from '../../store/contacts'
import './ContactsPage.scss'

export const ContactsPage = () => {
	const addressList = contacts.address.map((item) => (
		<span key={item.toString()}>- {item}</span>
	))

	const email = contacts.email
	const hrefEmail = `mailto:${email}`
	const phone = contacts.phone

	return (
		<div className='contact-page'>
			<div className='container'>
				<h1>Контакты</h1>
				<ul>
					<li className='list'>
						<span>WhatsApp для отзывов и предложений</span>
						<a href='https://api.whatsapp.com/send/?phone=79126718125&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D1%81+%D1%81%D0%B0%D0%B9%D1%82%D0%B0+%D0%B2%D0%B0%D1%88%D0%B5%D0%B9+%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8.%0A%0A&app_absent=0'>
							{phone}
						</a>
					</li>

					<li className='list'>
						<span>Ваши вопросы, предложения можете отправить на почту:</span>
						<a href={hrefEmail}>{email}</a>
					</li>
					<div className='line' />
					<li className='adress'>
						<big>Мы находимся:</big>
						{addressList}
						<big>Время работы:</big>
						<span>
							ПН-ПТ: <small>10:00 - 20:00</small>
						</span>
					</li>
				</ul>

				<div className='map'>
					<MagazineMapComponent />
				</div>
			</div>
		</div>
	)
}
