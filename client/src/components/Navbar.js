import React from 'react';
// import axios from 'axios'
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './style.css'

const Navbar = () => {

    return (
        
        <nav className="nav-wrapper">
        {/* burger-menu */}
<div>
				<Menu>
					<a className="menu-item" href="/Home">Home</a>
                    <a className="menu-item" href="/">Shop</a>
                    <a className="menu-item" href="/signup">Sign Up</a>
					<a className="menu-item" href="/login">Login</a>
                    <a className="menu-item" href="/cart">My cart</a>
					
				</Menu>
			</div>

            <div className="container">

                <img className="teamMatePic" src={require("../images/9.jpg")} alt="logo" width="6.9%"></img>
                <Link to="/" className="brand-logo" >Fashion House</Link>


                <ul className="right">

                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    {/* <li><Link to="/login">About Us</Link></li> */}
                    <li><Link to="/comment">comment</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>

                </ul>
            </div>
        </nav>



    )
}

export default Navbar;