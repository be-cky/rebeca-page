import linkedinIcon from "../assets/social/LI-In-Bug.png";
import gmailIcon from "../assets/social/official-gmail-icon-2020-.svg";
import githubIcon from "../assets/social/GitHub_Invertocat_Black.svg";
import itchioIcon from "../assets/social/itchio-logo-textless-black.svg";

export default function Contact() {
  return (
    <section
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ minHeight: "calc(100vh - 5.5rem)" }}
    >
      <div className="card brand-surface shadow-sm border-0 mx-auto" style={{ maxWidth: "680px", width: "100%" }}>
        <div className="card-body p-4 p-md-5 text-center">
          <h1 className="h2 mb-3">Contact</h1>
          <p className="text-muted mb-4">
            If you’d like to see more of my work or get in contact, feel free to check out the links below. You can find my projects, profiles, and ways to reach me there.
          </p>

          <div className="d-grid gap-3">
            <a
              href="https://www.linkedin.com/in/rebecafernandez-w"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary d-flex align-items-center justify-content-center"
            >
              <img src={linkedinIcon} alt="LinkedIn" width="20" height="20" className="me-2" />
              <span>linkedin.com/in/rebecafernandez-w</span>
            </a>

            <a
              href="mailto:rebeca.fernandez.w@gmail.com"
              className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
            >
              <img src={gmailIcon} alt="Email" width="20" height="20" className="me-2" />
              <span>rebeca.fernandez.w@gmail.com</span>
            </a>

            <a
              href="https://github.com/be-cky"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark d-flex align-items-center justify-content-center"
            >
              <img src={githubIcon} alt="GitHub" width="20" height="20" className="me-2" />
              <span>github.com/be-cky</span>
            </a>

            <a
              href="https://owo-becky.itch.io/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-danger d-flex align-items-center justify-content-center"
            >
              <img src={itchioIcon} alt="Itch.io" width="20" height="20" className="me-2" />
              <span>owo-becky.itch.io</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}