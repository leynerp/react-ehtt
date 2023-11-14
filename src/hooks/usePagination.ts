import { useState, useMemo } from 'react';
import { type Pagination, type Person } from '../types/type.d';
import { RANGE_PAGE } from '../types/const';

export const usePagination = ({ setData, listOfElements }: Pagination<Person>) => {
  const [actualPage, setActualPage] = useState(1);

  const pageCountPagination = useMemo(() => {
    return Math.ceil(listOfElements.length / RANGE_PAGE)
  }, [listOfElements])
  const handlePreviousPage = () => {
    const page = actualPage - 1;
    setActualPage(page);
    setPagination(page)
  };
  const handleNextPage = () => {
    const page = actualPage + 1;
    setActualPage(page);
    setPagination(page);
  };

  const setPagination = (page: number) => {
    if (listOfElements.length > 0) {
      const paginationList = [...listOfElements].slice((page - 1) * RANGE_PAGE, page * RANGE_PAGE);
      setData(paginationList);
    }
  };

  return { actualPage, pageCountPagination, handlePreviousPage, handleNextPage }
};
