import Hero from "../components/Hero";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { API_URLS } from "../config/api";

export default function Home() {
  const proj = useFetch(API_URLS.projects);
  const cours = useFetch(API_URLS.courses);

  return (
    <>
      <Hero />

      <div className="container py-5">

        <section id="projets" className="mb-5">
          <h2 className="mb-4">Nos projets</h2>

          {proj.load && <Loader />}

          {proj.err && (
            <div className="alert alert-danger">
              {proj.err}
            </div>
          )}

          {proj.data && (
            <pre>{JSON.stringify(proj.data, null, 2)}</pre>
          )}
        </section>

        <section id="formations" className="mb-5">
          <h2 className="mb-4">Nos formations</h2>

          {cours.load && <Loader />}

          {cours.err && (
            <div className="alert alert-danger">
              {cours.err}
            </div>
          )}

          {cours.data && (
            <pre>{JSON.stringify(cours.data, null, 2)}</pre>
          )}
        </section>

      </div>
    </>
  );
}