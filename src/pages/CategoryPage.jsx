import { CategoryMenu } from "../components/CategoryMenu"
import { Navbar } from '../components/Navbar';
import { Footer } from "../components/Footer";
import '../components/styles/categoryPage.css'

export function CategoryPage(props) {

    return (
        
<>
            <div className='text-center myTitle myColor myCards'>Shop Online</div>
            <Navbar />
            <div className=" myCards container"> 
                <CategoryMenu />    
            </div>
            <Footer />
            </>  
    )
}