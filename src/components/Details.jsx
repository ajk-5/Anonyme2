import { Link } from "react-router-dom";

export default function Details({ item, type }) {
  return (
    <>
      {item.img && (
        <img
          src={item.img}
          alt={item.titre}
          className="img-fluid rounded mb-3"
        />
      )}

      <p>{item.desc}</p>

      <p><strong>Catégorie :</strong> {item.cat}</p>

      {item.niveau && (
        <p><strong>Niveau :</strong> {item.niveau}</p>
      )}

      <p>
        <strong>Technologies :</strong> {item.techs.join(", ")}
      </p>

      {type === "courses" && (
        <Link
          to={`/inscription?cours=${encodeURIComponent(item.id)}`}
          className="btn btn-primary w-100"
        >
          S'inscrire à cette formation
        </Link>
      )}
    </>
  );
}