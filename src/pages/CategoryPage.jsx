import  CategoryMenu  from "../components/CategoryMenu"
import '../components/styles/categoryPage.css';

function CategoryPage(props) {
    const {gender}= props;
    return (       
        <>
            <div className=" myCards container"> 
                <CategoryMenu gender ={gender} />    
            </div>
        </>  
    )
}
export default CategoryPage;