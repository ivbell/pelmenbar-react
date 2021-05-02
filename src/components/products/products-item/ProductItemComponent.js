import React, { useState } from 'react'
import './ProductItemComponent.scss'
import products from '../../../store/products'
import Modal from 'react-modal'

export const ProductItemComponent = ({ product }) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const { _id, title, description, price, weight, img } = product
  const descriptionSmall = description.split(',').length < 7 ? description : description.split(',', 7) + ', ...'

  const cartHandler = (e) => {
    e.preventDefault()
    products.cartAddProduct(_id)
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '15px',
      padding: '20px',
      border: '1px solid #4a4a4c',
      overflow: 'hidden',
    },
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="product">
      <div className="image">
        <img src={ img } alt={ title }/>
      </div>
      <div className="info-text">
        <div className="title">{ title }</div>
        <div className="description">
          { descriptionSmall }
          <div
            onClick={ openModal }
            className="handle-modal"
          >
            Подробнее
          </div>
        </div>
        <div className="description description-m">
          { description }
        </div>
        <div className="price d-flex jc-sb">
          <div className="weight">
            ±{ weight } г
          </div>
          <button
            onClick={ cartHandler }
          >
            { price + ' ₽' }
          </button>
        </div>
      </div>

      <Modal
        isOpen={ modalIsOpen }
        onRequestClose={ closeModal }
        style={ customStyles }
        ariaHideApp={ false }
        contentLabel={ title + '-' + description }
      >

        <div className="modal">
          <div className="box">
            <div
              onClick={ closeModal }
              className="close"
            >
              x
            </div>
            <div className="image">
              <img src={ img } alt={ title }/>
            </div>
            <h1>{ title }</h1>
            <p>{ description }</p>
            <div className="price d-flex jc-sb">
              <div className="weight">
                ±{ weight } г
              </div>
              <button
                onClick={ cartHandler }
              >
                { price + ' ₽' }
              </button>
            </div>
          </div>
        </div>
      </Modal>

    </div>
  )
}

