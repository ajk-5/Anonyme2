import useFetch from "../hooks/UseFetch";
import { API } from "../config/api";

export default function Home() {
  const proj = useFetch(API.projects);
  const cours = useFetch(API.courses);

  return (
    <main className="container py-5">
      <h1 className="text-center mb-5">
        WebCraft Solutions
      </h1>

      <section className="mb-5">
        <h2>Nos projets</h2>

        {proj.load && <p>Chargement...</p>}

        {proj.err && (
          <div className="alert alert-danger">
            {proj.err}
          </div>
        )}

        {proj.data && (
          <pre>{JSON.stringify(proj.data, null, 2)}</pre>
        )}
      </section>

      <section className="mb-5">
        <h2>Nos formations</h2>

        {cours.load && <p>Chargement...</p>}

        {cours.err && (
          <div className="alert alert-danger">
            {cours.err}
          </div>
        )}

        {cours.data && (
          <pre>{JSON.stringify(cours.data, null, 2)}</pre>
        )}
      </section>
    </main>
  );
}