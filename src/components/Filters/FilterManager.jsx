import { useSearchParams } from "react-router-dom";
import { FILTER_OPTIONS, SORT_OPTIONS } from "../../constants/strings";
import FilterOption from "./FilterOption";

export default function FilterManager() {
  const [filterParams, setFilterParams] = useSearchParams();
  const currentSort = filterParams.get("sort") || "";
  const currentFilter = filterParams.get("category") || "";

  function handleChanged(newValue, filter) {
    const newParams = new URLSearchParams(filterParams);
    if (newValue && newValue !== "all") {
      newParams.set(filter, newValue);
    } else {
      newParams.delete(filter);
    }

    setFilterParams(newParams);
  }

  return (
    <div className="filter-container">
      <FilterOption
        filterOptions={SORT_OPTIONS}
        message={"Sort by"}
        value={currentSort}
        onChange={(name) => handleChanged(name, "sort")}
      />
      <FilterOption
        filterOptions={FILTER_OPTIONS}
        message={"Category"}
        value={currentFilter}
        onChange={(name) => handleChanged(name, "category")}
      />
    </div>
  );
}
