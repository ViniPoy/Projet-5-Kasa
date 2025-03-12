import '../styles/Owner.scss'


function Owner({ host }) {
    return (
        <div className='host'>
            <span className='host__name'>{host.name}</span>
            <img className='host__picture' src={host.picture} alt={host.name} />
        </div>
    )
}

export default Owner