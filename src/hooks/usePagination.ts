import { useState, useMemo, useEffect } from 'react';
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
  useEffect(() => {
    setPagination(1);
  }, [listOfElements])
  const setPagination = (page: number) => {
    if (listOfElements.length > 0) {
      const indexOfInit = (page - 1) * RANGE_PAGE
      const indexOfFinish = page * RANGE_PAGE;
      const paginationList = [...listOfElements].slice(indexOfInit, indexOfFinish);
      setData(paginationList);
    }
  };

  return { actualPage, pageCountPagination, handlePreviousPage, handleNextPage }
};
