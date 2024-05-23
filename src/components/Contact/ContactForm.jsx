import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
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

        fetch('http://julenhopp.com/backend/contact.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            setFormData({ name: '', email: '', message: '' });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Send your message</h3>
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="form-input"
                        placeholder='julenHopp'
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="form-input"
                        placeholder='jhm_e@outlook.com'
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Message:</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        className="form-input form-textarea"
                        placeholder='Type your message here...'
                    ></textarea>
                </div>
                <button type="submit" className="form-button">Send</button>
            </form>
        </>
    );
};

export default ContactForm;
