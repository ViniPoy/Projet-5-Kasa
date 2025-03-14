import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Logements from '../../datas/data.json';
import Slideshow from "../../components/Slideshow/Slideshow";
import Dropdown from '../../components/Dropdown/Dropdown';
import Owner from '../../components/Owner/Owner';
import Rate from '../../components/Rate/Rate';
import Tags from '../../components/Tags/Tags';
import Title from '../../components/Title/Title';
import './Fiche-Logement.scss';



function FicheLogement() {
    const {id} = useParams();
    const navigate = useNavigate();
    const logement = Logements.find((logement) => logement.id.toString() === id);

    useEffect(() => {
        if (!logement) {
            navigate("/logement-invalide", { replace: true });
        }
    }, [logement, navigate]);

    if (!logement) return null;

    return (
        <div className='logement'>
            <Slideshow images={logement.pictures} />
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

export default FicheLogement