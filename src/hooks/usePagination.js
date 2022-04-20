import { useState } from "react";

const usePagination = () => {
  const [pageLimit, setPageLimit] = useState(25);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, newPage) => {
    setOffset(newPage * pageLimit);
    setPage(newPage);
  };
  const resetPagination = () => {
    setPageLimit(25);
    setOffset(0);
    setPage(0);
  };
  return { pageLimit, offset, page, handlePageChange, resetPagination };
};

export default usePagination;
