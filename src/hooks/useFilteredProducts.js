import { useSearchParams } from "react-router-dom";
import { FILTER_OPTIONS } from "../constants/strings";
import { useMemo } from "react";

export default function useFilteredProducts(items) {
  const [searchParams] = useSearchParams();

  const categoryParam = searchParams.get("category") || "";
  const sortParam = searchParams.get("sort") || "";

  const selectedOption = FILTER_OPTIONS.find(
    (opt) => opt.value === categoryParam,
  );

  const categoryName = selectedOption ? selectedOption.text : categoryParam;

  const finalResults = useMemo(() => {
    let results = items.filter((item) => {
      if (!categoryParam || categoryParam === "all") return true;
      return item.category.toLowerCase() === categoryName.toLowerCase();
    });

    results.sort((a, b) => {
      if (sortParam === "price-asc" || sortParam === "") {
        return a.price - b.price;
      }
      if (sortParam === "price-desc") {
        return b.price - a.price;
      }
      if (sortParam === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortParam === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    return results;
  }, [items, categoryName, categoryParam, sortParam]);

  return finalResults;
}
