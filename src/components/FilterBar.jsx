export default function FilterBar({ filters, vals, onChange }) {
  return (
    <div className="d-flex flex-wrap gap-2">
      {filters.map((f) => (
        <select
          key={f.name}
          className="form-select w-auto"
          aria-label={f.label}
          value={vals[f.name] || ""}
          onChange={(e) => onChange(f.name, e.target.value)}
        >
          <option value="">{f.label}</option>

          {f.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}