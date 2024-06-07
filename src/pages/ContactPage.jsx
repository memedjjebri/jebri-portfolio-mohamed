import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
