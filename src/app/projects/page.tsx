'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Urbane Cart',
    description: 'A user-friendly e-commerce application offering a seamless shopping experience with secure payment options and order tracking.',
    link: 'https://github.com/Tusharpandao/urbane-cart',
  },
  {
    title: 'Student Data Management System (SDMS)',
    description: 'A Spring Boot-based application for efficient management of student records with a secure and user-friendly interface.',
    link: 'https://github.com/Tusharpandao/sdms',
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
