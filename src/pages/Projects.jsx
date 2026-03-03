import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const projects = [
    {
      title: "Pixel Quest",
      summary:
        "Juego 2D de aventura con mecánicas simples de combate y exploración. Construido para practicar diseño de niveles.",
      image: "https://via.placeholder.com/800x450?text=Pixel+Quest",
      github: "https://github.com/tu-usuario/pixel-quest",
      itchio: "https://tu-usuario.itch.io/pixel-quest",
    },
    {
      title: "TaskFlow App",
      summary:
        "Aplicación web para organizar tareas por prioridad y estado con una interfaz limpia y rápida.",
      image: "https://via.placeholder.com/800x450?text=TaskFlow+App",
      github: "https://github.com/tu-usuario/taskflow-app",
      itchio: "",
    },
    {
      title: "Cosmic Runner",
      summary:
        "Prototipo de juego arcade estilo endless runner con mejoras de rendimiento y controles responsivos.",
      image: "https://via.placeholder.com/800x450?text=Cosmic+Runner",
      github: "https://github.com/tu-usuario/cosmic-runner",
      itchio: "https://tu-usuario.itch.io/cosmic-runner",
    },
  ];

  return (
    <section
      className="w-100 d-flex justify-content-center"
      style={{ minHeight: "calc(100vh - 5.5rem)" }}
    >
      <div className="w-100" style={{ maxWidth: "1200px", marginTop: "5rem" }}>
      <div className="text-center mb-4">
        <h1 className="h2 mb-2">Projects</h1>
        <p className="text-muted mb-0">Aquí puedes mostrar tus proyectos con resumen y enlaces de publicación.</p>
      </div>

      <div className="row g-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      </div>
    </section>
  );
}