import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuTopComponent.scss'

const MenuTopComponent = () => {
	return (
		<div className='menu-top'>
			<div className='background_color-red'></div>
			<div className='background_color-white'></div>
			<div className='container'>
				<div className='menu-top-box d-flex jc-sb'>
					<div className='left-side'>
						<div className='left-side__logo'>
							<NavLink to='/'>
								<img src='/images/logo/happylmen-logo__white-back.svg' alt='' />
							</NavLink>
						</div>
						<div className='left-side__list'>
							<ul>
								<li>
									<NavLink to='/catalog'>Каталог</NavLink>
								</li>
								<li>
									<NavLink to='/delivery'>Доставка</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<div className='right-side'>
						<div className='right-side__list'>
							<ul>
								<li>
									<NavLink to='/bar'>Где поесть</NavLink>
								</li>
								<li>
									<NavLink to='/menu'>Меню</NavLink>
								</li>
							</ul>
						</div>
						<div className='right-side__logo'>
							<NavLink to='/bar'>
								<img
									src='/images/logo/PelmenBar-logo__background-red.svg'
									alt=''
								/>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MenuTopComponent
