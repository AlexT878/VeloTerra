import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Pagination.css";
import { MESSAGES } from "../constants/strings";
import { ARIA_LABEL } from "../constants/aria-labels";

export default function Pagination({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (totalPages <= 1) return null;

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams(searchParams);

    if (newPage > 1) {
      newParams.set("page", newPage);
    } else {
      newParams.delete("page");
    }

    setSearchParams(newParams);
  };

  return (
    <nav
      aria-label={ARIA_LABEL.PRODUCT_PAGINATION}
      className="pagination-container"
    >
      <button
        className="pagination-arrow"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &larr; {MESSAGES.PREVIOUS}
      </button>

      <div className="pagination-info">
        <span className="current-page">{currentPage}</span>
        <span className="divider">/</span>
        <span className="total-pages">{totalPages}</span>
      </div>

      <button
        className="pagination-arrow"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {MESSAGES.NEXT} &rarr;
      </button>
    </nav>
  );
}
