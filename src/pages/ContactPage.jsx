
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6">
      <h1 className="text-5xl font-bold text-white mb-10">Get in Touch</h1>
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <ContactForm />
        </div>
      </div>
    </div>
    
  );
};

export default ContactPage;
