import React from 'react';
import { Link } from 'react-router-dom';
import NF404 from '../../../assets/images/1_DeBkx8vjbumpCO-ZkPE9Cw.png'
const NotFound = () => {
    return (
        <div>
            <Link className="mt-2 btn btn-primary" to='/'>Go Back Home</Link>
            <div className="img-container">
            <img src={NF404} width="75%" alt="" />
            </div>
            
        </div>
    );
};

export default NotFound;