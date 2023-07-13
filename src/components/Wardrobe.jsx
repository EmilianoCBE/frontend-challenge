/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Wardrobe = ({ icon, name }) => {
  const { numWardrobe, setNumWardrobe} = useContext(ItemsContext)

  const subQuantity = () => {
    if(numWardrobe === 0){
      return
    } else {
      setNumWardrobe(numWardrobe - 1)
    }
  }

  const sumQuantity = () => {
    setNumWardrobe(numWardrobe + 1)
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
          <p> {numWardrobe} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
