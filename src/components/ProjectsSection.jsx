import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const projects = [
  {
    id: 1,
    title: "ToDo App",
    description:
      "A task manager built using React.js and TailwindCSS. Create, update, and delete tasks with real-time UI updates.",
    image: "/projects/todo.png",
    tags: ["React", "TailwindCSS", "React Hooks"],
    demoUrl: "",
    githubUrl: "https://github.com/mebeast1/ToDoList",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and TailwindCSS, featuring smooth scroll, animations, and clean layout.",
    image: "/projects/portfolio.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "",
    githubUrl: "https://github.com/mebeast1/Pratik-Portfolio",
  },
  {
    id: 3,
    title: "Employee Management System (In Progress)",
    description:
      "A dashboard-style system with form validation, image upload, department API, and confirmation modal before submission.",
    image: "/projects/employee.png",
    tags: ["React", "TailwindCSS", "React Hook Form"],
    demoUrl: "",
    githubUrl: "https://github.com/mebeast1/pro-manage",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Here are some of my personal and in-progress projects. Each project
          showcases my skills with React, Tailwind, and modern development tools.
        </p>

        {/* Desktop and tablet: grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile: swiper carousel */}
        <div className="md:hidden">
          <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mebeast1"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="group bg-card rounded-xl overflow-hidden shadow-sm card-hover flex flex-col h-full">
    <div className="aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-col flex-grow p-6">
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

      <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

      <div className="flex justify-between items-center mt-auto">
        <div className="flex space-x-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  </div>
);
