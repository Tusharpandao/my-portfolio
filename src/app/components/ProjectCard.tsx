type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
  };
  
  export default function ProjectCard({ title, description, link }: ProjectCardProps) {
    return (
      <div className="border rounded shadow p-4 hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    );
  }
  