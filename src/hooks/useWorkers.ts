import { useEffect } from 'react';
import { getWorkers } from '../service/service';
import { setWorkers } from '../reduxtk/slice/workersSlice';
import { useAppDispatch, useAppSelector } from './useReduxType';
import type { PersonTypeList } from '../types/type';

export function useWorkers (typeList: PersonTypeList) {
  const workersState = useAppSelector(state => state.worker);
  const personList = workersState.filter(data => data.type === typeList)[0].listsPersons;
  const workersDispatch = useAppDispatch();
  useEffect(() => {
    getWorkers().then(listPerson => {
      // workersDispatch(setWorkers({ persons: listPerson, originalsPersons: listPerson, listPaginatedPersons: [], listFavoritePersons: [] }))
      workersDispatch(setWorkers([{ type: typeList, listsPersons: { persons: listPerson, originalsPersons: listPerson, listPaginatedPersons: [] } }]))
    })
  }, [])

  return { personList }
}
