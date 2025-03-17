import Logo from '../../assets/KASA.png';
import { NavLink } from 'react-router-dom';
import './Header.scss'


function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={Logo} alt='Logo de KASA' />
            <nav className='header__navbar'>
                {/* J'utilise NavLink au lieu de Link pour ajouter une classe active aux liens
                    et le laisser soulignés lorsqu'on se trouve sur la page correspondante, comme sur le figma */}
                <NavLink className='header__navbar__link' to='/'>Accueil</NavLink>
                <NavLink className='header__navbar__link' to='/à-propos'>À propos</NavLink>
            </nav>
        </header>
    )
}

export default Header