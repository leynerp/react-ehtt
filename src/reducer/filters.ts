import type { FilterData, FiltersAction } from '../types/type.d';

export const reducerFilter = (state: Partial<FilterData>, action: FiltersAction): Partial<FilterData> => {
  switch (action.type) {
    case 'changeName':{
      const filterName = action.payload.name;
      return { ...state, name: filterName }
    }

    case 'changeCategory':{
      const filterCategory = action.payload.category;
      return { ...state, category: filterCategory }
    }
    case 'reset':{
      return undefined;
    }
  }
  return state;
};
