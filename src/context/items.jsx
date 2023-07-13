import { createContext, useState } from "react"

// Crear Contexto, esto se consume
export const ItemsContext = createContext() //Solo se crea una vez: Singleton

//Crear el Provider, para proveer el acceso al contexto
// eslint-disable-next-line react/prop-types
export function ItemsProvider({children}){
  const [items, setItems] = useState({
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

  return (
    <ItemsContext.Provider value={{
      items,
      setItems,
    }}>
      {children}
    </ItemsContext.Provider>
  )
}