import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Email has been sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { icon: '📧', text: 'grigoriikokotkin@gmail.com' },
        { icon: '📱', text: '+852 5136 3637' },
        { icon: '💼', text: 'linkedin.com/in/grigorii-kokotkin-5b1423336/' },
        { icon: '🐙', text: 'github.com/Grigoriyy0' }
    ];

    return (
        <section className="contact" id="contact">
            <h2>Let`s connect!</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <h3>Контакты</h3>
                    {contactInfo.map((item, index) => (
                        <div className="contact-item" key={index}>
                            <span className="contact-icon">{item.icon}</span>
                            <span>{item.text}</span>
                        </div>
                    ))}
                    <div className="availability">
                        <h4>Availability</h4>
                        <p>✅ Open to work</p>
                        <p>⏱️ Considering both full-time & part-time opportunities</p>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Имя</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder=""
                        />
                    </div>

                    <button type="submit" className="btn">Отправить сообщение</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;