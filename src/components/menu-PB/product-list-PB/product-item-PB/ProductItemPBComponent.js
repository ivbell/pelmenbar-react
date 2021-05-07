import React from 'react'
import './ProductItemPBComponent.scss'

export const ProductItemPBComponent = ({ product }) => {
	const { _id, title, weight_2, weight_1, price_1, price_2, img } = product

	const ProductWeight = ({ weight }) => {
		if (weight.split('.')[0] === '0' || weight.split(',')[0] === '0') {
			if (!weight.split(','[1]) || !weight.split('.')[1]) {
				return <div className='pb-product__weight-0'></div>
			} else {
				return <div className='pb-product__weight'>{weight} л</div>
			}
		} else {
			return <div className='pb-product__weight'>{weight} г</div>
		}
	}

	const ProductInfo = () => {
		if (weight_2) {
			return (
				<div className='pb-product__info-text'>
					<div className='pb-product__left-side'>
						<ProductWeight weight={weight_1} />
						<div className='pb-product__price'>{price_1} ₽</div>
					</div>
					<div className='pb-product__right-side'>
						<ProductWeight weight={weight_2} />
						<div className='pb-product__price'>{price_2} ₽</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className='pb-product__info-text'>
					<div className='pb-product__center'>
						<ProductWeight weight={weight_1} />
						<div className='pb-product__price'>{price_1} ₽</div>
					</div>
				</div>
			)
		}
	}

	return (
		<div className='product'>
			<div className='image'>
				<img src={img} alt={title} />
			</div>
			<div className='pb-product'>
				<div className='pb-product__title'>{title}</div>
				<ProductInfo />
			</div>
		</div>
	)
}
