import { useEffect } from 'react';
import { getWorkers } from '../service/service';
import { setWorkers } from '../reduxtk/slice/workersSlice';
import { useAppDispatch, useAppSelector } from './useReduxType';

export function useWorkers () {
  const workers = useAppSelector(state => state.worker);
  const workersDispatch = useAppDispatch();
  useEffect(() => {
    getWorkers().then(listPerson => {
      workersDispatch(setWorkers({ persons: listPerson, originalsPersons: listPerson, listPaginatedPersons: [] }))
    })
  }, [])

  return { workers }
}
