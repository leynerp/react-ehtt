import { type SorterAction, type Sorter } from '../types/type';

export const sortReducer = (state: Sorter[], actions: SorterAction): Sorter[] => {
  if (actions.type === 'changeOrder') {
    const actualSortItems = [...state];
    const sortItem = actualSortItems.find((value) => value.id === actions.payload.id);
    if (sortItem !== undefined)sortItem.asc = !sortItem.asc

    return actualSortItems;
  }
  if (actions.type === 'changeStatus') {
    const actualSortItems = [...state];
    const sortItem = actualSortItems.find((value) => value.id === actions.payload.id);
    if (sortItem?.active === true)sortItem.asc = !sortItem.asc
    if (sortItem !== undefined)sortItem.active = !sortItem.active
    return actualSortItems;
  }
  return state;
};
