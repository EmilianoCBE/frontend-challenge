/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Dryer = ({ icon, name }) => {
  const { numDryers, setNumDryers} = useContext(ItemsContext)

  const subQuantity = () => {
    if(numDryers === 0){
      return
    } else {
      setNumDryers(numDryers - 1)
    }
  }

  const sumQuantity = () => {
    setNumDryers(numDryers + 1)
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
          <p> {numDryers} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
