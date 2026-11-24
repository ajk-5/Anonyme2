import useFetch from "../hooks/useFetch.jsx";
import { API } from "../config/api";

export default function Home() {
  const proj = useFetch(API.projects);
  const cours = useFetch(API.courses);

  return (
    <main>
      <h1>WebCraft Solutions</h1>

      <section>
        <h2>Nos projets</h2>

        {proj.load && <p>Chargement...</p>}
        {proj.err && <p>{proj.err}</p>}

        {proj.data && (
          <pre>{JSON.stringify(proj.data, null, 2)}</pre>
        )}
      </section>

      <section>
        <h2>Nos formations</h2>

        {cours.load && <p>Chargement...</p>}
        {cours.err && <p>{cours.err}</p>}

        {cours.data && (
          <pre>{JSON.stringify(cours.data, null, 2)}</pre>
        )}
      </section>
    </main>
  );
}