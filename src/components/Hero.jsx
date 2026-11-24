export default function Hero() {
  return (
    <section className="hero text-center py-5">
      <div className="container hero-content py-5">

        <h1 className="hero-titre mb-2">
          WEBCRAFT
        </h1>

        <p className="hero-sous-titre mb-4">
          SOLUTIONS
        </p>

        <div className="hero-ligne mx-auto mb-4" />

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a href="#projets" className="btn btn-primary px-4 py-3">
            Nos projets
          </a>

          <a href="#formations" className="btn btn-outline-primary px-4 py-3">
            Nos formations
          </a>
        </div>

      </div>
    </section>
  );
}