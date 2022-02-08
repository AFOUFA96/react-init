import React, { useState, useEffect, useRef } from 'react';
import  Card  from '../components/Card';
import  {GenderService } from '../services/gender.service';
import '../components/styles/homePage.css';
import { Link } from "react-router-dom";

function HomePage(props) {
    
    const [genders, setGenders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let service = new GenderService();
            let data = await service.getAll();
            setGenders(data);
        }
        fetchData().catch(console.error);
    }, []);

    let data =[];
    const doThis = (evt) => {
        data.push(evt.currentTarget.id, evt.currentTarget.textContent );
        localStorage.setItem("gender", JSON.stringify(data));
        console.log(localStorage["gender"]);
      }

    return (
        <div>
            <div className='container text-center myCards'>
                <div className='row'>
                    {genders.map(gender => {
                        return (
                            <div key = {gender.id} className="col-sm-6 col-md-6"  >
                                    <Card fonction={doThis}
                                    route = {gender.title}
                                    id ={gender.id}
                                        image={process.env.PUBLIC_URL + gender.image}
                                        title={gender.title}
                                        classes="cardGender"
                                    />
                            </div>
                        )
                    })}
                </div>
            </div>   
        </div>
    )
};
export default HomePage;