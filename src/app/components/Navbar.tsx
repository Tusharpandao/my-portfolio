import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4 justify-between  w-full">
       {/* <div className="flex space-x-4 justify-between "> */}
       <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
       {/* </div> */}
        
        <li>
          {/* Add Download Resume Link */}  
          <a 
            href="/resume/Tushar_Pandao_Resume.pdf" 
            download="Tushar_Pandao_Resume.pdf" 
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
