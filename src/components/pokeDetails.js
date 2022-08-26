import '../styles.css';
import Navbar from './navbar';
import {useParams} from "react-router";


const Detials = ({params}) => {

        //const params = useParams();
        const { abilities, moves} = params;

        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })


        return (
            <div>
                <Navbar />
                {params.id}
                {abilities}
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
