import React from 'react';
import './styles.css';
import Navbar from './components/navbar';
import { useParams } from 'react-router';


const Details = () => {

    const params = useParams();

    return (        
        <div>
            <Navbar />
            <div className="pokemon-card-detail">

                <div className="pokemon-num">
                    No: {params.id}
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

export default Details;