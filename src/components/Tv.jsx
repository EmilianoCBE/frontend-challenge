/* eslint-disable react/prop-types */
// import { useContext } from 'react'
// import { ItemsContext } from '../context/items'
import { useContext } from 'react'
import { ItemsContext } from '../context/items'

import './Card.css'

export const Tv = ({ icon, name }) => {
  const { numTvs, setNumTvs} = useContext(ItemsContext)

  const subQuantity = () => {
    if(numTvs === 0){
      return
    } else {
      setNumTvs(numTvs - 1)
    }
  }

  const sumQuantity = () => {
    setNumTvs(numTvs + 1)
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
          <p> {numTvs} </p>
        </div>
        <button onClick={sumQuantity}> + </button>
      </div>
    </div>
  )
}
