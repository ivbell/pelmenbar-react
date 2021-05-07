import { makeAutoObservable, runInAction } from 'mobx'

class Products {
	products = []
	categoriesHappylmen = []

	categoriesPB = [
		{ _id: '1', name: 'Пельмени' },
		{ _id: '2', name: 'Вареники' },
		{ _id: '3', name: 'Суп' },
		{ _id: '4', name: 'Салаты' },
		{ _id: '5', name: 'Напитки' },
		{ _id: '6', name: 'Кофе' },
		{ _id: '7', name: 'Пиво' },
		{ _id: '8', name: 'Соки' },
	]
	productsPB = [
		{
			_id: '1',
			title: 'Пельмени с говядиной и курицей',
			weight_1: '220',
			weight_2: '320',
			price_1: '99',
			price_2: '139',
			img: '/images/pb-products/pelmen.jpg',
			category: '1',
		},
		{
			_id: '2',
			title: 'Пельмени с курицей и щукой',
			weight_1: '220',
			weight_2: '320',
			price_1: '99',
			price_2: '139',
			img: '/images/pb-products/pelmen.jpg',
			category: '1',
		},
		{
			_id: '3',
			title: 'Бэйби пельмени с курицей',
			weight_1: '220',
			weight_2: '320',
			price_1: '99',
			price_2: '139',
			img: '/images/pb-products/pelmen.jpg',
			category: '1',
		},
		{
			_id: '4',
			title: 'Пельмени со свининой и говядиной',
			weight_1: '220',
			weight_2: '320',
			price_1: '160',
			price_2: '220',
			img: '/images/pb-products/pelmen.jpg',
			category: '1',
		},
		{
			_id: '5',
			title: 'Пельмени с креветками',
			weight_1: '220',
			weight_2: '320',
			price_1: '190',
			price_2: '270',
			img: '/images/pb-products/pelmen.jpg',
			category: '1',
		},
		{
			_id: '6',
			title: 'Пельмени сырные со шпинатом',
			weight_1: '220',
			weight_2: '320',
			price_1: '120',
			price_2: '180',
			img: '/images/pb-products/pelmen.jpg',
			category: '1',
		},
		{
			_id: '7',
			title: 'Вареники с картофелем и грибами',
			weight_1: '220',
			weight_2: '320',
			price_1: '120',
			price_2: '180',
			img: '/images/varenik.jpg',
			category: '2',
		},
		{
			_id: '8',
			title: 'Вареники c творогом',
			weight_1: '220',
			weight_2: '320',
			price_1: '120',
			price_2: '180',
			img: '/images/varenik.jpg',
			category: '2',
		},
		{
			_id: '9',
			title: 'Вареники с картофелем и беконом',
			weight_1: '220',
			weight_2: '320',
			price_1: '120',
			price_2: '180',
			img: '/images/varenik.jpg',
			category: '2',
		},
		{
			_id: '10',
			title: 'Суп пельменный (курица, говядина)',
			weight_1: '300',
			weight_2: '',
			price_1: '129',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '3',
		},
		{
			_id: '11',
			title: 'Суп пельменный (свинина, говядина)',
			weight_1: '300',
			weight_2: '',
			price_1: '189',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '3',
		},
		{
			_id: '12',
			title: 'Салат из маринованной белокачанной капусты',
			weight_1: '250',
			weight_2: '',
			price_1: '45',
			price_2: '',
			img: '/images/pb-products/salt.jpg',
			category: '4',
		},
		{
			_id: '13',
			title: 'Салат из квашеной краснокачанной капусты',
			weight_1: '250',
			weight_2: '',
			price_1: '45',
			price_2: '',
			img: '/images/pb-products/salt.jpg',
			category: '4',
		},
		{
			_id: '14',
			title: 'Морс - брусника',
			weight_1: '0.3',
			weight_2: '',
			price_1: '49',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '5',
		},
		{
			_id: '15',
			title: 'Морс - облепиха',
			weight_1: '0.3',
			weight_2: '',
			price_1: '49',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '5',
		},
		{
			_id: '16',
			title: 'Coca-cola',
			weight_1: '0.33',
			weight_2: '',
			price_1: '110',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '5',
		},
		{
			_id: '17',
			title: 'Sprite',
			weight_1: '0.33',
			weight_2: '',
			price_1: '110',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '5',
		},
		{
			_id: '18',
			title: 'Fanta',
			weight_1: '0.33',
			weight_2: '',
			price_1: '110',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '5',
		},
		{
			_id: '19',
			title: 'Лимонад - Natakhtari',
			weight_1: '0.5',
			weight_2: '',
			price_1: '130',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '5',
		},
		{
			_id: '20',
			title: 'Эспрессо',
			weight_1: '0',
			weight_2: '',
			price_1: '49',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '6',
		},
		{
			_id: '21',
			title: 'Американо',
			weight_1: '0',
			weight_2: '',
			price_1: '49',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '6',
		},
		{
			_id: '22',
			title: 'Капучино',
			weight_1: '0',
			weight_2: '',
			price_1: '79',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '6',
		},
		{
			_id: '23',
			title: 'Латте',
			weight_1: '0',
			weight_2: '',
			price_1: '79',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '6',
		},
		{
			_id: '24',
			title: 'Светлое',
			weight_1: '0.5',
			weight_2: '',
			price_1: '99',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '7',
		},
		{
			_id: '25',
			title: 'Тёмное Баварское',
			weight_1: '0.5',
			weight_2: '',
			price_1: '115',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '7',
		},
		{
			_id: '26',
			title: 'Нефильтрованное',
			weight_1: '0.5',
			weight_2: '',
			price_1: '115',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '7',
		},
		{
			_id: '27',
			title: 'Соки CHABAA',
			weight_1: '0.23',
			weight_2: '',
			price_1: '110',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '8',
		},
		{
			_id: '28',
			title: 'Вода ICE MOUNTAIN (газ, негаз)',
			weight_1: '0.25',
			weight_2: '',
			price_1: '80',
			price_2: '',
			img: '/images/varenik.jpg',
			category: '5',
		},
	]

	cart = []
	paymentCart = []

	constructor() {
		makeAutoObservable(this)
	}

	async productsLoad() {
		await fetch(`https://safe-bayou-91554.herokuapp.com/api/products`)
			.then((response) => response.json())
			.then((json) => {
				runInAction(() => {
					this.products = json
				})
			})
	}

	async categoriesLoad() {
		await fetch(`https://safe-bayou-91554.herokuapp.com/api/categories`)
			.then((response) => response.json())
			.then((json) => {
				runInAction(() => {
					this.categoriesHappylmen = json
				})
			})
	}

	loadData() {
		this.productsLoad()
		this.categoriesLoad()
	}

	cartAddProduct(id) {
		if (this.cart.length === 0) {
			this.cart.push({ id, qtx: 1 })
		} else {
			if (this.cart.find((item) => item.id === id)) {
				const product = this.cart.find((item) => item.id === id)

				product.qtx++
			} else {
				this.cart.push({ id, qtx: 1 })
			}
		}
	}

	cartDeleteProduct(id) {
		const cart = this.cart
		const product = cart.find((item) => item.id === id)

		cart.splice(cart.indexOf(product), 1)
	}

	cartPlusProduct(id) {
		const product = this.cart.find((item) => item.id === id)
		product.qtx++
	}

	cartMinusProduct(id) {
		const cart = this.cart
		const product = cart.find((item) => item.id === id)
		product.qtx--

		if (product.qtx === 0) {
			cart.splice(cart.indexOf(product), 1)
		}
	}

	resetCart() {
		this.paymentCart = this.cart
		this.cart = []
	}
}

export default new Products()
