import React from 'react'

export const CartCountComponent = ({ count }) => {
  if (count > 0){
    return <span>{count}</span>
  } else{
    return <div> 12</div>
  }
}
