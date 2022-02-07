import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';
import { TextScroller } from '../components/TextScroller';
import { GenderService } from '../services/gender.service';
import '../components/styles/homePage.css';
import { Link } from "react-router-dom";
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.development';


export function HomePage(props) {
    let message = "** Livraison gratuite à partir de 79€ sur toutes les commandes à domicile et en point de relais **";
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


            <Navbar />
            <TextScroller text={message} />


            <div className='container text-center myCards'>
                <div className='row'>
                    {genders.map(gender => {
                        return (
                            <div className="col-sm-6 col-md-6">
                                <Link to={gender.title} className="myColor text-decoration-none">
                                    <Card fonction={doThis}

                                    id ={gender.id}
                                        image={process.env.PUBLIC_URL + gender.image}
                                        title={gender.title}
                                        classes="cardGender"
                                    />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>


            <Footer />
        </div>
    )
}