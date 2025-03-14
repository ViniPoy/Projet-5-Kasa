import './Banner.scss'


function Banner({ image, title, className = "", noFilter = false }) {
    return (
        <div className= {`banner ${className}`}>
            <img className={`banner__image ${noFilter ? "banner__image--no-filter" : ""}`} src={image} alt="Bannière" />
            {title && <h1 className='banner__title'>{title}</h1>}
        </div>
    )
}

export default Banner