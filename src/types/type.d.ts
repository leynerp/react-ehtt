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

export interface Filters {
  name: (name: string, search: string) => boolean
  category: (category: string, search: string) => boolean
}

type FiltersKey = keyof Filters;

type FilterData = { [key in FiltersKey]: string } | undefined;

export type FiltersAction = { type: 'changeName', payload: { name: string } }
| { type: 'changeCategory', payload: { category: string } }
| { type: 'reset' }

export interface PropWorker {
  setWorkers: React.Dispatch<React.SetStateAction<Person[] | undefined>>
  listWorkers: Person[]
  originalListOfWorkers: Person[] | undefined
}
export interface Pagination<T> {
  setData: React.Dispatch<React.SetStateAction<T[] | undefined>>
  listOfElements: T[]
}
export interface ShowPagination {
  init: number
  end: number
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
