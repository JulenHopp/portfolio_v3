import React from 'react';
import './Contact.css';
import ContactForm from '/src/components/Contact/ContactForm';
import ContactInfo from '/src/components/Contact/ContactInfo';

export default function Contact() {
  return (
    <>
      <div className='container'>
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}