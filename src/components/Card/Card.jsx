import { Link } from 'react-router-dom'
import './Card.scss'
import PropTypes from 'prop-types'


//Je passe les props pour créer une card différentes en fonction de chaque élément du fichier JSON
function Card({ id, cover, title }) {
    return (
        //Chaque card renvoie vers un lien dynamique pour chaque logement, ce qui évite les erreurs de redirection.
        <Link className="card" to={`/fiche-logement/${id}`}>
            <img src={cover} className="card__image" alt={`${title} cover`} />
            <p className="card__title">{title}</p>
        </Link>
    )
}

//Je rend obligatoire la présence des props ainsi que leurs types (évite les bugs, aide à la compréhension des attentes du composant).
Card.propTypes = {
        id: PropTypes.number.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }

export default Card