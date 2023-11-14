import { useState, useMemo, useEffect } from 'react';
import { type ShowPagination, type Pagination, type Person } from '../types/type.d';
import { RANGE_PAGE } from '../types/const';

export const usePagination = ({ setData, listOfElements }: Pagination<Person>) => {
  const [actualPage, setActualPage] = useState(1);
  const [showPage, setShowPage] = useState<ShowPagination>({ init: 1, end: RANGE_PAGE });

  const pageCountPagination = useMemo(() => {
    if (listOfElements !== undefined) { return Math.ceil(listOfElements.length / RANGE_PAGE) }
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
    if (listOfElements !== undefined) {
      const indexOfInit = (page - 1) * RANGE_PAGE
      const indexOfFinish = page * RANGE_PAGE;
      const paginationList = [...listOfElements].slice(indexOfInit, indexOfFinish);
      setShowPage({ init: indexOfInit, end: indexOfFinish });
      setData(paginationList);
    }
  };

  return { actualPage, pageCountPagination, handlePreviousPage, handleNextPage, showPage }
};
