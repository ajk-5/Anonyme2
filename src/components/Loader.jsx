export default function Loader() {
  return (
    <div className="text-center py-5" role="status">
      <div className="spinner-border text-primary">
        <span className="visually-hidden">
          Chargement...
        </span>
      </div>

      <p className="mt-2">Chargement en cours...</p>
    </div>
  );
}