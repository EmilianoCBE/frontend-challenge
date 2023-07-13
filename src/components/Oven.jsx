/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Oven = ({ icon, name }) => {
  const { items, setItems} = useContext(ItemsContext)

  const subQuantity = () => {
    if(items.oven === 0){
      return
    } else {
      setItems(prevState => ({
      ...prevState,
      oven: items.oven - 1 
    }))
    }
  }

  const sumQuantity = () => {
    setItems(prevState => ({
      ...prevState,
      oven: items.oven + 1 
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
          <p> {items.oven} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
