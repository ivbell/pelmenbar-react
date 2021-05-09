import React from 'react'
import { ProductTitleComponent } from '../../components/products/product-title/ProductTitleComponent'
import ImageGallery from 'react-image-gallery'
import './BarMenuPage.scss'

export const BarMenuPage = () => {
	const images = [
		{
			original: '/images/bar/menu/1.jpg',
			thumbnail: '/images/bar/menu/1.jpg',
		},
		{
			original: '/images/bar/menu/2.jpg',
			thumbnail: '/images/bar/menu/2.jpg',
		},
		{
			original: '/images/bar/menu/3.jpg',
			thumbnail: '/images/bar/menu/3.jpg',
		},
	]
	return (
		<div>
			<div className='container'>
				<ProductTitleComponent title='Меню Pelmen Bar' />
				<ImageGallery items={images} showPlayButton={false} />
			</div>
		</div>
	)
}
