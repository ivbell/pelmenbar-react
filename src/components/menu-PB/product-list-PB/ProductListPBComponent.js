import React from 'react';
import { ProductTitleComponent } from '../../products/product-title/ProductTitleComponent';
import { ProductItemPBComponent } from './product-item-PB/ProductItemPBComponent';

export const ProductListPBComponent = ({ title, products }) => {
	const listItem = products.map((product) => (
		<section key={product._id} className='catalog-item'>
			<ProductItemPBComponent product={product} />
		</section>
	))

	return (
		<section className='catalog-block'>
			<div className='container'>
				<div className='catalog-block-head'>
					<ProductTitleComponent title={title} />
				</div>
			</div>

			<div className='product-list row d-flex'>{listItem}</div>
		</section>
	)
}
