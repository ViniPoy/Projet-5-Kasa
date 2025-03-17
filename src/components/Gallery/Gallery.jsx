import Logements from '../../datas/data.json'
import Card from '../Card/Card'
import './Gallery.scss'


function Gallery() {
    return (
        <div className='gallery'>
            {/* On parcourt le tableau Logements et on génère un composant Card pour chaque logement */}
            {Logements.map(Logement => (
                <Card key={Logement.id} id={Logement.id} title={Logement.title} cover={Logement.cover} />
            ))}
        </div>
    )
}

export default Gallery