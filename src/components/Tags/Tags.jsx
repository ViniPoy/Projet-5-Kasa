import './Tags.scss'


function Tags({ tags }) {
    return (
        <div className='tags-container'>
            {/* On parcours le tableau des tags pour les afficher (appelé dans fiche-logement, et donc afficher pour chaque logement) */}
            {tags.map((tag, index) => (
                <span key={index} className='tags-container__tag'>{tag}</span>
            ))}
        </div>
    )
}

export default Tags