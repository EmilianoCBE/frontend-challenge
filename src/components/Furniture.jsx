/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Furniture = ({ icon, name }) => {
  const { numFurniture, setNumFurniture} = useContext(ItemsContext)

  const subQuantity = () => {
    if(numFurniture === 0){
      return
    } else {
      setNumFurniture(numFurniture - 1)
    }
  }

  const sumQuantity = () => {
    setNumFurniture(numFurniture + 1)
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
          <p> {numFurniture} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
