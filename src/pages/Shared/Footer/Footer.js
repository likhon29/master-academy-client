    import React from 'react';
    import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer,CDBBox } from 'cdbreact';
    import logo from '../../../assets/images/logo.png'
    import { Link } from "react-router-dom";
    const Footer = () => {
        return (
            <CDBFooter className="shadow mt-5 bg-warning">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <Link to="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="120px"
            />
            <span className="ms-2 ml-4 h5 mb-0 font-weight-bold">Master Academy</span>
          </Link>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; Master Academy, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
        );
    };
    
    export default Footer;