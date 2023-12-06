export interface Person {
  id: string
  name: string
  happinessLevel: number
  company: Company
  category: Category
}

export interface Company {
  name: string
  logo: string
}
export enum Category {
  employed = 'Employee',
  manager = 'Manager'
}

export type PersonTypeList = 'workers' | 'favorite'

export interface PersonsLists {
  persons: Person[]
  originalsPersons: Person[]
  listPaginatedPersons: Person[]
}

export interface PersonsState {
  typeList: PersonTypeList
  listsPersons: PersonsLists
}

export interface Filters {
  name: (name: string, search: string) => boolean
  category: (category: string, search: string) => boolean
}

type FiltersKey = keyof Filters;

type FilterData = { [key in FiltersKey]: string } | undefined;
type FilterAction = { filter: Partial<FilterData>, type: PersonTypeList } | undefined;

export type FiltersAction = { type: 'changeName', payload: { name: string } }
| { type: 'changeCategory', payload: { category: string } }
| { type: 'reset' }

export interface Pagination<T> {
  setData: React.Dispatch<React.SetStateAction<T[] | undefined>>
  listOfElements: T[]
}
export interface PaginationAction {
  init: number
  end: number
  typeList: PersonTypeList

}

export type FunctionsSortType = { type: 'sortString', sorterFunction: (a: string, b: string) => number }
| { type: 'sortNumber', sorterFunction: (a: number, b: number) => number }

export interface Sorter {
  field: string
  asc: boolean
  id: string
  sorterDefinition: FunctionsSortType
  active: boolean
  reference: keyof Person
}

export interface SorterAction { type: string, payload: { id: string } }
export interface SorterActionRedux {
  sortFunc: (a: Person, b: Person) => number[]
  typeList: PersonTypeList

}
