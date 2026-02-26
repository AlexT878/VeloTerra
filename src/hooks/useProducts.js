import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function useProducts() {
  const { items, status } = useSelector((state) => state.products);
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const products = useMemo(() => {
    if (!searchTerm) return items; // Early return

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return items.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseSearchTerm),
    );
  }, [items, searchTerm]);

  return { products, status };
}
