import type { Filters, FiltersAction } from '../types/type.d';

export const reducerFilter = (state: Filters, action: FiltersAction): Filters => {
  switch (action.type) {
    case 'changeName':{
      const filterName = action.payload.name;
      return { ...state, name: (name: string, search: string = filterName) => name.toLowerCase().includes(search.toLowerCase()) }
    }

    case 'changeCategory':{
      const filterCategory = action.payload.category;
      return { ...state, category: (category: string, search: string = filterCategory) => category === search }
    }
    case 'reset':{
      return { name: (name: string, search: string) => true, category: (search: string) => true }
    }
  }
  return state;
};
