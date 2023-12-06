import { type Sorter, type Filters } from './type.d';
export const SearchFilters: Filters = {
  name: (name: string, search: string) => name.toLowerCase().includes(search.toLocaleLowerCase()),
  category: (category: string, search: string) => category === search
} as const

export const SorterFields: Sorter[] = [
  { field: 'Name', id: 'sort_name', reference: 'name', asc: true, sorterDefinition: { type: 'sortString', sorterFunction: (a: string, b: string) => a.localeCompare(b) }, active: false },
  { field: 'Happiness level', id: 'sort_happy', reference: 'happinessLevel', asc: true, sorterDefinition: { type: 'sortNumber', sorterFunction: (a: number, b: number) => a - b }, active: false }
]

export const RANGE_PAGE: number = 5;
