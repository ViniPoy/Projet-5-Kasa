import { Link } from 'react-router-dom'
import '../styles/Card.scss'
import PropTypes from 'prop-types'


function Card({ id, cover, title }) {
    return (
        <Link key={id} className="card" to={`/fiche-logement/${id}`}>
            <img src={cover} className="card__image" alt={`${title} cover`} />
            <p className="card__title">{title}</p>
        </Link>
    )
}

Card.PropTypes = {
        id: PropTypes.number.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }

export default Card