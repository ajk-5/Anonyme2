export default function Card({ item, onClick }) {
  return (
    <div className="card h-100 shadow-sm">

      {item.img && (
        <img
          src={item.img}
          alt={item.titre}
          className="card-img-top"
          loading="lazy"
        />
      )}

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.titre}</h5>

        <p className="text-secondary">{item.cat}</p>

        <p className="card-text">{item.desc}</p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {item.techs.map((tech) => (
            <span key={tech} className="badge bg-primary">
              {tech}
            </span>
          ))}
        </div>

        <button
          className="btn btn-outline-primary mt-auto"
          onClick={() => onClick(item)}
        >
          Voir les détails
        </button>
      </div>

    </div>
  );
}