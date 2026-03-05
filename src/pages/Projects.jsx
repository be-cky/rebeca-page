import ProjectCard from "../components/ProjectCard.jsx";
import periodicTableImage from "../assets/projects/periodicTable.png";
export default function Projects() {
  const projects = [
    {
      title: "Periodic Table",
      summary:
        "Interactive periodic table with detailed information about each element and category-based filters",
      image: periodicTableImage,
      github: "https://github.com/be-cky/periodic-table",
      demo: "https://be-cky.github.io/periodic-table/",
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
        <p className="text-muted mb-0">Below you can find a selection of projects I have developed during my studies and personal learning. They reflect my interest in software development and my continuous effort to improve my technical skills.</p>
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