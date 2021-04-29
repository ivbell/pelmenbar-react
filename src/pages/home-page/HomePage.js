import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutHomeComponent from '../../components/home-page/about/AboutHomeComponent'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className="container">
        <NavLink to='/catalog'>
          <img src="/images/slide/banner.jpg" alt=""/>
        </NavLink>
        <AboutHomeComponent />
      </div>
    </div>
  )
}

export default HomePage