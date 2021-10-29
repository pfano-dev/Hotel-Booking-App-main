import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
    return (
        <div>
            <Navbar dark color="white" expand="lg">
                <div className="container">
                  
                    <NavbarBrand href="/" ><h1 style={{marginRight:"30rem",color:'black'}}>Drew hotel</h1></NavbarBrand>
                    <NavbarToggler style={{background:'#90a4ae'}} onClick={this.navToggle}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/accomodation" className="nav-link active"><h5 style={{color:'black'}}>Home</h5></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/" className="nav-link active"><h5 style={{color:'black'}}>Accomodation</h5></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/rooms" className="nav-link active"><h5 style={{color:'black'}}>Rooms</h5></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="nav-link active"><h5 style={{color:'black'}}>About</h5></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="nav-link active"><h5 style={{color:'black'}}>Contact</h5></Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/Login" className="nav-link active"><h5 style={{color:'black'}}>mybooking</h5></Link>
                        </NavItem>
                    
                    </Nav>
                    </Collapse>

                </div>
                {/* <NavbarBrand href="/">Momentwala</NavbarBrand> */}
            </Navbar>
        </div>
    );
    }

}

