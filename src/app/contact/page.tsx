'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Toaster, toast, Toast } from 'react-hot-toast';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [state, handleSubmit] = useForm("xannlkwg");

  useEffect(() => {
    if (state.succeeded) {
      toast.custom((t: Toast) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src= {undefined}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Thank you for contacting me.
                  I will be contacting you shortly
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }
  }, [state.succeeded]); // This effect runs when `state.succeeded` changes

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          {/* Name Field */}
          <label htmlFor="name" className="block mb-2 font-semibold">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full p-2 mb-4 text-black border rounded"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* Email Field */}
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full p-2 mb-4 text-black border rounded"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Message Field */}
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full p-2 mb-4 text-black border rounded"
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full p-2 bg-blue-500 text-black rounded"
          >
            Submit
          </button>
        </form>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
