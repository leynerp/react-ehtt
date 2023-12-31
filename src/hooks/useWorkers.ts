import { useEffect, useRef, useState } from 'react';
import { getWorkers } from '../service/service';
import type { FilterData, Person, FiltersKey } from '../types/type.d';
import { SearchFilters } from '../types/const';

export function useWorkers () {
  const [workers, setWorkers] = useState<Person[]>();
  const OriginalListOfWorkers = useRef<Person[]>([]);
  const refreshWorkers = (filters: Partial<FilterData>) => {
    if (workers !== undefined && filters !== undefined) {
      const filtersKey: string[] = Object.keys(filters);
      const searchWorkers = [...OriginalListOfWorkers.current].filter(worker => {
        return filtersKey.every(key => {
          return SearchFilters[key as FiltersKey](worker[key as FiltersKey], filters[key as FiltersKey] as string);
        })
      })
      setWorkers(searchWorkers);
    }
  }
  const restoreListWorkers = () => {
    setWorkers(OriginalListOfWorkers.current);
  };
  useEffect(() => {
    getWorkers().then(listPerson => {
      setWorkers(listPerson);
      OriginalListOfWorkers.current = listPerson;
    })
  }, [])

  return { workers, refreshWorkers, setWorkers, restoreListWorkers }
}
