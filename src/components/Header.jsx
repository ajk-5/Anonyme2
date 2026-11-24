import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-dark text-white">
      <nav className="container d-flex flex-wrap align-items-center justify-content-between py-3 gap-3">

        <Link to="/" className="text-white text-decoration-none fw-bold fs-4">
          WebCraft Solutions
        </Link>

        <div className="d-flex flex-wrap align-items-center gap-3">
          <NavLink to="/" className="text-white text-decoration-none">
            Accueil
          </NavLink>

          <Link to="/#projets" className="text-white text-decoration-none">
            Projets
          </Link>

          <Link to="/#formations" className="text-white text-decoration-none">
            Formations
          </Link>

          <NavLink to="/inscription" className="btn btn-primary">
            Inscription
          </NavLink>
        </div>

      </nav>
    </header>
  );
}