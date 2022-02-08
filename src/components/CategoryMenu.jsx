import { useEffect, useState } from "react";
import { CategoryService } from "../services/category.service";
import  Card  from '../components/Card';


const CategoryMenu = (props) =>{
    const{gender} = props;
    const [categorys, setCategorys] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            let service = new CategoryService();
            let data = await service.getAll();
            setCategorys(data);
        }
        fetchData().catch(console.error);
    }, [])

    return(
        <div className="row">
            {categorys.map(category => {
                return (
                    <div key = {category.id} className=" col-sm-6 col-md-4">
                        <Card image ={process.env.PUBLIC_URL +"/assets/images/"+ gender + category.image} title = {category.title} classes ="cardCategory" 
                        />
                    </div>
                    )
            })}

        </div>
    );
};
export default CategoryMenu;