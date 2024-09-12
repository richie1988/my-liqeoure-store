import './Footer.css'
import Logo from '../../assets/logo.png'
import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material'




function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={Logo} alt='my-logo' className='footer-logo'/>
            <p>Liquore Store is the most cheapest liqour providers in Zambia we give the best price we are the cheast and most seelers to the bars and restuarants we give tthe best when it comes to providing the chepest liquors.</p>
            <div className="footer-social-icons">
                <ul className='icon-list'>
                <li><FacebookOutlined/></li>
                <li><Twitter/></li>
                <li><Instagram/></li>
                </ul>
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+277642880</li>
                    <li>liquorestore@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">© 2024 Liquore Store | All Rights Reserved</p>
    </div>
  )
}

export default Footer