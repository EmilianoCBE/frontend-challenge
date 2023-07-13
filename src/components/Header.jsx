import houseLogo from '../assets/cil_house.svg'
// import viteLogo from '/vite.svg' en public
import './Header.css'

export const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={houseLogo} alt="House logo"/>
      <div className="menu">
        <a href="/">How we work</a>
        <a href="/">Services</a>
        <a href="/">Free Quote</a>
        <a href="/">Contact</a>
      </div>
    </div>
  )
}
