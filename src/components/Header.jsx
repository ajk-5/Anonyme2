import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-nav">
      <nav className="container d-flex flex-wrap align-items-center justify-content-between py-4 gap-4">

        <Link to="/" className="text-decoration-none">
          <span className="logo fs-3 d-block">
            WEBCRAFT.
          </span>

          <span className="sous-titre">
            Solutions
          </span>
        </Link>

        <div className="d-flex flex-wrap align-items-center gap-4">

          <NavLink to="/" className="nav-lien">
            Accueil
          </NavLink>

          <Link to="/#projets" className="nav-lien">
            Projets
          </Link>

          <Link to="/#formations" className="nav-lien">
            Formations
          </Link>

          <NavLink
            to="/inscription"
            className="btn btn-outline-primary px-4 py-2"
          >
            S'inscrire ↗
          </NavLink>

        </div>
      </nav>
    </header>
  );
}