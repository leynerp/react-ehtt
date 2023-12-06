import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { FiltersKey, FilterAction, Person, PersonsState, SorterActionRedux, PaginationAction, PersonTypeList } from '../../types/type';
import { SearchFilters } from '../../types/const';
const initialWorkersState: PersonsState[] = [
  {
    typeList: 'workers',
    listsPersons: {
      persons: [],
      originalsPersons: [],
      listPaginatedPersons: []
    }
  },
  {
    typeList: 'favorite',
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
      state[0] = action.payload[0]
    },
    restoreOriginalWorker: (state, action: PayloadAction<PersonTypeList>) => {
      const typePersons = action.payload ?? 'workers';
      const personLists = state.filter(data => data.typeList === typePersons)[0].listsPersons;
      personLists.persons = personLists.originalsPersons;
    },
    filterWorkers: (state, action: PayloadAction<FilterAction>) => {
      const filters = action.payload?.filter;
      const typePersons = action.payload?.type ?? 'workers';
      if (filters === undefined) return
      const filtersKey: string[] = Object.keys(filters);
      const personState = state.filter(({ typeList }) => typeList === typePersons)[0];
      const searchWorkers = personState.listsPersons.originalsPersons.filter((worker: Person) => {
        return filtersKey.every(key => {
          return SearchFilters[key as FiltersKey](worker[key as FiltersKey], filters[key as FiltersKey]);
        })
      })
      personState.listsPersons.persons = searchWorkers;
      return state;
    },
    sorterWorker: (state, action: PayloadAction<SorterActionRedux>) => {
      const typePersons = action.payload?.typeList ?? 'workers';
      const { listPaginatedPersons } = state.filter(({ typeList }) => typeList === typePersons)[0].listsPersons;
      const sorterFunction = action.payload.sortFunc;
      if (listPaginatedPersons !== undefined) {
        listPaginatedPersons.sort((a, b) => {
          const comparisonArray = sorterFunction(a, b);
          for (let i = 0; i < comparisonArray.length; i++) {
            if (comparisonArray[i] !== 0) {
              return comparisonArray[i];
            }
          }
          return 0;
        });
      }
    },
    paginateListOfWorker: (state, action: PayloadAction<PaginationAction>) => {
      const personState = state.filter(({ typeList }) => typeList === action.payload.typeList)[0];
      personState.listsPersons.listPaginatedPersons = personState.listsPersons.persons.slice(action.payload.init, action.payload.end);
      return state;
    },
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      const { persons } = state.filter(({ typeList }) => typeList === 'workers')[0].listsPersons;
      const findPerson = persons.find(person => person.id === action.payload.id) as Person;
      const { persons: favoritesPersons, originalsPersons } = state.filter(({ typeList }) => typeList === 'favorite')[0].listsPersons;
      if (findPerson !== undefined) { favoritesPersons.push(findPerson); originalsPersons.push(findPerson); }
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      const stateFavorite = state.filter(({ typeList }) => typeList === 'favorite')[0];
      const { persons: favoritesState } = stateFavorite.listsPersons;
      if (favoritesState !== undefined) { stateFavorite.listsPersons.persons = favoritesState.filter(({ id }) => id !== action.payload.id); }
    }

  }

})

export const { setWorkers, filterWorkers, restoreOriginalWorker, sorterWorker, paginateListOfWorker, addFavorite, removeFavorite } = workersSlice.actions;
export default workersSlice.reducer;
