import React from 'react'
import './ProductTitleComponent.scss'

export const ProductTitleComponent = ({ title }) => {
  return (
    <div className="head-catalog-block">
      <h3>{ title }</h3>
    </div>
  )
}