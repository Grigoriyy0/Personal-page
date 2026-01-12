import React from 'react';
import './Skills.css';

function Skills() {
    const skills = {
        'Programming languages': ['C#', 'Go', 'Python'],
        'Frameworks': ['ASP.NET', 'EFCore', 'React'],
        'Data bases': ['PostgreSQL'],
        'Tools': ['Docker', 'Github', 'Git', 'Kafka'],
        'Practices': ['REST API', 'SOLID', 'Architectures', 'OOP']
    };

    return (
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                {Object.entries(skills).map(([category, items]) => (
                    <div className="skill-category" key={category}>
                        <h3>{category}</h3>
                        <div className="skill-items">
                            {items.map((skill) => (
                                <span className="skill-tag" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;