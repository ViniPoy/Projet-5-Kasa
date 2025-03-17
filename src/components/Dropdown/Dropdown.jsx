import { useState } from "react";
import './Dropdown.scss';
import Vector from '../../assets/Vector.png'


function Dropdown({ title, content }) {
    //J'utilise useState pour définir si le composant est ouvert ou fermé.
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Si le composant est ouvert, je rajpute une classe à la div, nécessaire pour les animations.
        <div className={`dropdown ${isOpen ? "dropdown--open" : ""}`}>
            <div className="dropdown__header">
                <h1 className="dropdown__title">{title}</h1>
                {/* À chaque clique sur la flèche, le collapse s'ouvre ou se ferme en fonction de son état actuel. */}
                <img src={Vector} className="dropdown__arrow" onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className="dropdown__content">
                {/* On vérifie si le contenu à afficher est un tableau ou non (version à-propos ou version fiche-logement)
                    Si oui, on affiche une liste en parcourant le contenu du tableau avec .map 
                    Sinon, on affiche un simple paragraphe.*/}
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => (
                            <li className="dropdown__content--list" key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    )
}

export default Dropdown