/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Refrigerator = ({ icon, name }) => {
  const { numRefri, setNumRefri} = useContext(ItemsContext)

  const subQuantity = () => {
    if(numRefri === 0){
      return
    } else {
      setNumRefri(numRefri - 1)
    }
  }

  const sumQuantity = () => {
    setNumRefri(numRefri + 1)
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
          <p> {numRefri} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
