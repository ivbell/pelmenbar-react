import { makeAutoObservable, runInAction } from 'mobx'

class Products {

  products = []
  categories = []
  cart = []
  paymentCart = []

  constructor() {
    makeAutoObservable(this)
  }

  async productsLoad() {
    await fetch(`https://safe-bayou-91554.herokuapp.com/api/products`)
      .then(response => response.json())
      .then(json => {
        runInAction(() => {
          this.products = json
        })
      })
  }

  async categoriesLoad() {
    await fetch(`https://safe-bayou-91554.herokuapp.com/api/categories`)
      .then(response => response.json())
      .then(json => {
        runInAction(() => {
          this.categories = json
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
      if (this.cart.find(item => item.id === id)) {
        const product = this.cart.find(item => item.id === id)

        product.qtx++
      } else {
        this.cart.push({ id, qtx: 1 })
      }
    }
  }

  cartDeleteProduct(id) {
    const cart = this.cart
    const product = cart.find(item => item.id === id)

    cart.splice(cart.indexOf(product), 1)
  }

  cartPlusProduct(id) {
    const product = this.cart.find(item => item.id === id)
    product.qtx++
  }

  cartMinusProduct(id) {
    const cart = this.cart
    const product = cart.find(item => item.id === id)
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