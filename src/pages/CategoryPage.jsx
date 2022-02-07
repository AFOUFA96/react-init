import { CategoryMenu } from "../components/CategoryMenu"
import '../components/styles/categoryPage.css';

function CategoryPage(props) {
    let gender = JSON.parse(localStorage.getItem("data"));
    console.log(gender[1]);
    let message = "** Livraison gratuite à partir de 79€ sur toutes les commandes à domicile et en point de relais **";
    return (       
        <>
            <div className=" myCards container"> 
                <CategoryMenu />    
            </div>
        </>  
    )
}
export default CategoryPage;