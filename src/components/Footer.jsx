import React from 'react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>{'Grigorii Kokotkin'}</h3>
                        <p>Build reliable solutions</p>
                    </div>
                    <div className="footer-links">
                        <a href="#home">Main</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contacts</a>
                    </div>
                    <div className="footer-copyright">
                        <p>© {currentYear} Grigorii Kokotkin. All rights reserved.</p>
                        <p className="footer-note">Admire clean code and best practices ❤️</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;