import { type Filters } from './type.d';

export const SearchFilters: Filters = {
  name: (name: string, search: string) => name.toLowerCase().includes(search.toLocaleLowerCase()),
  category: (category: string, search: string) => category === search
} as const

export const RANGE_PAGE: number = 2;
