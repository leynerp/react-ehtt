import { useReducer } from 'react';
import { sortReducer } from '../reducer/sort';
import { SorterFields } from '../types/const';

export const useSorter = () => {
  const [sorter, dispatch] = useReducer(sortReducer, SorterFields)

  const dispatchActiveFieldSort = (id: string) => {
    dispatch({ type: 'changeStatus', payload: { id } })
  };
  const dispatchChangeOrder = (id: string) => {
    dispatch({ type: 'changeOrder', payload: { id } })
  };

  return { sorter, SorterFields, dispatchActiveFieldSort, dispatchChangeOrder }
};
