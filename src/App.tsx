import './App.css'
import { ListWorkers } from './component/ListWorkers'
import { WorkersMain } from './component/cssComponent/ListWorkers.css'
import { SearchBar } from './component/SearchBar'
import { useWorkers } from './hooks/useWorkers';
import { SortListWorkers } from './component/SortListWorkers';

function App () {
  const { workers, refreshWorkers, setWorkers, restoreListWorkers, originalListOfWorkers } = useWorkers();
  return (
    <>
        <h1 >Test</h1>
        <header>
           <SearchBar reloadWorkers={refreshWorkers} cleanData={restoreListWorkers}></SearchBar>
           <SortListWorkers setWorkers={setWorkers} listWorkers={workers}></SortListWorkers>
        </header>
        <main>
          <WorkersMain>
              <ListWorkers originalListOfWorkers={originalListOfWorkers} setWorkers={setWorkers} listWorkers={workers ?? []}></ListWorkers>
          </WorkersMain>
        </main>

    </>
  )
}

export default App
