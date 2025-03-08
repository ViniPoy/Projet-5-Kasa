import Error from '../assets/404.png';
import { Link } from 'react-router-dom';
import '../styles/404.scss'


function NotFound() {
    return (
        <div className='not-found'>
            <img className='not-found__image' alt='logo 404' src={Error} />
            <h1 className='not-found__message'>Oups! La page que vous demandez n&apos;existe pas</h1>
            <Link className='not-found__link' to='/'>Retourner sur la page d&apos;accueil</Link>
        </div>
    )
}

export default NotFound