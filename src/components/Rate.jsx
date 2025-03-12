import '../styles/Rate.scss';
import starFilled from '../assets/star-filled.png';
import star from '../assets/star.png';


function Rate({ rating }) {
    const maxStars = 5;
    
    return (
        <div className='rate'>
            {Array.from({ length: maxStars }, (_, index) => (
                <img
                    key={index}
                    src={index < rating ? starFilled : star}
                    alt='star'
                    className='rate__star'
                />
            ))}
        </div>
    )
}

export default Rate