import { useContext, useState } from 'react'
import { ItemsContext } from '../context/items'
import './Summary.css'

export const Summary = () => {
  const { items, setItems } = useContext(ItemsContext)
  const [quantity, setQuantity] = useState({
    totalItems: 0,
    totalM: 0
  })

  const calculate = () => {
    setQuantity({
      totalItems: items.bed + items.refrigerator + items.furniture + items.oven + items.sofa + items.tv + items.dryer + items.dining + items.desk + items.wardrobe,
      totalM: (items.bed * 1.2) + (items.refrigerator) + (items.furniture * 0.5) + (items.oven * 0.6) + (items.sofa * 1.5) + (items.tv * 0.25) + (items.dryer * 0.5) + (items.dining * 2) + (items.desk * 0.75) + (items.wardrobe * 3.2),
    })
  }

  const clear = () => {
    setItems({
      bed: 0,
      refrigerator: 0,
      furniture: 0,
      oven: 0,
      sofa: 0,
      tv: 0,
      dryer: 0,
      dining: 0,
      desk: 0,
      wardrobe: 0
    })
  }

  let subtotal = quantity.totalM * 200
  let iva = subtotal * 0.16
  let total = subtotal + iva

  return (
    <div className="summary">
      <div className='summary-btns'>
        <button onClick={clear} className='clear'>
          Clear
        </button>
        <button onClick={calculate} className='calculate'>
          Calculate
        </button>
      </div>
      <h1>Summary</h1>
      <div className="summary-card">
        <div className="total">
          <p>Total Items</p>
          <p>{quantity.totalItems}</p>
        </div>
        <div className="total">
          <p>Total m²</p>
          <p>{quantity.totalM}</p>
        </div>
        <div className="total">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="total">
          <p>Tax</p>
          <p>${iva.toFixed(2)}</p>
        </div>
        <div className="total-bold">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="total-bold">
          <p>Due Today 50%</p>
          <p>${(total * 0.5).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
