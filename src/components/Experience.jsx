import React from 'react';
import './Experience.css';

function Experience() {
    const experiences = [
        {
            company: 'IRZ',
            position: 'Backend engineer',
            period: '2024 - now',
            description: 'Automated business processes & Contributed to inner infrastructure development',
            achievements: [
                'Designed and implemented backend services for an internal enterprise portal used for automation of business processes',
                'Took ownership of features end-to-end: requirements clarification, API design, implementation, testing, and deployment',
                'Automated internal workflows, reducing manual operations and saving 10+ hours weekly',
                'Identified and resolved performance and maintainability issues in existing business logic'
            ],
            technologies: ['C#', 'ASP.NET Core', 'EFCore', 'PostgreSQL', 'Git', 'React', 'Docker']
        }
    ];

    return (
        <section className="experience" id="experience">
            <h2>Work experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-marker">
                            <div className="marker-circle"></div>
                            {index < experiences.length - 1 && <div className="timeline-line"></div>}
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <div>
                                    <h3>{exp.position}</h3>
                                    <p className="company">{exp.company}</p>
                                </div>
                                <span className="period">{exp.period}</span>
                            </div>
                            <p className="description">{exp.description}</p>

                            <div className="achievements">
                                <h4>Achievements:</h4>
                                <ul>
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="technologies">
                                <h4>Technology stack:</h4>
                                <div className="tech-tags">
                                    {exp.technologies.map((tech) => (
                                        <span className="tech-tag" key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;