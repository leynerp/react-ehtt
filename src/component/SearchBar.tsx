import { Category } from '../types/type.d';
import { useFilters } from '../hooks/useFilters';

export const SearchBar = ({ reloadWorkers }: { reloadWorkers: () => void }) => {
  const { category, handlerOnChangeName, handlerOnChangeCategory, handlerSubmit, handlerClear } = useFilters(reloadWorkers)
  return (
    <>
       <form id='searchForm' onSubmit={handlerSubmit}>
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
       </form>
    </>
  )
}
