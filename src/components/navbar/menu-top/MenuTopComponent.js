import React from 'react'
import './MenuTopComponent.scss'
import { NavLink } from 'react-router-dom'
import { CityBlock } from '../../common/city-block/CityBlock'

const MenuTopComponent = () => {
  return (
    <div className="menu-top">
      <div className="container">
        <div className="menu-top-box d-flex jc-sb pt-5px pb-5px">
          <div className="left-side">
            <div className="logo-menu d-flex">
              <NavLink to="/"><img src="/images/logo.png" alt=""/> </NavLink>
              <div>
                <ul className="logo-menu-first d-flex">
                  <li>
                    <NavLink to="/delivery">Доставка</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">О нас</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contacts">Контакты</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-side d-flex">
            <CityBlock/>
            <div className="contact-block">
              <a href="tel:+79126718125" target="_blank" rel="noreferrer">+7 (912) 671‒81‒25</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuTopComponent