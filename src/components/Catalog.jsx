import { useState } from "react";
import Details from "./Details";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import CourseCard from "./CourseCard";
import Loader from "./Loader";
import Modal from "./Modal";

import useFetch from "../hooks/useFetch";
import useSearch from "../hooks/useSearch";
import { formatItem, getOptions } from "../utils/catalog";

export default function Catalog({ url, type, titre, id }) {
  const { data, load, err } = useFetch(url);
  const [sel, setSel] = useState(null);

  const items = (data?.[type] ?? []).map((item) =>
    formatItem(item, data)
  );

  const {
    rech,
    setRech,
    vals,
    setFiltre,
    liste,
    reset
  } = useSearch(items);

  const filters = [
    {
      name: "techs",
      label: "Technologies",
      options: getOptions(data?.technologies)
    },
    {
      name: "cat",
      label: "Catégories",
      options: getOptions(data?.categories)
    }
  ];

  // Le niveau concerne uniquement les formations
  if (type === "courses") {
    filters.push({
      name: "niveau",
      label: "Niveaux",
      options: getOptions(data?.levels)
    });
  }

  return (
    <section id={id} className="mb-5">

      <h2 className="mb-4">{titre}</h2>

      {load && <Loader />}

      {err && (
        <p className="border border-danger text-danger rounded p-3">
          {err}
        </p>
      )}

      {!load && !err && (
        <>
          <div className="d-flex flex-wrap gap-3 mb-4">

            <div className="flex-grow-1">
              <SearchBar
                val={rech}
                onChange={setRech}
                text="Rechercher..."
              />
            </div>

            <FilterBar
              filters={filters}
              vals={vals}
              onChange={setFiltre}
            />

            <button
              className="btn btn-outline-secondary"
              onClick={reset}
            >
              Réinitialiser
            </button>

          </div>

          <p className="text-secondary">
            {liste.length} résultat(s)
          </p>

          <div className="row g-4">

            {liste.map((item) => (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={item.id}
              >
                {type === "projects" ? (
                  <ProjectCard
                    proj={item}
                    onClick={setSel}
                  />
                ) : (
                  <CourseCard
                    cours={item}
                    onClick={setSel}
                  />
                )}
              </div>
            ))}

          </div>

          {liste.length === 0 && (
            <p className="text-center text-secondary py-4">
              Aucun résultat trouvé.
            </p>
          )}
        </>
      )}

      {sel && (
  <Modal
    titre={sel.titre}
    onClose={() => setSel(null)}
  >
    <Details item={sel} type={type} />
  </Modal>
)}

    </section>
  );
}