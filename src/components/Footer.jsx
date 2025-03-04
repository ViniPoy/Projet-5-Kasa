import Logo from '../assets/white-KASA.png';
import '../styles/Footer.scss'


function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <img src={Logo} alt='Logo de KASA' />
            </div>
            <div className='footer__info'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer