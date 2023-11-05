import { useReducer, useState } from 'react';
import debounce from 'just-debounce-it';
import { reducerFilter } from '../reducer/filters';

export const useFilters = (reloadWorkers: () => void) => {
  const initialState = { name: (name: string, search: string) => true, category: (search: string) => true }
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
    reloadWorkers(filters);
  }, 300);

  const handlerSubmit = (e: React.FormEvent<SubmitEvent>) => {
    e.preventDefault();
    reloadWorkers(filters);
  };
  const handlerClear = () => {
    const form = document.getElementById('searchForm') as HTMLFormElement;
    form?.reset();
    dispatch({ type: 'reset' });
    setCategory('init');
    reloadWorkers(filters);
  };

  return { category, handlerOnChangeName, handlerOnChangeCategory, handlerSubmit, handlerClear }
};
