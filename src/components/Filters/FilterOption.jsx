import "./FilterOption.css";

export default function FilterOption({
  filterOptions,
  message,
  onChange,
  value,
}) {
  return (
    <div className="filter-dropdown">
      <div className="filter-group">
        <label htmlFor="sort-by">{message}</label>
        <select
          id="sort-by"
          className="filter-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {filterOptions.map((filterOption, index) => (
            <option key={`${index}-${message}`} value={filterOption.value}>
              {filterOption.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
