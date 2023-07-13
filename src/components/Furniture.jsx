/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Furniture = ({ icon, name }) => {
  const { items, setItems} = useContext(ItemsContext)

  const subQuantity = () => {
    if(items.furniture === 0){
      return
    } else {
      setItems(prevState => ({
      ...prevState,
      furniture: items.furniture - 1 
    }))
    }
  }

  const sumQuantity = () => {
    setItems(prevState => ({
      ...prevState,
      furniture: items.furniture + 1 
    }))
  }

  return (
    <div className="card">
      <div className="icon-container">
        <img src={icon} alt="Icon" />
        <h3>{name}</h3>
      </div>
      <div className="quantity-button">
        <button onClick={subQuantity}> - </button>
        <div>
          <p> {items.furniture} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
