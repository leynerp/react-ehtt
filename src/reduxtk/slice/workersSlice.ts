import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type FiltersKey, type FilterData, type Person, type Workers, type ShowPagination } from '../../types/type';
import { SearchFilters } from '../../types/const';

const initialWorkersState: Workers = {
  persons: [],
  originalsPersons: [],
  listPaginatedPersons: []
}

export const workersSlice = createSlice({
  name: 'workers',
  initialState: initialWorkersState,
  reducers: {
    setWorkers: (state, action: PayloadAction<Workers>) => {
      return action.payload;
    },
    restoreOriginalWorker: (state) => {
      state.persons = state.originalsPersons;
      return state;
    },
    filterWorkers: (state, action: PayloadAction<Partial<FilterData>>) => {
      if (action.payload === undefined) return
      const filtersKey: string[] = Object.keys(action.payload);
      const searchWorkers = state.originalsPersons.filter((worker: Person) => {
        return filtersKey.every(key => {
          return SearchFilters[key as FiltersKey](worker[key as FiltersKey], action.payload[key as FiltersKey] as string);
        })
      })
      state.persons = searchWorkers;
      return state;
    },
    sorterWorker: (state, action: PayloadAction<(a: Person, b: Person) => number[]>) => {
      if (state.persons !== undefined) {
        state.persons.sort((a, b) => {
          const comparisonArray = action.payload(a, b);
          for (let i = 0; i < comparisonArray.length; i++) {
            if (comparisonArray[i] !== 0) {
              return comparisonArray[i];
            }
          }
          return 0;
        });
      }
    },
    paginateListOfWorker: (state, action: PayloadAction<ShowPagination>) => {
      state.listPaginatedPersons = state.persons.slice(action.payload.init, action.payload.end);
      return state;
    }

  }

})

export const { setWorkers, filterWorkers, restoreOriginalWorker, sorterWorker, paginateListOfWorker } = workersSlice.actions;
export default workersSlice.reducer;
