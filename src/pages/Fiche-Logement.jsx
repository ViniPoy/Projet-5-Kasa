import { useNavigate, useParams } from "react-router-dom";
import Logements from '../datas/data.json';
import Slideshow from "../components/Slideshow";
import { useEffect } from "react";


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
        <div className="fiche-logement">
            <Slideshow images={logement.pictures} />
        </div>
    )
}

export default FicheLogement