import './Slideshow.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import leftVector from '../../assets/Left-Vector.png';
import rightVector from '../../assets/Right-Vector.png';


function Slideshow({ images }) {
    //State pour suivre l'image actuellement affichée
    const [currentIndex, setCurrentIndex] = useState(0);
    //State pour stocker l'index de l'image précédente (utile pour l'animation)
    const [prevIndex, setPrevIndex] = useState(null);
    //State pour définir la direction du slide en l'applicant à une classe (utile por l'animation)
    const [slideDirection, setSlideDirection] = useState("");
    //State pour forcer le rerender des images à chaque changement d'index (évite les bugs d'animations)
    const [animationKey, setAnimationKey] = useState(0);

    function nextSlide() {
        setSlideDirection("right"); //Je défini la direction du slide
        setPrevIndex(currentIndex); //Je stock l'index actuel dans prevIndex
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); //J'incrément l'index(en bouclant)
        setAnimationKey((prevKey) => prevKey + 1); //Je change la clé pour forcer le re-render
    }

    function prevSlide() {
        setSlideDirection("left");
        setPrevIndex(currentIndex);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setAnimationKey((prevKey) => prevKey + 1);
    }

    return (
        <div className='slideshow'>
            {/* Affichage de l'image précédente avec animation de sortie, uniquement si prevIndex n'est pas null */}
            {prevIndex !== null && (
                <img
                    key={`prev-${animationKey}`} //Clé unique pour forcer le re-render
                    className={`slideshow__pictures slideshow__pictures--exit slideshow__pictures--exit-${slideDirection}`}
                    src={images[prevIndex]} //Affichage de l'image précédente
                    alt={`Slide ${prevIndex + 1}`}
                />
            )}
            {/* Affichage de l'image actuelle avec animation d'entrée */}
            <img
                key={`current-${animationKey}`} //Clé unique pour forcer le re-render
                className={`slideshow__pictures slideshow__pictures--enter slideshow__pictures--enter-${slideDirection}`}
                src={images[currentIndex]} //Affichage de l'image actuelle
                alt={`Slide ${currentIndex + 1}`}
            />
            {/* Affiche les flèches et le compteur uniquement si plusieurs images sont présentes */}
            {images.length > 1 && (
                <>
                    <div className='slideshow__nav'>
                        {/* Bouton pour l'image précédente */}
                        <img className='slideshow__prev' src={leftVector} onClick={prevSlide} alt='Précédent' />
                        {/* Bouton pour l'image suivante */}
                        <img className='slideshow__next' src={rightVector} onClick={nextSlide} alt='Suivant' />
                    </div>
                    {/* Indicateur du numéro de l'image à l'écran */}
                    <p className='slideshow__counter'>{currentIndex + 1} / {images.length}</p>
                </>
            )}
        </div>
    )
}

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Slideshow