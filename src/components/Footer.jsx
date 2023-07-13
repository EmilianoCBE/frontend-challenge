import houseLogo from '../assets/cil_house.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import whatsapp from '../assets/whatsapp.svg'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="column-one">
        <img className="logo" src={houseLogo} alt="House logo"/>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page whenters.</p>
        <div className="social-media">
          <img className="twitter" src={twitter} alt="Twitter logo"/>
          <img className="facebook" src={facebook} alt="Facebook logo"/>
          <img className="instagram" src={instagram} alt="Instagram logo"/>
        </div>
      </div>
      <div className="column">
        <h2>About Us</h2>
        <div>
          <p>About</p>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
          <p>Faq</p>
        </div>
      </div>
      <div className="column">
        <h2>Navigate</h2>
        <div>
          <p>How We Work</p>
          <p>Services</p>
          <p>Faq</p>
          <p>Contact</p>
          <p>Free Quote</p>
        </div>
      </div>
      <div className="column">
        <h2>Contact Us</h2>
        <div>
          <p>Ricargo Margain</p>
          <p>Call +52 81 1234 5678</p>
          <p>Email: info@challenge.com</p>
        </div>
        <a href='/'>
          <img className="whatsapp" src={whatsapp} alt="Whatsapp logo"/>
        </a>
      </div>
    </div>
  )
}
