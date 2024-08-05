import {IconChevronLeft, IconChevronRight} from "@tabler/icons-react";
import React from "react";

const Pagination = ({currentPage, totalPages, goToPage}) => {
  const pagesToShow = 5;

  if (!totalPages || totalPages < 1) {
    return null;
  }

  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  const showEllipsisBefore = startPage > 2;
  const showEllipsisAfter = endPage < totalPages - 1;

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 hover:text-blue-500 mr-2">
        <IconChevronLeft />
      </button>

      {showEllipsisBefore && (
        <>
          <button
            onClick={() => goToPage(1)}
            className="px-4 py-2 text-gray-700">
            1
          </button>
          <span className="px-4 py-2 text-gray-700">...</span>
        </>
      )}

      {Array.from(
        {length: endPage - startPage + 1},
        (_, index) => startPage + index
      ).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`px-4 py-2 text-gray-500 font-semibold ${
            currentPage === page ? "text-blue-500 underline" : ""
          }`}>
          {page}
        </button>
      ))}

      {showEllipsisAfter && (
        <>
          <span className="px-4 py-2 text-gray-700">...</span>
          <button
            onClick={() => goToPage(totalPages)}
            className="px-4 py-2 bg-gray-300 text-gray-700">
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 hover:text-blue-500 ml-2">
        <IconChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
