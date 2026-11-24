import { useState } from "react";
import { valider } from "../utils/validation";

export default function InscriptionForm({ cours, choix }) {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    cours: choix || ""
  });

  const [err, setErr] = useState({});
  const [ok, setOk] = useState(false);

  // On met à jour le champ modifié
  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    setErr((prev) => ({
      ...prev,
      [name]: ""
    }));

    setOk(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const erreurs = valider(form);

    if (!cours.some((c) => String(c.id) === form.cours)) {
      erreurs.cours = "Veuillez choisir une formation valide.";
    }

    setErr(erreurs);
    setOk(Object.keys(erreurs).length === 0);
  }

  const champs = [
    { name: "nom", label: "Nom", type: "text" },
    { name: "prenom", label: "Prénom", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "tel", label: "Téléphone", type: "tel" }
  ];

  return (
    <form onSubmit={handleSubmit} noValidate>

      {ok && (
        <p className="border border-success rounded p-3 text-success"
           role="status">
          Votre formulaire a été validé avec succès.
        </p>
      )}

      <div className="row g-3">

        {champs.map((c) => (
          <div className="col-md-6" key={c.name}>

            <label htmlFor={c.name} className="form-label">
              {c.label}
            </label>

            <input
              id={c.name}
              name={c.name}
              type={c.type}
              value={form[c.name]}
              onChange={handleChange}
              className={`form-control ${
                err[c.name] ? "is-invalid" : ""
              }`}
              aria-invalid={Boolean(err[c.name])}
              required
            />

            {err[c.name] && (
              <div className="invalid-feedback">
                {err[c.name]}
              </div>
            )}

          </div>
        ))}

        <div className="col-12">

          <label htmlFor="cours" className="form-label">
            Formation
          </label>

          <select
            id="cours"
            name="cours"
            value={form.cours}
            onChange={handleChange}
            className={`form-select ${
              err.cours ? "is-invalid" : ""
            }`}
            required
          >
            <option value="">Choisir une formation</option>

            {cours.map((c) => (
              <option key={c.id} value={c.id}>
                {c.titre}
              </option>
            ))}
          </select>

          {err.cours && (
            <div className="invalid-feedback">
              {err.cours}
            </div>
          )}

        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            S'inscrire
          </button>
        </div>

      </div>
    </form>
  );
}