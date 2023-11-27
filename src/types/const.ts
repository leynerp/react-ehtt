import { type Sorter, type Filters } from './type.d';
export const SearchFilters: Filters = {
  name: (name: string, search: string) => name.toLowerCase().includes(search.toLocaleLowerCase()),
  category: (category: string, search: string) => category === search
} as const

const data = [
  { id: 7, name: 'Asterdam', population: 24, country: 'Aaa' },
  { id: 12, name: 'The Hague', population: 36, country: 'Aaa' },
  { id: 43, name: 'Rotterdam', population: 600000, country: 'Netherlands' },
  { id: 5, name: 'Berlin', population: 3000000, country: 'Germany' },
  { id: 42, name: 'Dsseldorf', population: 550000, country: 'Bmm' },
  { id: 44, name: 'Stuttgard', population: 600000, country: 'Germany' }
];

export const SorterFields: Sorter[] = [
  { field: 'Name', id: 'sort_name', reference: 'name', asc: true, sorterDefinition: { type: 'sortString', sorterFunction: (a: string, b: string) => a.localeCompare(b) }, active: false },
  { field: 'Happiness level', id: 'sort_happy', reference: 'happinessLevel', asc: true, sorterDefinition: { type: 'sortNumber', sorterFunction: (a: number, b: number) => a - b }, active: false }
]

/* const mapF = (a, b) => SorterFields
  .filter(sorter => sorter.active)
  .map((v, i) => v.sorterDefinition.sorterFunction(a[v.id], b[v.id]));

const datasorted = data.sort((a, b) => {
  const comparisonArray = mapF(a, b);
  console.log(comparisonArray);
  for (let i = 0; i < comparisonArray.length; i++) {
    if (comparisonArray[i] !== 0) {
      return comparisonArray[i];
    }
  }
  return 0;
});
console.log(-1 || -255)
console.log(datasorted) */
export const RANGE_PAGE: number = 5;
