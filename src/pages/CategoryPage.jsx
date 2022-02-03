import { CategoryMenu } from "../components/CategoryMenu"
import { Navbar } from '../components/Navbar';
import { Footer } from "../components/Footer";
import '../components/styles/categoryPage.css';
import { TextScroller } from '../components/TextScroller';

export function CategoryPage(props) {
    let message = "** Livraison gratuite à partir de 79€ sur toutes les commandes à domicile et en point de relais **";
    return (
        
<>

            <Navbar />
            <TextScroller text = {message} />
            <div className=" myCards container"> 
                <CategoryMenu />    
            </div>
            <Footer />
            </>  
    )
}