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
        <Link to="/" className="nav-link myColor"> 
            Shop Online
        </Link>
        </div>
            <ul className="myNav nav justify-content-center">
            {genders.map(gender => {
                return (
                    
                    <li className="nav-item">
                    <Link to={gender.title} className="nav-link myColor">{gender.title}</Link>
                        
                    </li>
                );
            })  }
            </ul>
        </div>
    );
};