import { useContext, useState } from 'react'
import { ItemsContext } from '../context/items'
import './Summary.css'

export const Summary = () => {
  const {
    numBeds,
      setNumBeds,
      numRefri,
      setNumRefri,
      numFurniture,
      setNumFurniture,
      numOvens,
      setNumOvens,
      numSofas,
      setNumSofas,
      numTvs,
      setNumTvs,
      numDryers,
      setNumDryers,
      numDinings,
      setNumDinings,
      numDesk,
      setNumDesk,
      numWardrobe,
      setNumWardrobe
  } = useContext(ItemsContext)

  const [totalItems, setTotalItems] = useState(0)
  const [totalMeters, setTotalMeters] = useState(0)

  const calculate = () => {
    setTotalItems(numBeds + numRefri + numOvens + numFurniture + numSofas + numTvs + numDryers + numDinings + numDesk + numWardrobe)
    setTotalMeters((numBeds * 1.2) + numRefri + (numOvens * 0.6) + (numFurniture * 0.5) + (numSofas * 1.5) + (numTvs * 0.25) + (numDryers * 0.5) + (numDinings * 2) + (numDesk * 0.75) + (numWardrobe * 3.2))
  }

  const clear = () => {
    setTotalItems(0)
    setNumBeds(0)
    setNumRefri(0)
    setNumOvens(0)
    setNumFurniture(0)
    setNumSofas(0)
    setNumTvs(0)
    setNumDryers(0)
    setNumDinings(0)
    setNumDesk(0)
    setNumWardrobe(0)
    setTotalMeters(0)
  }

  let subtotal = totalMeters * 200
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
          <p>{totalItems}</p>
        </div>
        <div className="total">
          <p>Total m²</p>
          <p>{totalMeters}</p>
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
