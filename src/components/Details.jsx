import { Link } from "react-router-dom";

/**
 * Affiche les détails d'un projet ou d'une formation.
 * @param {object} props
 * @param {object} props.item
 * @param {"projects" | "courses"} props.type
 */
export default function Details({ item, type }) {
  return (
    <>
      {item.img && (
        <div className="ratio ratio-16x9 mb-4 overflow-hidden">
          <img
            src={item.img}
            alt={item.titre}
            className="object-fit-cover"
          />
        </div>
      )}

      <p className="text-uppercase text-primary-emphasis small">
        {type === "courses" ? "Formation" : "Projet"}
      </p>

      <p className="mb-4">
        {item.desc}
      </p>

      <hr />

      <div className="d-flex justify-content-between py-2">
        <span className="text-secondary">Catégorie</span>
        <span>{item.cat}</span>
      </div>

      {item.niveau && (
        <div className="d-flex justify-content-between py-2">
          <span className="text-secondary">Niveau</span>
          <span>{item.niveau}</span>
        </div>
      )}

      <hr />

      <p className="text-secondary small mb-2">
        Technologies
      </p>

      <div className="d-flex flex-wrap gap-2 mb-4">
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
          className="btn btn-primary w-100 py-3"
        >
          S'inscrire à cette formation
        </Link>
      )}
    </>
  );
}