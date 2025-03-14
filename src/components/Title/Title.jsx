import './Title.scss'


function Title({ title, location }) {
    return (
        <div className="title">
            <h1 className='title__main'>{title}</h1>
            <p className='title__location'>{location}</p>
        </div>
    )
}

export default Title