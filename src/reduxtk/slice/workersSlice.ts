import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type FiltersKey, type FilterAction, type Person, type ShowPagination, type PersonsState, type PersonTypeList } from '../../types/type';
import { SearchFilters } from '../../types/const';

const initialWorkersState: PersonsState[] = [
  {
    type: 'workers',
    listsPersons: {
      persons: [],
      originalsPersons: [],
      listPaginatedPersons: []
    }
  },
  {
    type: 'favorite',
    listsPersons: {
      persons: [],
      originalsPersons: [],
      listPaginatedPersons: []
    }
  }
]
export const workersSlice = createSlice({
  name: 'workers',
  initialState: initialWorkersState,
  reducers: {
    setWorkers: (state, action: PayloadAction<PersonsState[]>) => {
      return action.payload;
    },
    restoreOriginalWorker: (state) => {
      state[0].listsPersons.persons = state[0].listsPersons.originalsPersons;
      return state;
    },
    filterWorkers: (state, action: PayloadAction<FilterAction>) => {
      const filters = action.payload?.filter;
      const typePersons = action.payload?.type ?? 'workers';
      if (filters === undefined) return
      const filtersKey: string[] = Object.keys(filters);
      const personState = state.filter(data => data.type === typePersons)[0];
      const searchWorkers = personState.listsPersons.originalsPersons.filter((worker: Person) => {
        return filtersKey.every(key => {
          return SearchFilters[key as FiltersKey](worker[key as FiltersKey], filters[key as FiltersKey]);
        })
      })
      personState.listsPersons.persons = searchWorkers;
      return state;
    },
    sorterWorker: (state, action: PayloadAction<(a: Person, b: Person) => number[]>) => {
      if (state.listPaginatedPersons !== undefined) {
        state.listPaginatedPersons.sort((a, b) => {
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
      const personState = state.filter(data => data.type === action.payload.typeList)[0];
      personState.listsPersons.listPaginatedPersons = personState.listsPersons.persons.slice(action.payload.init, action.payload.end);
      return state;
    },
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      const findPerson = state.persons.find(person => person.id === action.payload.id) as Person;
      if (findPerson !== undefined) { state.listFavoritePersons.push(findPerson); }
    },
    deleteFavorite: (state, action: PayloadAction<{ id: string }>) => {
      const findPerson = state.listFavoritePersons.find(person => person.id === action.payload.id) as Person;
      if (findPerson !== undefined) { state.listFavoritePersons.filter(({ id }) => id === action.payload.id); }
    }

  }

})

export const { setWorkers, filterWorkers, restoreOriginalWorker, sorterWorker, paginateListOfWorker, addFavorite } = workersSlice.actions;
export default workersSlice.reducer;
