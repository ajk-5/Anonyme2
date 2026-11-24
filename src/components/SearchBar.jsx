/**
 * Barre de recherche réutilisable.
 * @param {object} props
 * @param {string} props.val
 * @param {function(string): void} props.onChange
 * @param {string} props.text
 */
export default function SearchBar({ val, onChange, text }) {
  return (
    <input
      type="search"
      className="form-control"
      placeholder={text}
      aria-label={text}
      value={val}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}