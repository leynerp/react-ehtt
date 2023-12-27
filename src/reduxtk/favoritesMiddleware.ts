import { createListenerMiddleware } from '@reduxjs/toolkit';
import { addFavorite, removeFavorite } from './slice/workersSlice';
import { type PersonsState } from '../types/type';
export const listenerFavoritesMid = createListenerMiddleware();
listenerFavoritesMid.startListening({
  actionCreator: addFavorite,
  effect: async (action, listenerApi) => {
    const state = (listenerApi.getState()?.worker as PersonsState[]);
    localStorage.setItem('favorite', JSON.stringify(state[1].listsPersons.persons));
  }
}
)
listenerFavoritesMid.startListening({
  actionCreator: removeFavorite,
  effect: async (action, listenerApi) => {
    const { persons } = (listenerApi.getState()?.worker as PersonsState[])[1].listsPersons;
    localStorage.setItem('favorite', JSON.stringify(persons));
  }
}
)
