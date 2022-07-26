import React, { Component } from 'react';
//import "./navBar.css";
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Fitment Only</h1>

                    <nav>
                    <ul className="navbar">
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Product">Pieces</Link></li>
                        <li><Link to="/Contact">Contact Us</Link></li>
                    </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default NavBar;