import Navbar from './components/Navbar';
import Footer from './components/Footer';



export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">I’m Tushar Pandao, a Full-Stack Java Developer from Pune.</p>
        <p className="mt-4 text-lg">I specialize in building scalable web applications using Java, Spring Boot, React, and more.</p>
      </main>
      <Footer />
    </>
   
  );
}
