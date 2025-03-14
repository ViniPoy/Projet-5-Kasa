import './Slideshow.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import leftVector from '../../assets/Left-Vector.png';
import rightVector from '../../assets/Right-Vector.png';


function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [slideDirection, setSlideDirection] = useState("");
    const [animationKey, setAnimationKey] = useState(0);

    function nextSlide() {
        setSlideDirection("right");
        setPrevIndex(currentIndex);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimationKey((prevKey) => prevKey + 1);
    }

    function prevSlide() {
        setSlideDirection("left");
        setPrevIndex(currentIndex);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setAnimationKey((prevKey) => prevKey + 1);
    }

    return (
        <div className='slideshow'>
            {prevIndex !== null && (
                <img
                    key={`prev-${animationKey}`}
                    className={`slideshow__pictures slideshow__pictures--exit slideshow__pictures--exit-${slideDirection}`}
                    src={images[prevIndex]}
                    alt={`Slide ${prevIndex + 1}`}
                />
            )}
            <img
                key={`current-${animationKey}`}
                className={`slideshow__pictures slideshow__pictures--enter slideshow__pictures--enter-${slideDirection}`}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />
            {images.length > 1 && (
                <>
                    <div className='slideshow__nav'>
                        <img className='slideshow__prev' src={leftVector} onClick={prevSlide} alt='Précédent' />
                        <img className='slideshow__next' src={rightVector} onClick={nextSlide} alt='Suivant' />
                    </div>
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