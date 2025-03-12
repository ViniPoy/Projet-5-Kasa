import '../styles/Info-Logements.scss';
import Dropdown from './Dropdown';
import Owner from './Owner';
import Rate from './Rate';
import Tags from './Tags';
import Title from './Title';



function InfoLogement({ logement }) {
    return (
        <div className='logement'>
            <div className='logement__infos'>
                <div className='logement__infos__title-tags'>
                    <Title title={logement.title} location={logement.location} />
                    <Tags tags={logement.tags} />
                </div>
                <div className='logement__infos__owner-rate'>
                    <Owner host={logement.host} />
                    <Rate rating={logement.rating} />
                </div>
            </div>
            <div className="logement__dropdown">
                <Dropdown title="Description" content={logement.description} />
                <Dropdown title="Équipements" content={logement.equipments} />
            </div>
        </div>
        
    )
}

export default InfoLogement