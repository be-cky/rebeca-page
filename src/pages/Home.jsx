export default function Home() {
  return (
    <section
      className="d-flex align-items-center"
      style={{ minHeight: "75vh", paddingTop: "4rem", paddingBottom: "2rem" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="p-4 p-md-5 rounded-4"
              style={{
                background: "rgba(255, 255, 255, 0.82)",
                backdropFilter: "blur(4px)",
              }}
            >
              <p className="text-uppercase fw-semibold text-secondary mb-2">
                Welcome
              </p>
              <h1 className="display-4 fw-bold mb-2">Hi! I&apos;m Rebeca</h1>
              <h2 className="h3 text-dark-emphasis mb-4">Software Engineer</h2>

              <p className="lead mb-4">
                Junior Software Engineer with a background in Java, React, and web
                development, as well as training in requirements analysis and
                software modeling. Experience gained through academic projects and
                professional internships.
              </p>

              <div className="row g-4 text-start">
                <div className="col-md-6">
                  <h3 className="h5 fw-bold">Languages</h3>
                  <p className="mb-1">Java, C#, C++, C, Python</p>
                  <p className="mb-0">HTML5, CSS3, JavaScript</p>
                </div>

                <div className="col-md-6">
                  <h3 className="h5 fw-bold">Frameworks</h3>
                  <p className="mb-1">React</p>
                  <p className="mb-0">Spring Boot</p>
                </div>

                <div className="col-md-6">
                  <h3 className="h5 fw-bold">Databases</h3>
                  <p className="mb-1">Oracle Database (SQL)</p>
                  <p className="mb-0">MongoDB (NoSQL)</p>
                </div>

                <div className="col-md-6">
                  <h3 className="h5 fw-bold">UML</h3>
                  <p className="mb-1">Use Cases</p>
                  <p className="mb-1">Requirements Analysis</p>
                  <p className="mb-0">User Stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}