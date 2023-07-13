/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Bed = ({ icon, name }) => {
  const { items, setItems} = useContext(ItemsContext)

  const subQuantity = () => {
    if(items.bed === 0){
      return
    } else {
      setItems(prevState => ({
      ...prevState,
      bed: items.bed - 1 
    }))
    }
  }

  const sumQuantity = () => {
    setItems(prevState => ({
      ...prevState,
      bed: items.bed + 1 
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
          <p> {items.bed} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
