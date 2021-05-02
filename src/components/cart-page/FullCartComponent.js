import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import products from '../../store/products'
import './FullCartComponent.scss'

export const FullCartComponent = observer(() => {
	const carts = products.cart
	const productsArr = carts.map((cart) =>
		products.products.find((product) => product._id === cart.id)
	)

	let cartTotalPrice = 0
	carts.map(
		(cart) =>
			(cartTotalPrice +=
				cart.qtx * productsArr.find((pr) => pr._id === cart.id).price)
	)

	const cartList = productsArr.map((product) => (
		<li key={product._id} className='cart-item'>
			<img src={product.img} alt='' />
			<div className='name'>
				{product.title},<span className='weight'> {product.weight} г</span>
				<div className='count'>
					<div
						onClick={() => products.cartMinusProduct(product._id)}
						className='minus'>
						<span>-</span>
					</div>

					<div className='total'>
						{carts.find((item) => item.id === product._id).qtx}
					</div>

					<div
						onClick={() => products.cartPlusProduct(product._id)}
						className='plus'>
						<span>+</span>
					</div>
				</div>
			</div>
			<div className='pr-price'>{product.price + ' ₽'}</div>
			<div
				onClick={() => products.cartDeleteProduct(product._id)}
				className='delete'>
				<HighlightOffIcon />
			</div>
		</li>
	))

	const [form, setForm] = useState({
		name: '',
		phone: '',
		product: '',
		delivery: 'Самовывоз',
		adress: '',
		sum: '',
		payment: 'Наличные',
		added: true,
	})

	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const deliveryChange = () => {
		if (form.delivery === 'Доставка') {
			return (
				<div>
					{form.adress}
					<input
						name='adress'
						type='text'
						placeholder='Адрес доставки'
						value={form.adress}
						onChange={changeHandler}
					/>
					{summDeliveryChange()}
				</div>
			)
		}
	}

	const summDeliveryChange = () => {
		if (cartTotalPrice < 500) {
			return (
				<span className='error'>
					Бесплатная доставка от 500р <a href='/delivery'>подробнее</a>
				</span>
			)
		}
	}

	return (
		<div className='full-cart-block'>
			<div className='container'>
				<div className='box'>
					<ul>{cartList}</ul>

					<div className='form'>
						<form>
							<div>
								{form.name}
								<input
									name='name'
									type='text'
									placeholder='Ваше имя'
									value={form.name}
									onChange={changeHandler}
								/>
							</div>
							<div>
								{form.phone}
								<input
									maxLength='11'
									minLength='11'
									placeholder='Номер телефона'
									name='phone'
									type='text'
									value={form.phone}
									onChange={changeHandler}
								/>
							</div>
							<div>
								{form.payment}
								<select
									name='payment'
									id='payment'
									value={form.payment}
									onChange={changeHandler}>
									<option value='Наличные'>Наличные</option>
									<option value='Оплата картой'>
										Оплата картой при получении
									</option>
								</select>
							</div>

							<div>
								{form.delivery}
								<select
									name='delivery'
									id='delivery'
									value={form.delivery}
									onChange={changeHandler}>
									<option value='Самовывоз'>Самовывоз</option>
									<option value='Доставка'>Доставка</option>
								</select>
							</div>
							{deliveryChange()}

							<div className='personal'>
								<input
									type='checkbox'
									name='added'
									id='added'
									checked={form.added}
									onChange={changeHandler}
								/>
								<label htmlFor='added'>
									Нажимая кнопку "Оформить заказ", я даю согласие на обработку
									моих персональных данных, в соответствии с Федеральным законом
									от 27.07.2006 года №152-Ф3 «О персональных данных», на
									условиях и для целей, определенных в
									<a
										href='/doc/согласие_на_обработку_персональных_данных.pdf'
										target='_blank'>
										Согласии на обработку персональных данных
									</a>
								</label>
							</div>

							<div>
								<div className='button'>Оформить заказ</div>
							</div>
						</form>

						<h2> Итого: {cartTotalPrice + ' ₽'}</h2>
					</div>
				</div>
			</div>
		</div>
	)
})
