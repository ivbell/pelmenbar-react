import React from 'react'
import './MobileFirstMenu.scss'
import { NavLink } from 'react-router-dom'

const MobileFirstMenu = () => {
  return (
    <div className="first-mobile-menu">
      <div className="container">
        <div className="d-flex jc-sb">
          <div className="mobile-logo-menu-top">
            <NavLink to="/"><img src="/images/logo.png" alt="" /></NavLink>
          </div>
          <div className="contact-block">
            <a href="tel:+79126718125" target="_blank" rel="noreferrer">+7 (912) 671‒81‒25</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileFirstMenu