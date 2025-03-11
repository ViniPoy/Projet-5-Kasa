import '../styles/Slideshow.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import leftVector from '../assets/Left-Vector.png';
import rightVector from '../assets/Right-Vector.png';
import { motion, AnimatePresence } from 'framer-motion';


function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    function nextSlide() {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    function prevSlide() {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className='slideshow'>
            <AnimatePresence mode='wait' custom={direction}>
                <motion.img 
                    className='slideshow__pictures'
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ x: direction * 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -direction * 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </AnimatePresence>
            {images.length > 1 && (
                <div className='slideshow__nav'>
                    <img className='slideshow__prev' src={leftVector} onClick={prevSlide} />
                    <img className='slideshow__next' src={rightVector} onClick={nextSlide} />
                </div>
            )}
            {images.length > 1 && <p className='slideshow__counter'>{currentIndex + 1} / {images.length}</p>}
        </div>
    )
}

Slideshow.PropTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Slideshow