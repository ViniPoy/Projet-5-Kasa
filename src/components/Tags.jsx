import '../styles/Tags.scss'


function Tags({ tags }) {
    return (
        <div className='tags-container'>
            {tags.map((tag, index) => (
                <span key={index} className='tags-container__tag'>{tag}</span>
            ))}
        </div>
    )
}

export default Tags