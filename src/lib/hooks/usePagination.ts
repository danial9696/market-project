import { useEffect, useState } from 'react';

/**
 * The `usePagination` function is a custom hook in TypeScript that allows for pagination of an array
 * of data.
 * @param {T[]} data - The `data` parameter is an array of elements of type `T`. This is the data that
 * you want to paginate.
 * @param {number} itemsPerPage - The `itemsPerPage` parameter is the number of items that should be
 * displayed on each page of the pagination.
 * @returns The `usePagination` function returns an object with three properties:
 */
const usePagination = <T>(data: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the initial slice of data when the hook is first used
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const initialSliceData = data.slice(startIndex, endIndex);

  const [sliceData, setSliceData] = useState<T[]>(initialSliceData);

  const handlePageChange = (newPage: number) => {
    const startIndex = (newPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    setSliceData(currentItems);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    // Recalculate the slice of data when the data prop changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);
    setSliceData(currentItems);
  }, [data, currentPage, itemsPerPage]);

  return {
    sliceData,
    currentPage,
    handlePageChange,
  };
};

export default usePagination;
