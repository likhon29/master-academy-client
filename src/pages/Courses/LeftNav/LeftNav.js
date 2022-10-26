import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
const LeftNav = ({course}) => {
    const { id, course_name ,course_group,category_name} = course;
    return (
        <div>
            
            <div className='mt-1'>
                
                <ListGroup className='text-white'>
                    <ListGroup.Item className='bg-success mb-1'> <Link className='btn btn-none' to={`${id}`}><span className='text-warning  me-2'>{course_name}</span>  <span className='text-white '>({ course_group})</span><span className='text-white '>-{ category_name}</span></Link></ListGroup.Item>
                    
                    
                </ListGroup>
            </div>
            
            </div>
    );
};

export default LeftNav;