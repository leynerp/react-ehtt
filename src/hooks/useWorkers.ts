import { useEffect, useRef, useState } from 'react';
import { getWorkers } from '../service/service';
import { type Filters, type Person, type FiltersKey } from '../types/type.d';

export function useWorkers () {
  const [workers, setWorkers] = useState<Person[]>();
  const OriginalListOfWorkers = useRef<Person[]>([]);
  const refreshWorkers = (filters: Filters) => {
    if (workers !== undefined) {
      const filtersKey: string[] = Object.keys(filters);
      const searchWorkers = [...OriginalListOfWorkers.current].filter(worker => {
        return filtersKey.every(key => {
          const keyT = key as FiltersKey;
          if (typeof filters[keyT] !== 'function') return false;
          console.log(filters[keyT])
          return filters[keyT](worker[key]);
        })
      })
      if (searchWorkers.length > 0) {
        console.log(workers)
        console.log(searchWorkers)
        setWorkers(searchWorkers);
      }
    }
  }
  useEffect(() => {
    getWorkers().then(listPerson => {
      setWorkers(listPerson);
      OriginalListOfWorkers.current = listPerson;
    })
  }, [])

  return { workers, refreshWorkers, setWorkers }
}
