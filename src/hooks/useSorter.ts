import { useEffect, useReducer } from 'react';
import { sortReducer } from '../reducer/sort';
import { SorterFields } from '../types/const';
import type { PersonTypeList, Person } from '../types/type';
import { sorterWorker, restoreOriginalWorker } from '../reduxtk/slice/workersSlice'
import { useAppDispatch } from './useReduxType';
export const useSorter = (typeList: PersonTypeList) => {
  const [sorter, dispatch] = useReducer(sortReducer, SorterFields)
  const workersDispatch = useAppDispatch();
  const dispatchActiveFieldSort = (id: string) => {
    dispatch({ type: 'changeStatus', payload: { id } })
  };
  const dispatchChangeOrder = (id: string) => {
    dispatch({ type: 'changeOrder', payload: { id } })
  };
  const makeSortFunction = (a: Person, b: Person) => sorter
    .filter(sort => sort.active)
    .map(sortField => (sortField.asc) ? sortField.sorterDefinition.sorterFunction(a[sortField.reference], b[sortField.reference]) : -sortField.sorterDefinition.sorterFunction(a[sortField.reference], b[sortField.reference]));
  useEffect(() => {
    if (sorter.filter(sort => sort.active).length !== 0) {
      workersDispatch(sorterWorker({ sortFunc: makeSortFunction, typeList }));
    } else { workersDispatch(restoreOriginalWorker()); }
  }, [sorter])
  return { sorter, SorterFields, dispatchActiveFieldSort, dispatchChangeOrder }
};
