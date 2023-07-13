/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Desk = ({ icon, name }) => {
  const { numDesk, setNumDesk} = useContext(ItemsContext)

  const subQuantity = () => {
    if(numDesk === 0){
      return
    } else {
      setNumDesk(numDesk - 1)
    }
  }

  const sumQuantity = () => {
    setNumDesk(numDesk + 1)
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
          <p> {numDesk} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
