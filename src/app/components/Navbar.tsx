'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        
        {/* Mobile menu toggle button */}
        <button
          className="md:hidden p-2 rounded-md bg-gray-700 hover:bg-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Links section */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:space-x-4 mt-4 md:mt-0`}
      >
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li className="md:ml-auto mt-4 md:mt-0">
          {/* Download Resume Link styled like a button */}
          <a
            href="/resume/Tushar_Pandao_Resume.pdf"
            download="Tushar_Pandao_Resume.pdf"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 block text-center"
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
