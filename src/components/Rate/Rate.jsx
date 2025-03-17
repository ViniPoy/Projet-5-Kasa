import './Rate.scss';
import starFilled from '../../assets/star-filled.png';
import star from '../../assets/star.png';


function Rate({ rating }) {
    //Je définis le nombre max d'étoiles possible
    const maxStars = 5;
    
    return (
        <div className='rate'>
            {/* Je créé un tableau pour générer les étoiles (donc ici 5 étoiles) */}
            {Array.from({ length: maxStars }, (_, index) => ( //J'utilise l'underscore ici car je ne me sers pas du premier paramètre de cette fonction fléchée
                <img
                    key={index} //Chaque étoile a sa clé unique (ici index)
                    src={index < rating ? starFilled : star} //Si l'index est inférieur à rating, étoile remplie, sinon étoile vide
                    alt='star'
                    className='rate__star'
                />
            ))}
        </div>
    )
}

export default Rate