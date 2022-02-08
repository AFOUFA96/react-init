import {Link} from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const NotFoundScreen = () => {
    return(
        <>
            <h1>Erreur 404 - Cette page n'existe pas !</h1>
            <Link to="/"> Retour à l'accueil </Link>
            <LoadingSpinner />
        </>
    );
};
export default NotFoundScreen;