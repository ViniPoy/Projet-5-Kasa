import '../styles/Info-Logement.scss';
import Dropdown from './Dropdown';



function InfoLogement({ description, equipments }) {
    return (
        <div className='info-logement'>
            <div className="info-logement__dropdown">
                <Dropdown title="Description" content={description} />
                <Dropdown title="Équipements" content={equipments} />
            </div>
        </div>
        
    )
}

export default InfoLogement