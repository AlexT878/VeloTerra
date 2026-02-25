import { useSearchParams } from "react-router-dom";
import { FILTER_OPTIONS } from "../constants/strings";
import { useMemo } from "react";
import { ITEMS_PER_PAGE } from "../constants/values";

export default function useFilteredProducts(items) {
  const [searchParams] = useSearchParams();

  const categoryParam = searchParams.get("category") || "";
  const sortParam = searchParams.get("sort") || "";
  const pageParam = searchParams.get("page") || 1;

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
      if (sortParam === "price-asc") {
        return a.price - b.price;
      }
      if (sortParam === "price-desc") {
        return b.price - a.price;
      }
      if (sortParam === "name-asc" || sortParam === "") {
        return a.name.localeCompare(b.name);
      }
      if (sortParam === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    const totalItems = results.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const safePage = Math.max(1, Math.min(pageParam, totalPages || 1));
    const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
    const paginatedItems = results.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE,
    );

    return {
      paginatedItems,
      totalPages,
    };
  }, [items, categoryName, categoryParam, sortParam, pageParam]);

  return finalResults;
}
