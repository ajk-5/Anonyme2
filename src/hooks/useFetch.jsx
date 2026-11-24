import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [res, setRes] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();

    // On récupère les données de l'API
    async function getData() {
      try {
        const req = await fetch(url, {
          signal: ctrl.signal
        });

        if (!req.ok) {
          throw new Error("Erreur HTTP : " + req.status);
        }

        const data = await req.json();

        if (!ctrl.signal.aborted) {
          setRes({ url, data, err: null });
        }
      } catch (e) {
        if (!ctrl.signal.aborted) {
          setRes({ url, data: null, err: e.message });
        }
      }
    }

    getData();

    // On annule la requête si nécessaire
    return () => ctrl.abort();
  }, [url]);

  const load = res?.url !== url;

  return {
    data: load ? null : res.data,
    err: load ? null : res.err,
    load
  };
}