import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        fetch('https://julenhopp.com//backend/contact.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);
            return response.json(); // Attempt to parse the JSON response
        })
        .then(data => {
            console.log('Response data:', data);
            if (data && data.message) {
                alert(data.message);
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Unexpected response format');
            }
            setIsSubmitting(false);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your message. Please try again.');
            setIsSubmitting(false);
        });
    };

    return (
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                ></textarea>
            </div>
            <button type="submit" className="form-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
            </button>
        </form>
    );
};

export default ContactForm;
