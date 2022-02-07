import {Outlet} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { TextScroller } from '../components/TextScroller';
import { Footer } from '../components/Footer';
const BaseScreen = () => {
    let message = "** Livraison gratuite à partir de 79€ sur toutes les commandes à domicile et en point de relais **";
    return(
        <>
            <Navbar />
            <TextScroller text={message} />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
export default BaseScreen;