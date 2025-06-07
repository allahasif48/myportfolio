import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_public_key')
      .then(() => setIsSent(true), (error) => console.log(error.text));
  };

  return (
    <section className="py-20 px-4 md:px-12 bg-blue-50 text-blue-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        {isSent ? (
          <p className="text-green-600">Thanks! Your message has been sent.</p>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input type="text" name="name" placeholder="Your Name" required className="w-full border border-blue-300 px-4 py-3 rounded-md" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full border border-blue-300 px-4 py-3 rounded-md" />
            <textarea name="message" placeholder="Your Message" required className="w-full border border-blue-300 px-4 py-3 rounded-md"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;