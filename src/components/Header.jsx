import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="logo">
                        <span className="logo-text">{'Grigorii Kokotkin'}</span>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#experience">Experiencez</a></li>
                        <li><a href="#contact">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;