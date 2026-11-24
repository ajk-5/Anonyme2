import { useSearchParams } from "react-router-dom";
import InscriptionForm from "../components/InscriptionForm";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { API_URLS } from "../config/api";
import { formatItem } from "../utils/catalog";

export default function InscriptionPage() {
  const { data, load, err } = useFetch(API_URLS.courses);
  const [params] = useSearchParams();

  const cours = (data?.courses ?? []).map((c) =>
    formatItem(c, data)
  );

  const id = params.get("cours");

  const choix = cours.some((c) => String(c.id) === id)
    ? id
    : "";

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">

          <div className="card shadow-sm">
            <div className="card-body p-4">

              <h1 className="text-center mb-3">
                Inscription
              </h1>

              <p className="text-secondary text-center mb-4">
                Inscrivez-vous à une de nos formations.
              </p>

              {load && <Loader />}

              {err && (
                <p className="border border-danger text-danger rounded p-3">
                  {err}
                </p>
              )}

              {!load && !err && cours.length > 0 && (
                <InscriptionForm
                  key={choix}
                  cours={cours}
                  choix={choix}
                />
              )}

              {!load && !err && cours.length === 0 && (
                <p>Aucune formation disponible.</p>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}