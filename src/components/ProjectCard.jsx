export default function ProjectCard({ title, summary, image, github, demo, itchio }) {
  const projectLink = demo || itchio;

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <article className="card brand-surface h-100 shadow-sm border-0">
        <img src={image} className="card-img-top" alt={title} />

        <div className="card-body d-flex flex-column">
          <h2 className="h5 card-title">{title}</h2>
          <p className="card-text text-muted flex-grow-1">{summary}</p>

          <div className="d-flex gap-2 mt-2">
            <a href={github} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm">
              GitHub
            </a>

            {projectLink ? (
              <a href={projectLink} target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm">
                Try it
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );
}