/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Sofa = ({ icon, name }) => {
  const { numSofas, setNumSofas} = useContext(ItemsContext)

  const subQuantity = () => {
    if(numSofas === 0){
      return
    } else {
      setNumSofas(numSofas - 1)
    }
  }

  const sumQuantity = () => {
    setNumSofas(numSofas + 1)
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
          <p> {numSofas} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
