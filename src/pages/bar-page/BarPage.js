import React from 'react'
import { MagazineMapComponent } from '../../components/common/map/MagazineMapComponent'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import Slider from 'react-slick'
import './BarPage.scss'
import { MenuBarComponent } from '../../components/bar-page/MenuBarComponent'

export const BarPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: BarPage,
  }

  const menuItem = [
    { src: '/images/bar/menu/1.jpg', title: 'Основное меню' },
    { src: '/images/bar/menu/2.jpg', title: 'Меню категорий' },
    { src: '/images/bar/menu/2.jpg', title: 'Меню пельменей' },
  ]

  const listMenu = menuItem.map(item =>
    <div key={ item.title.toString() } className="menu-bar-list">
      <MenuBarComponent item={ item }/>
    </div>,
  )
  return (
    <div className="container">
      <div className="bar-page">
        <h1>PelmenBar</h1>
        <p>Поешь у нас! Возьми с собой! Приготовь дома!</p>
        <p>Продаём пельмени в экологичной, современной, биоразлагаемой упаковке, которая не пропускает воду и масло</p>
      </div>

      <Slider { ...settings }>
        <div className="slide-items">
          <img src="/images/bar/1.jpg" alt=""/>
        </div>
        <div>
          <img src="/images/bar/2.jpg" alt=""/>
        </div>
        <div>
          <img src="/images/bar/3.jpg" alt=""/>
        </div>
        <div>
          <img src="/images/bar/4.jpg" alt=""/>
        </div>
      </Slider>

      <div className="menu">
        <h2>Меню:</h2>
        <div className="menu-box">
          { listMenu }
        </div>
      </div>
      <div className="bar-list">
        <h2>Адреса Баров:</h2>
      </div>

      <div className="map">
        <MagazineMapComponent/>
      </div>
    </div>
  )
}

