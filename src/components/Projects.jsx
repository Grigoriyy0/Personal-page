import React from 'react';
import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'CRM-like platform for private tutors',
            description: 'A modern learning management platform: student and lesson tracking, scheduling, analytics, and notifications. The project focuses on Clean Architecture, modularity, and simple Docker-based deployment.',
            technologies: ['C#', 'ASP.NET Core', 'EFCore', 'PostgreSQL', 'Docker', 'RabbitMQ'],
        },
        {
            title: 'Distributed payment system (Ongoing)',
            description: 'Scalable custom payment system. Project aimed to study microservices architecture & patterns.',
            technologies: ['ASP.NET Core', 'EFCore', 'Kafka', 'Microservices'],
        },
    ];

    return (
        <section className="projects" id="projects">
            <h2>Personal projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tech">
                            {project.technologies.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;