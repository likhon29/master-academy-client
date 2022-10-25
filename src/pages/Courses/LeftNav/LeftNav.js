import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect } from 'react';
const LeftNav = () => {
    useEffect(() => {
        fetch('')
    })
    return (
        <div>
            
            <div className='mt-4'>
                <h5>Course of SSC</h5>
                <ListGroup className='text-white'>
                    <ListGroup.Item className='text-white bg-success mb-2'> Physics</ListGroup.Item>
                    <ListGroup.Item className='text-white bg-success mb-2'> Chemistry</ListGroup.Item>
                    <ListGroup.Item className='text-white bg-success mb-2'> Higher Math</ListGroup.Item>
                    <ListGroup.Item className='text-white bg-success mb-2'> Biology</ListGroup.Item>
                    <ListGroup.Item className='text-white bg-success mb-2'> ICT</ListGroup.Item>
                    <ListGroup.Item className='text-white bg-success mb-2'> English</ListGroup.Item>
                    <ListGroup.Item className='text-white bg-primary mb-2'> More</ListGroup.Item>
                    
                </ListGroup>
            </div>
            
            </div>
    );
};

export default LeftNav;