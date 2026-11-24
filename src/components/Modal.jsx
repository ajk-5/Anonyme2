import { useEffect, useRef } from "react";

/**
 * Fenêtre modale réutilisable.
 * @param {object} props
 * @param {string} props.titre
 * @param {import("react").ReactNode} props.children
 * @param {() => void} props.onClose
 */
export default function Modal({ titre, children, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && !ref.current.open) {
      ref.current.showModal();
    }
  }, []);

  return (
    <dialog
      ref={ref}
      className="modal-dialog modal-luxe border-0 p-0 shadow-lg"
      aria-label={titre}
      onClose={onClose}
    >
      <div className="modal-content rounded-0 border-0">

        <div className="modal-header px-4 py-3">
          <h4 className="modal-title">{titre}</h4>

          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Fermer"
            onClick={() => ref.current.close()}
          />
        </div>

        <div className="modal-body p-3 p-md-4">
          {children}
        </div>

        <div className="modal-footer px-4 py-2">
          <button
            type="button"
            className="btn btn-outline-primary px-4"
            onClick={() => ref.current.close()}
          >
            Fermer
          </button>
        </div>

      </div>
    </dialog>
  );
}