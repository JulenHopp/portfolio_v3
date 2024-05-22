import React from 'react';
import ContactForm from '/src/components/Contact/ContactForm';
import ContactInfo from '/src/components/Contact/ContactInfo';

export default function Contact() {
  return (
    <>
      <div>
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}