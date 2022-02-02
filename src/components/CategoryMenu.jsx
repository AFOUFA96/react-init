import { useEffect, useState } from "react";
import { CategoryService } from "../services/category.service";
import { Card } from '../components/Card';
import '../components/styles/categoryMenu.css'

export function CategoryMenu(props){

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
                    <div className="col-sm-6 col-md-4">
                        <Card image ={process.env.PUBLIC_URL + category.image} title = {category.title} classes ="cardCategory" 
                            
                        />
                    </div>
                    )
                {/* <p> {category.title}</p> */}
            })}

        </div>
    );
}