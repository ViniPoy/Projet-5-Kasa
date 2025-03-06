import Photo from '../assets/image-1.png';
import '../styles/Banner.scss'


function Banner() {
    return (
        <div className='banner'>
            <img className='banner__image' src={Photo} alt="Photo d'une crique en bord de mer" />
            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner