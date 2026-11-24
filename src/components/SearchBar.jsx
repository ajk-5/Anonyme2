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