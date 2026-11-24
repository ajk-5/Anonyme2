import { useState } from "react";

export default function useSearch(items) {
  const [rech, setRech] = useState("");
  const [vals, setVals] = useState({});

  function setFiltre(nom, val) {
    setVals((prev) => ({
      ...prev,
      [nom]: val
    }));
  }

  function reset() {
    setRech("");
    setVals({});
  }

  const mot = rech.trim().toLowerCase();

  // On recherche dans le titre, la description et les technologies
  const liste = items.filter((item) => {
    const txt = [
      item.titre,
      item.desc,
      item.cat,
      ...item.techs
    ].join(" ").toLowerCase();

    if (!txt.includes(mot)) return false;

    // On vérifie les filtres sélectionnés
    return Object.entries(vals).every(([nom, val]) => {
      if (!val) return true;

      const champ = item[nom];

      return Array.isArray(champ)
        ? champ.includes(val)
        : champ === val;
    });
  });

  return {
    rech,
    setRech,
    vals,
    setFiltre,
    liste,
    reset
  };
}