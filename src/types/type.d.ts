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
