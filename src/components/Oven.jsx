/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Oven = ({ icon, name }) => {
  const { numOvens, setNumOvens} = useContext(ItemsContext)

  const subQuantity = () => {
    if(numOvens === 0){
      return
    } else {
      setNumOvens(numOvens - 1)
    }
  }

  const sumQuantity = () => {
    setNumOvens(numOvens + 1)
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
          <p> {numOvens} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
