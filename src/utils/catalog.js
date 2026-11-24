/**
*Récupère le nom d'une valeur ou d'un objet.
 */
export function getNom(val) {
  if (val == null) return "";

  if (typeof val === "object") {
    return String(val.name ?? val.label ?? val.title ?? val.id ?? "");
  }

  return String(val);
}

/**
 * Retrouve le nom correspondant à un identifiant.
 */
function getLabel(val, liste = []) {
  const id = String(val?.id ?? val ?? "");

  const opt = liste.find((o) =>
    String(o?.id ?? o) === id ||
    getNom(o) === getNom(val)
  );

  return getNom(opt ?? val);
}

/** 
 *Prépare les données pour les cartes.
 */
export function formatItem(item, data) {
  return {
    id: item.id,
    titre: item.title ?? item.name ?? "",
    desc: item.description ?? "",
    img: item.image ?? item.imageUrl ?? "",
    cat: getLabel(item.category, data.categories),
    niveau: getLabel(item.level, data.levels),
    techs: [...new Set(
      (item.technologies ?? []).map((t) =>
        getLabel(t, data.technologies)
      ).filter(Boolean)
    )]
  };
}

/**
 * Prépare les options des filtres.
 */
export function getOptions(liste = []) {
  return [...new Set(liste.map(getNom).filter(Boolean))]
    .map((nom) => ({
      value: nom,
      label: nom
    }));
}