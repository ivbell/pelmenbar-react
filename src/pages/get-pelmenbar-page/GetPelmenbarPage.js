import React from 'react'
import './GetPelmenbarPage.scss'

export const GetPelmenbarPage = () => {
	return (
		<div className='container get-page'>
			<h1 className='get-page__title'>Франшиза</h1>
			<div className='get-page__form'>
				<span>Телефон</span>
				<input type='text' />
				<div className='get-page__btn'>Получить информацию</div>
			</div>
			<div className='get-page__box'>
				<div className='get-page__right-side'>
					<span>Города присутствия</span>
					<ul>
						<li className='active'>- <a><span>Екатеринбург</span></a></li>
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
