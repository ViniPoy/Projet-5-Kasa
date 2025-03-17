import './Banner.scss'


//Je met des props pour gérer les deux versions de la bannières avec un seul composant.
function Banner({ image, title, className = "" }) {
    return (
        //J'ajoute la classe dans le composant parent pour modifier l'affichage en SCSS.
        <div className= {`banner ${className}`}>
            <img className="banner__image" src={image} alt="Bannière" />
            {/* Si la prop "title" est définie dans le parent, on affiche le titre. */}
            {title && <h1 className='banner__title'>{title}</h1>}
        </div>
    )
}

export default Banner