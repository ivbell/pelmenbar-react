import React, { useState } from 'react'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import './MenuBarComponent.scss'
import Modal from 'react-modal'

export const MenuBarComponent = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false)

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
    <div
      className="images-block"
    >
      <img onClick={ openModal } src={ item.src } alt={ item.title }/>
      <div onClick={ openModal } className="loop">
        <ZoomInIcon/>
      </div>

      <Modal
        isOpen={ modalIsOpen }
        onRequestClose={ closeModal }
        style={ customStyles }
        ariaHideApp={ false }
        contentLabel={ item.title }
      >

        <div className="modal">
          <div onClick={ closeModal } className="close">x</div>
          <img src={ item.src } alt={ item.title }/>
        </div>
      </Modal>
    </div>
  )
}

