import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();

    setLoad(true);
    setErr(null);
    setData(null);

    // On récupère les données de l'API
    async function getData() {
      try {
        const res = await fetch(url, {
          signal: ctrl.signal
        });

        if (!res.ok) {
          throw new Error("Erreur HTTP : " + res.status);
        }

        const json = await res.json();

        if (!ctrl.signal.aborted) {
          setData(json);
        }
      } catch (e) {
        if (!ctrl.signal.aborted) {
          setErr(e.message);
        }
      } finally {
        if (!ctrl.signal.aborted) {
          setLoad(false);
        }
      }
    }

    getData();

    // On annule la requête si le composant est démonté
    return () => ctrl.abort();
  }, [url]);

  return { data, load, err };
}