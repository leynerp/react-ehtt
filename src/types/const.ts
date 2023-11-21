import { type Sorter, type Filters } from './type.d';
export const SearchFilters: Filters = {
  name: (name: string, search: string) => name.toLowerCase().includes(search.toLocaleLowerCase()),
  category: (category: string, search: string) => category === search
} as const

//
export const SorterFields: Sorter[] = [
  { field: 'Name', id: 'sort-name', asc: true, sorterFunction: { type: 'sortString', sorterFunction: (a: string, b: string) => a.localeCompare(b) }, active: false },
  { field: 'Category', id: 'sort-category', asc: true, sorterFunction: { type: 'sortNumber', sorterFunction: (a: number, b: number) => a - b }, active: false },
  { field: 'Company', id: 'sort-company', asc: true, sorterFunction: { type: 'sortString', sorterFunction: (a: string, b: string) => a.localeCompare(b) }, active: false }
]

export const RANGE_PAGE: number = 5;
