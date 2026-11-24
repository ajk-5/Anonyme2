/**
 * Carte commune aux projets et aux formations.
 * @param {object} props
 * @param {object} props.item
 * @param {function(object): void} props.onClick
 */
export default function Card({ item, onClick }) {
  return (
    <article className="card craft-card h-100 overflow-hidden">

      {item.img && (
        <div className="ratio ratio-16x9 overflow-hidden">
          <img
            src={item.img}
            alt={item.titre}
            className="object-fit-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="card-body d-flex flex-column p-4">

        <p className="small text-uppercase text-primary-emphasis mb-2">
          {item.cat}
        </p>

        <h5 className="card-title mb-3">
          {item.titre}
        </h5>

        <p className="text-secondary">
          {item.desc}
        </p>

        {item.niveau && (
          <p className="small">
            Niveau : {item.niveau}
          </p>
        )}

        <div className="d-flex flex-wrap gap-2 mb-4">
          {item.techs.map((tech) => (
            <span
              key={tech}
              className="badge bg-primary-subtle text-primary-emphasis fw-normal rounded-0 px-3 py-2"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          className="btn btn-outline-primary mt-auto py-2"
          onClick={() => onClick(item)}
        >
          Voir les détails
        </button>

      </div>
    </article>
  );
}