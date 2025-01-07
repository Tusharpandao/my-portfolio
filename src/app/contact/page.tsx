'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponse('Submitting...');
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setResponse('Email sent successfully!');
      else setResponse('Failed to send email.');
    } catch (error) {
      setResponse('Error sending email.');
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 mb-4 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 border rounded"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 mb-4 border rounded"
            rows={5}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
            Send
          </button>
        </form>
        <p className="mt-4">{response}</p>
      </main>
      <Footer />
    </>
  );
}
