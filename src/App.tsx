import './App.css'
import { ListWorkers } from './component/ListWorkers'
import { WorkersMain } from './component/cssComponent/ListWorkers.css'
import { SearchBar } from './component/SearchBar'
import { useWorkers } from './hooks/useWorkers';
import { SortListWorkers } from './component/SortListWorkers';

function App () {
  const { workers } = useWorkers();
  return (
    <>
        <h1 >Test</h1>
        <header>
           {
             <>
            <SearchBar></SearchBar>
            <SortListWorkers ></SortListWorkers>
            </>
           }
        </header>
        <main>
          <WorkersMain>
              <ListWorkers listPaginatedPersons={workers.listPaginatedPersons ?? []}></ListWorkers>
          </WorkersMain>
        </main>

    </>
  )
}

export default App
