import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>I`m Grigorii, backend developer</h1>
                        <p className="subtitle">Build reliable and scalable solutions</p>
                        <p className="description">
                            Have experience with process automation & explore different
                            patterns and architectures, follow best practices
                        </p>
                        <div className="hero-buttons">
                            <a href="#contact" className="btn">Connect with me</a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="code-snippet">
              <pre>
{`Strong in backend fundamentals, 
system design thinking, 
and pragmatic architecture decisions.
`}
              </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;