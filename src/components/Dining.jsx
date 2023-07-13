/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Dining = ({ icon, name }) => {
  const { numDinings, setNumDinings} = useContext(ItemsContext)

  const subQuantity = () => {
    if(numDinings === 0){
      return
    } else {
      setNumDinings(numDinings - 1)
    }
  }

  const sumQuantity = () => {
    setNumDinings(numDinings + 1)
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
          <p> {numDinings} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
