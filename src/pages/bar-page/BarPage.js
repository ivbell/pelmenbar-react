import React from 'react'
import ImageGallery from 'react-image-gallery'
import { MenuBarComponent } from '../../components/bar-page/MenuBarComponent'
import { MagazineMapComponent } from '../../components/common/map/MagazineMapComponent'
import './BarPage.scss'

export const BarPage = () => {
	const images = [
		{
			original: '/images/bar/1.jpg',
			thumbnail: '/images/bar/1.jpg',
		},
		{
			original: '/images/bar/2.jpg',
			thumbnail: '/images/bar/2.jpg',
		},
		{
			original: '/images/bar/3.jpg',
			thumbnail: '/images/bar/3.jpg',
		},
	]

	const menuItem = [
		{ src: '/images/bar/menu/1.jpg', title: 'Основное меню' },
		{ src: '/images/bar/menu/2.jpg', title: 'Меню категорий' },
		{ src: '/images/bar/menu/2.jpg', title: 'Меню пельменей' },
	]

	const listMenu = menuItem.map((item) => (
		<div key={item.title.toString()} className='menu-bar-list'>
			<MenuBarComponent item={item} />
		</div>
	))

	return (
		<div className='container'>
			<div className='bar-page'>
				<h1>PelmenBar</h1>
				<p>Поешь у нас! Возьми с собой! Приготовь дома!</p>
				<p>
					Продаём пельмени в экологичной, современной, биоразлагаемой упаковке,
					которая не пропускает воду и масло
				</p>
			</div>
			<ImageGallery items={images} showPlayButton={false} />
			<div className='menu'>
				<h2>Меню:</h2>
				<div className='menu-box'>{listMenu}</div>
			</div>
			<div className='bar-list'>
				<h2>Адреса Баров:</h2>
			</div>

			<div className='map'>
				<MagazineMapComponent />
			</div>
		</div>
	)
}
