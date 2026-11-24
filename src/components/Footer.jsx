const annee = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-nav text-center py-4 mt-auto">
      <div className="container">

        <h4 className="logo mb-1">
          WEBCRAFT
        </h4>

        <p className="sous-titre mb-3">
          Solutions
        </p>

        <hr className="border-secondary" />

        <p className="text-white-50 small mb-0">
          © {annee} WebCraft Solutions.
          Tous droits réservés.
        </p>

      </div>
    </footer>
  );
}