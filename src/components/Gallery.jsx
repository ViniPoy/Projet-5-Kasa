import Logements from '../datas/data.json'
import Card from './Card'


function Gallery() {
    return (
        <div className='gallery'>
            {Logements.map(Logement => (
                <Card key={Logement.id} title={Logement.title} cover={Logement.cover} />
            ))}
        </div>
    )
}

export default Gallery