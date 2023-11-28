import './App.css'
import { ListWorkers } from './component/ListWorkers'
import { WorkersMain } from './component/cssComponent/ListWorkers.css'
import { SearchBar } from './component/SearchBar'
import { useWorkers } from './hooks/useWorkers';

function App () {
  const { workers } = useWorkers();
  return (
    <>
        <h1 >Test</h1>
        <header>
           { <SearchBar></SearchBar>
           /* <SortListWorkers setWorkers={setWorkers} listWorkers={workers}></SortListWorkers> */}
        </header>
        <main>
          <WorkersMain>
              <ListWorkers persons={workers.persons ?? []}></ListWorkers>
          </WorkersMain>
        </main>

    </>
  )
}

export default App
