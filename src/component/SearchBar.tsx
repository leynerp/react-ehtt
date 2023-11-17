import { Category, type FilterData } from '../types/type.d';
import { useFilters } from '../hooks/useFilters';
import { SearchBarForm } from './cssComponent/SearchBar.css';
interface Prop {
  reloadWorkers: (filters: Partial<FilterData>) => void
  cleanData: () => void
}
export const SearchBar = ({ reloadWorkers, cleanData }: Prop) => {
  const { category, handlerOnChangeName, handlerOnChangeCategory, handlerSubmit, handlerClear } = useFilters({ reloadWorkers, cleanData })
  return (
    <>
       <SearchBarForm id='searchForm' onSubmit={handlerSubmit}>
          <input onChange={handlerOnChangeName} type="text" />
         <select value={category} onChange={handlerOnChangeCategory} id='category' name="category">
            <option key={window.crypto.randomUUID()} value='init'>Select...</option>
           {
            Object.values(Category).map(catg => (
              <option key={window.crypto.randomUUID()} value={catg} >{catg}</option>
            ))
           }
          </select>
          <button type="submit">Find</button>
          <button onClick={handlerClear} type="button">Clear</button>
       </SearchBarForm>
    </>
  )
}
