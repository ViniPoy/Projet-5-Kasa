import Logo from '../assets/KASA.png';
import { Link } from 'react-router-dom';
import '../styles/Header.scss'


function Header() {
    return (
        <header className='header'>
            <div className='header__logo'>
                <img src={Logo} alt='Logo de KASA' />
            </div>
            <nav className='header__navbar'>
                <Link className='header__navbar__link' to='/'>Accueil</Link>
                <Link className='header__navbar__link' to='/à-propos'>À propos</Link>
            </nav>
        </header>
    )
}

export default Header