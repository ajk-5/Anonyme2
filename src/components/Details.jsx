import { Link } from "react-router-dom";

/**
 * Affiche les détails d'un projet ou d'une formation.
 * @param {object} props
 * @param {object} props.item
 * @param {"projects" | "courses"} props.type
 */
export default function Details({ item, type }) {
  return (
    <div className="row g-4 align-items-start">

      {item.img && (
        <div className="col-md-5">
          <img
            src={item.img}
            alt={item.titre}
            className="img-fluid detail-img w-100"
          />
        </div>
      )}

      <div className={item.img ? "col-md-7" : "col-12"}>

        <p className="text-uppercase text-primary-emphasis small mb-2">
          {type === "courses" ? "Formation" : "Projet"}
        </p>

        <p className="mb-3">{item.desc}</p>

        <hr className="my-2" />

        <div className="d-flex justify-content-between gap-2 py-1">
          <span className="text-secondary">Catégorie</span>
          <span>{item.cat}</span>
        </div>

        {item.niveau && (
          <div className="d-flex justify-content-between gap-2 py-1">
            <span className="text-secondary">Niveau</span>
            <span>{item.niveau}</span>
          </div>
        )}

        <hr className="my-2" />

        <p className="small text-secondary mb-2">
          Technologies
        </p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {item.techs.map((tech) => (
            <span
              key={tech}
              className="badge bg-primary-subtle text-primary-emphasis rounded-0 fw-normal px-3 py-2"
            >
              {tech}
            </span>
          ))}
        </div>

        {type === "courses" && (
          <Link
            to={`/inscription?cours=${encodeURIComponent(item.id)}`}
            className="btn btn-primary w-100 py-2"
          >
            S'inscrire à cette formation
          </Link>
        )}

      </div>
    </div>
  );
}