import { useReducer, useState } from 'react';
import debounce from 'just-debounce-it';
import { reducerFilter } from '../reducer/filters';
import { filterWorkers, restoreOriginalWorker } from '../reduxtk/slice/workersSlice'
import { useAppDispatch } from './useReduxType';

export const useFilters = () => {
  const workersDispatch = useAppDispatch();
  const initialState = { name: '', category: '', type: undefined }
  const [filters, dispatch] = useReducer(reducerFilter, initialState);
  const [category, setCategory] = useState<string>('init');

  const handlerOnChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    debounceSearch((e.target as HTMLInputElement).value);
  }

  const handlerOnChangeCategory = (e: React.FormEvent<HTMLSelectElement>) => {
    const search = (e.target as HTMLSelectElement).value;
    setCategory(search);
    dispatch({ type: 'changeCategory', payload: { category: search } });
  }

  const debounceSearch = debounce((search: string) => {
    dispatch({ type: 'changeName', payload: { name: search } });
    console.log(search);
    workersDispatch(filterWorkers(filters));
  }, 300);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    workersDispatch(filterWorkers(filters));
  };
  const handlerClear = () => {
    const form = document.getElementById('searchForm') as HTMLFormElement;
    form?.reset();
    dispatch({ type: 'reset' });
    setCategory('init');
    workersDispatch(restoreOriginalWorker());
  }
  return { category, handlerOnChangeName, handlerOnChangeCategory, handlerSubmit, handlerClear }
};
