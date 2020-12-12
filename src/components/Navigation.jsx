import React from 'react';
import './styles/Navigation.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Navigation() {

    const activate=(e)=>{
        e.target.className=e.target.className+' active';
    }

    return (
        <div>
        <Navbar collapseOnSelect expand="lg" variant="light">

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand className='ml-auto'>

            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className='navItem' onClick={activate} ><Link to='/about'>קצת עלי</Link></Nav.Link>
                    <Nav.Link className='navItem'><Link to='/pregnency'>צילומי הריון</Link></Nav.Link>
                    <Nav.Link className='navItem' ><Link to='/newborn'>צילומי תינוקות</Link></Nav.Link>
                    <Nav.Link className='navItem' ><Link to='/oneYear'> צילומי גיל שנה</Link></Nav.Link>
                    <Nav.Link className='navItem'><Link to='/pricing'>מחירון</Link></Nav.Link>
                    <Nav.Link className='navItem'><Link to='/contact'>צור קשר</Link></Nav.Link>
                </Nav>
                <Nav className='icons'>
                    <Nav.Link className='iconLink' id='instagram-icon' target="blank" href="https://www.instagram.com/invites/contact/?i=1ksumqvwmfx9z&utm_content=bzgx5l3‎‏"><i className="fab fa-instagram-square"></i></Nav.Link>
                    <Nav.Link className='iconLink' id='whatsapp-icon' target="blank" href="https://wa.me/<972523152214>"><i className="fab fa-whatsapp-square"></i></Nav.Link>
                    <Nav.Link className='iconLink' id='phone-icon' href="tel:052-315-2214"><i className="fa fa-phone"></i></Nav.Link>
                    <Nav.Link className='iconLink' id='facebook-icon' target="blank" href="https://www.facebook.com/Natali-Sosdov-Photography-נטלי-סוסדוב-צלמת-113894306680139/"><i className="fab fa-facebook-square"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>  
        </div>
    )
}
