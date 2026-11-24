export default function Hero() {
  return (
    <section className="hero bg-primary text-white text-center py-5">
      <div className="container hero-content py-5">

        <h1 className="display-4 fw-bold">
          WebCraft Solutions
        </h1>

        <p className="lead mb-4">
          Découvrez nos projets et développez vos compétences
          grâce à nos formations.
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a href="#projets" className="btn btn-light">
            Nos projets
          </a>

          <a href="#formations" className="btn btn-outline-light">
            Nos formations
          </a>
        </div>

      </div>
    </section>
  );
}