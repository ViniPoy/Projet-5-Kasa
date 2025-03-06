import '../styles/Card.scss'
import PropTypes from 'prop-types'


function Card({ id, cover, title }) {
    return (
        <div key={id} className="card">
            <img src={cover} className="card__image" alt={`${title} cover`} />
            <p className="card__title">{title}</p>
        </div>
    )
}

Card.PropTypes = {
        id: PropTypes.number,
        cover: PropTypes.string,
        title: PropTypes.string
    }

export default Card