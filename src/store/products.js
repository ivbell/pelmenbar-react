import { makeAutoObservable, runInAction } from 'mobx'
import config from 'config'

class Product {

  URL = config.get('BASE_URL')
  products = []
  categories = []

  constructor() {
    makeAutoObservable(this)
  }

  productsLoad() {
    fetch(`${ URL }/products`)
      .then(response => response.json())
      .then(json => {
        runInAction(() => {
          this.products = { ...this.products, json }
        })
      })
  }

  categoriesLoad() {
    fetch('https://safe-bayou-91554.herokuapp.com/api/categories')
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

}

export default new Product()