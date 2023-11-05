import './App.css'
import { ListWorkers } from './component/ListWorkers'
import { WorkersMain } from './component/ListWorkers.css'
import { SearchBar } from './component/SearchBar'
import { useWorkers } from './hooks/useWorkers';
function App () {
  const { workers, refreshWorkers } = useWorkers();

  return (
    <>
        <h1 >Test</h1>
        <header>
           <SearchBar reloadWorkers={refreshWorkers}></SearchBar>
        </header>
        <main>
          <WorkersMain>
              <ListWorkers listWorkers={workers ?? []}></ListWorkers>
          </WorkersMain>
        </main>

    </>
  )
}

export default App
