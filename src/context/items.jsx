import { createContext, useState } from "react"

// Crear Contexto, esto se consume
export const ItemsContext = createContext() //Solo se crea una vez: Singleton

//Crear el Provider, para proveer el acceso al contexto
// eslint-disable-next-line react/prop-types
export function ItemsProvider({children}){
  const [numBeds, setNumBeds] = useState(0)
  const [numRefri, setNumRefri] = useState(0)
  const [numFurniture, setNumFurniture] = useState(0)
  const [numOvens, setNumOvens] = useState(0)
  const [numSofas, setNumSofas] = useState(0)
  const [numTvs, setNumTvs] = useState(0)
  const [numDryers, setNumDryers] = useState(0)
  const [numDinings, setNumDinings] = useState(0)
  const [numDesk, setNumDesk] = useState(0)
  const [numWardrobe, setNumWardrobe] = useState(0)

  return (
    <ItemsContext.Provider value={{
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
    }}>
      {children}
    </ItemsContext.Provider>
  )
}