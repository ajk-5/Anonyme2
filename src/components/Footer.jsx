export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <p className="mb-1 fw-bold">WebCraft Solutions</p>

      <p className="mb-0 small">
        © {new Date().getFullYear()} WebCraft Solutions.
        Tous droits réservés.
      </p>
    </footer>
  );
}