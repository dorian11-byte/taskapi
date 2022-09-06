import React from 'react';
import '../styles.css';
import Navbar from './navbar';
import {useParams} from "react-router";
const {useState, useEffect} = React;   

const Detials = () => {

        const [detail , setDetail] = useState([]);

        const params = useParams();

        const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`

        const fetchDetail = async () => {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        }
        
        fetchDetail()

        return (
            <div>
                <Navbar />

                {params.id} 
                <div className="pokemon-card-detail">

                    <div className="pokemon-title-name">
                       
                    </div>
                    <div className="pokemon-num">
                       
                    </div>
                    <div className="pokemon-detail-img">

                    </div>
                    <div className="card-body">
                        <div className="card-top">
                            <div className="pokemon-detail-alldata">
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
}

export default Detials;
