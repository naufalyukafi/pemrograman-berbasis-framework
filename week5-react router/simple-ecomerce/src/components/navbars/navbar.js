import React from 'react'
import { NavbarBrand,NavbarToggler ,Collapse, Navbar,Nav,NavItem, NavLink, Button} from 'reactstrap';
import './index.css';
import {
  Link
} from "react-router-dom";
import { useAuth } from '../../context/useAuth';

const Navbars = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const {token, onLogout} = useAuth()
    return (
      <>
      {
        token &&
        <Navbar
          color="faded"
          expand="md"
          className='py-4'
          light
        >
        <NavbarBrand href="/" className='fw-bold text-blue'>
          Simple Ecomerce
        </NavbarBrand>
        <NavbarToggler onClick={() => { setIsOpen(!isOpen)}} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="ms-auto"
            navbar
          >
            <NavItem>
              <NavLink tag={Link} to={"/home"} className='me-4 fw-bold text-blue'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"keranjang"} className='me-2 button-cherry px-3 rounded'>
                Keranjang
              </NavLink>
            </NavItem>
            <Button style={{ backgroundColor:'#FF6565'}} onClick={onLogout} className='border-0 button-cherry px-3 rounded'>
              Keluar
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
      }
      </>
      
    )
}

export default Navbars
