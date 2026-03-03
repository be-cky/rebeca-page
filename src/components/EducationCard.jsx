export default function EducationCard({ image, educationTitle, institution, date, description }) {
  return (
    <article className="card brand-surface border-0 shadow-sm overflow-hidden">
      <div className="row g-0 align-items-stretch">
        <div className="col-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-center bg-white">
          <img
            src={image}
            alt={educationTitle}
            className="w-100"
            style={{ objectFit: "contain", maxHeight: "180px", padding: "0.75rem" }}
          />
        </div>

        <div className="col-12 col-md-8 col-lg-9">
          <div className="card-body d-flex flex-column justify-content-center h-100">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-1 mb-1">
              <h2 className="h5 card-title mb-0">{educationTitle}</h2>
              <p className="mb-0 text-muted fw-medium">{institution}</p>
            </div>
            <p className="mb-2 small text-secondary">{date}</p>
            <p className="mb-0">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}