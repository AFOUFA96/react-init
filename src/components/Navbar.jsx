import { useEffect, useState } from "react";
import { GenderService } from "../services/gender.service";
import { Link } from "react-router-dom";


export function Navbar(props) {

    const [genders, setGenders] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            let service = new GenderService();
            let data = await service.getAll();
            setGenders(data);
        }
        fetchData().catch(console.error);
    }, [])

    return (
        <div>
        <div className='text-center myTitle  '>
        <Link to="/home" className="myColor text-decoration-none"> 
            Shop Online
        </Link>
        </div>
        
        
            <ul className="myNav nav justify-content-center">
            {genders.map(gender => {
                return (
                    <Link to="/category">
                    <li className="nav-item">
                        <a className="myCol nav-link active"  href="#">{gender.title}</a>
                    </li>
                    </Link>
                );
            })  }
            </ul>
        </div>
    )
}