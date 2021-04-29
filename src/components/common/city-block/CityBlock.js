import React from 'react'
import './CityBlock.scss'
import { NavLink } from 'react-router-dom'
import RoomIcon from '@material-ui/icons/Room'

export const CityBlock = () => {
  return (
    <div className=" city-block d-ib">
      <NavLink to="#">
        <RoomIcon/>
        <span>Екатеринбург</span>
      </NavLink>
    </div>
  )
}
