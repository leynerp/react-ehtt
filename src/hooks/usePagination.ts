import { useState, useMemo, useEffect } from 'react';
import { type PersonTypeList, type PaginationAction } from '../types/type.d';
import { RANGE_PAGE } from '../types/const';
import { paginateListOfWorker } from '../reduxtk/slice/workersSlice';
import { useAppDispatch, useAppSelector } from './useReduxType';
export const usePagination = (typeList: PersonTypeList) => {
  const [actualPage, setActualPage] = useState(1);
  const [showPage, setShowPage] = useState<Omit<PaginationAction, 'typeList'>>({ init: 1, end: RANGE_PAGE });
  const workersState = useAppSelector(state => state.worker);
  const { persons: workers } = workersState.filter(data => data.typeList === typeList)[0].listsPersons;

  const workerDispatch = useAppDispatch();
  const pageCountPagination = useMemo(() => {
    if (workers !== undefined) { return Math.ceil(workers.length / RANGE_PAGE) }
  }, [workers])
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
  }, [workers])
  const setPagination = (page: number) => {
    if (workers !== undefined) {
      const indexOfInit = (page - 1) * RANGE_PAGE
      const indexOfFinish = page * RANGE_PAGE;
      workerDispatch(paginateListOfWorker({ init: indexOfInit, end: indexOfFinish, typeList }));
      setShowPage({ init: indexOfInit, end: indexOfFinish });
    }
  };

  return { actualPage, pageCountPagination, handlePreviousPage, handleNextPage, showPage, workers }
};
