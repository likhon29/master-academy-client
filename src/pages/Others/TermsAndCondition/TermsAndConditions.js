import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h1>Terms and Conditions</h1>
            <p>Go back to Registration Form: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;