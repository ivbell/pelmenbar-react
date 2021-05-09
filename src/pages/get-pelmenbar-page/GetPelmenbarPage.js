import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import { toast } from 'react-toastify'
import { useHttp } from '../../hooks/http.hooks'
import './GetPelmenbarPage.scss'

export const GetPelmenbarPage = () => {
	const [phone, setPhone] = useState('')
	const { request } = useHttp()

	const phoneHandler = (event) => {
		setPhone(event.target.value)
	}

	const sendPhone = async () => {
		if (phone.length === 18) {
			try {
				const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

				if (!phone.match(re)) {
					toast.error('Телефон введён не верно, попробуйте снова')
				} else {
					await request(
						'https://safe-bayou-91554.herokuapp.com/api/get-pelmenbar',
						'POST',
						{ phone: phone },
						{ 'Content-Type': 'application/json' }
					).then(() => {
						setPhone('')
						toast.success(
							'Заявка успешно оформленна, скоро с Вами свяжется Наш Специалист'
						)
					})
				}
			} catch (error) {
				console.log(error)
			}
		} else {
			console.log(phone.length)
		}
	}
	return (
		<div className='container get-page'>
			<h1 className='get-page__title'>Франшиза</h1>
			<div className='get-page__form'>
				<span>Телефон</span>
				<ReactInputMask
					mask='+7 (999) 999-99-99'
					value={phone}
					onChange={phoneHandler}
				/>
				<div onClick={sendPhone} className='get-page__btn'>
					Получить информацию
				</div>
			</div>
			<div className='get-page__box'>
				<div className='get-page__right-side'>
					<span>Города присутствия</span>
					<ul>
						<li className='active'>
							-{' '}
							<a>
								<span>Екатеринбург</span>
							</a>
						</li>
					</ul>
				</div>
				<div className='get-page__left-side'>
					<h2>екатеринбург</h2>
					<span>Адреса Баров:</span>
					<ul>
						<li>- пр. Ленина 5б, цокольный этаж, ТЦ S&T</li>
						<li>- Экомол «Гранат», Амундсена 63</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
