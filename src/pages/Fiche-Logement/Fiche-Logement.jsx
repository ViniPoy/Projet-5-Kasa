import { useParams } from "react-router-dom";
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
    //Récupération de l'id du logement à partir de l'URL via le hook useParams
    const {id} = useParams();
    //Recherche du logement correspondant à l'id dans la liste des logements
    //La comparaison est faite en convertissant l'id du logement en string
    const logement = Logements.find((logement) => logement.id.toString() === id);
    
    //On s'assure que la page se charge en étant en haut de la page.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //On évite un rendu incorrect en attendant la redirection de la route d'erreur
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