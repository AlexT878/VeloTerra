import { useSearchParams } from "react-router-dom";
import { FILTER_OPTIONS } from "../constants/strings";
import { useMemo } from "react";
import { ITEMS_PER_PAGE } from "../constants/values";

const filterProducts = (items, categoryParam, categoryName) => {
  if (!categoryParam || categoryParam === "all") return items;
  return items.filter(
    (item) => item.category.toLowerCase() === categoryName.toLowerCase(),
  );
};

const sortProducts = (items, sortParam) => {
  return [...items].sort((a, b) => {
    if (sortParam === "price-asc") return a.price - b.price;
    if (sortParam === "price-desc") return b.price - a.price;
    if (sortParam === "name-asc" || sortParam === "")
      return a.name.localeCompare(b.name);
    if (sortParam === "name-desc") return b.name.localeCompare(a.name);
    return 0;
  });
};

const paginateProducts = (items, pageParam, itemsPerPage) => {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const safePage = Math.max(1, Math.min(pageParam, totalPages));
  const startIndex = (safePage - 1) * itemsPerPage;

  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return { paginatedItems, totalPages };
};

export default function useFilteredProducts(items) {
  const [searchParams] = useSearchParams();

  const categoryParam = searchParams.get("category") || "";
  const sortParam = searchParams.get("sort") || "";
  const pageParam = parseInt(searchParams.get("page")) || 1;

  const selectedOption = FILTER_OPTIONS.find(
    (opt) => opt.value === categoryParam,
  );

  const categoryName = selectedOption ? selectedOption.text : categoryParam;

  const finalResults = useMemo(() => {
    const filtered = filterProducts(items, categoryParam, categoryName);
    const sorted = sortProducts(filtered, sortParam);
    const paginatedData = paginateProducts(sorted, pageParam, ITEMS_PER_PAGE);

    return paginatedData;
  }, [items, categoryName, categoryParam, sortParam, pageParam]);

  return finalResults;
}
