import { Bed } from "./Bed"
import { Refrigerator } from "./Refrigerator"
import bed from '../assets/bed.svg'
import refrigerator from '../assets/refrigerator.svg'
import furniture from '../assets/furniture.svg'
import oven from '../assets/oven.svg'
import sofa from '../assets/sofa.svg'
import tv from '../assets/tv.svg'
import dryer from '../assets/dryer.svg'
import dining from '../assets/dining.svg'
import desk from '../assets/desk.svg'
import wardrobe from '../assets/wardrobe.svg'

import './GridCards.css'
import { Oven } from "./Oven"
import { Furniture } from "./Furniture"
import { Sofa } from "./Sofa"
import { Tv } from "./Tv"
import { Dryer } from "./Dryer"
import { Dining } from "./Dining"
import { Desk } from "./Desk"
import { Wardrobe } from "./Wardrobe"

export const GridCards = () => {
  // const {items, setItems} = useContext(ItemsContext)

  return (
    <>
      <div className="grid-title">
        <h1>What items to store?</h1>
        <p>Select which items you wish to store before moving to your new home. We’ll keep ’em safe!</p>
      </div>
      <div className="grid">
        <Bed icon={bed} name={"Beds"} />
        <Refrigerator icon={refrigerator} name={"Refrigerator"} />
        <Furniture icon={furniture} name={"Furniture"} />
        <Oven icon={oven} name={"Oven"} />
        <Sofa icon={sofa} name={"Sofa"} />
        <Tv icon={tv} name={"TV"} />
        <Dryer icon={dryer} name={"Washer-dryer"} />
        <Dining icon={dining} name={"Dining"} />
        <Desk icon={desk} name={"Desk"} />
        <Wardrobe icon={wardrobe} name={"Wardrobe"} />
      </div>
    </>
  )
}
