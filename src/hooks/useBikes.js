import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router";

export default function useBikes() {
  const { items, status } = useSelector((state) => state.bikes);
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const products = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [items, searchTerm]);

  return { products, status };
}
