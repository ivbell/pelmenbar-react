import { makeAutoObservable } from 'mobx'

class MenuHandler {
  isShow = false

  constructor () {
    makeAutoObservable(this)
  }

  toggleMenu () {
    this.isShow = !this.isShow
  }
}

export default new MenuHandler()