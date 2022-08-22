import React from 'react';

const Navbar = () => {
    let urllogo = "https://s.yimg.com/uu/api/res/1.2/xRETp4.4YvIWJPoKqxI11w--~B/aD0zMDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/es/levelup_525/7d3b096b0a5ca8c4d50e70d7a2c2dea9"

    return (
        <nav>
           <div />
            <div> 
                <img 
                    src={urllogo} 
                    alt="pokemon logo"
                    className="nav-logo"    
                />
            </div> 
           <div />
        </nav>
    )
}

export default Navbar;

