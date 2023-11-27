import { useEffect, useReducer } from 'react';
import { sortReducer } from '../reducer/sort';
import { SorterFields } from '../types/const';
import { type Person, type PropWorker } from '../types/type';

export const useSorter = ({ setWorkers, listWorkers }: Pick<PropWorker, 'setWorkers' | 'listWorkers'>) => {
  const [sorter, dispatch] = useReducer(sortReducer, SorterFields)

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
      if (listWorkers !== undefined) {
        const sortWorker = [...listWorkers].sort((a, b) => {
          const comparisonArray = makeSortFunction(a, b);
          for (let i = 0; i < comparisonArray.length; i++) {
            if (comparisonArray[i] !== 0) {
              return comparisonArray[i];
            }
          }
          return 0;
        });
        setWorkers(sortWorker);
      }
    }
  }, [sorter])
  return { sorter, SorterFields, dispatchActiveFieldSort, dispatchChangeOrder }
};
