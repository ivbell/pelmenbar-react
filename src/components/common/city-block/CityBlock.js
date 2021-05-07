import RoomIcon from '@material-ui/icons/Room'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './CityBlock.scss'

export const CityBlock = () => {
	return (
		<div className=' city-block d-ib'>
			<NavLink to='#'>
				<RoomIcon />
				<span>Екатеринбург</span>
			</NavLink>
		</div>
	)
}
