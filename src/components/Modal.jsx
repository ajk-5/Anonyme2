import { useEffect, useRef } from "react";

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
      className="modal-dialog rounded border-0 shadow p-0"
      aria-label={titre}
      onClose={onClose}
    >
      <div className="modal-content">

        <div className="modal-header p-3">
          <h5 className="modal-title">{titre}</h5>

          <button
            type="button"
            className="btn-close"
            aria-label="Fermer"
            onClick={() => ref.current.close()}
          />
        </div>

        <div className="modal-body p-3">
          {children}
        </div>

        <div className="modal-footer p-3">
          <button
            className="btn btn-secondary"
            onClick={() => ref.current.close()}
          >
            Fermer
          </button>
        </div>

      </div>
    </dialog>
  );
}