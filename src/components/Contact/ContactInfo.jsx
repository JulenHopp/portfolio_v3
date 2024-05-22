import React from 'react';	
import './ContactInfo.css';

export default function ContactInfo() {
    return (
        <div className="contact-info">
            <div className="contact-section">
                <h3 className="contact-title">Contact Information</h3>
                <p className='contact-subTitle'>Feel free to reach out for collaborations or inquiries!</p>
                <p className="contact-detail"><b>Phone:</b><br /> +52 (961) 117 3308</p>
                <p className="contact-detail"><b>Email:</b><br /> jhm_e@outlook.com</p>
                <p className="contact-detail"><b>LinkedIn:</b><br /> linkedin.com/in/julenhopp</p>
                <p className="contact-detail"><b>GitHub:</b><br /> github.com/JulenHopp</p>
            </div>
        </div>
    );
}
