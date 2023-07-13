/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Bed = ({ icon, name }) => {
  const { numBeds, setNumBeds} = useContext(ItemsContext)

  const subQuantity = () => {
    if(numBeds === 0){
      return
    } else {
      setNumBeds(numBeds - 1)
    }
  }

  const sumQuantity = () => {
    setNumBeds(numBeds + 1)
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
          <p> {numBeds} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
