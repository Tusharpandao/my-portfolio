'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-center max-w-2xl">
          Hello! I’m Tushar Pandao, a Full-Stack Java Developer with a strong passion for building efficient and scalable web applications.
        </p>
        <p className="text-lg text-center max-w-2xl mt-4">
          I have hands-on experience with Java, Spring Boot, React, and various web technologies. I enjoy solving problems, collaborating with teams, and continuously improving my skills.
        </p>
        <h2 className="text-2xl font-bold mt-8">Skills</h2>
        <ul className="list-disc mt-4 text-lg max-w-2xl">
          <li>Programming Languages: Java, Java EE, JavaScript, SQL</li>
          <li>Web Technologies: HTML, CSS, React JS, JSON, Bootstrap 5, Tailwind CSS</li>
          <li>Frameworks: Spring Boot, Spring MVC, Hibernate, JPA</li>
          <li>Databases: MongoDB, MySQL, PostgreSQL</li>
          <li>Tools: Jenkins, Git, GitHub, IntelliJ IDEA, MySQL Workbench, Postman</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
