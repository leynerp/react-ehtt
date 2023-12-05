import './App.css'
import { ListWorkers } from './component/ListWorkers'
import { WorkersMain } from './component/cssComponent/ListWorkers.css'
import { SearchBar } from './component/SearchBar'
import { useWorkers } from './hooks/useWorkers';
import { SortListWorkers } from './component/SortListWorkers';
import { useState } from 'react';
import { FavoritesList } from './component/FavoritiesList';

function App () {
  const { personList } = useWorkers('workers');
  const [showModal, setShowModal] = useState(false);
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
          <button
            onClick={() => { setShowModal(!showModal); }}
          >
           show favorites
          </button>
          {showModal && <FavoritesList modal={{ setShowModal, showModal }} />}

        </header>
        <main>
          <WorkersMain>
              <ListWorkers listPaginatedPersons={personList.listPaginatedPersons ?? []} typeList={'workers'}></ListWorkers>
          </WorkersMain>
        </main>

    </>
  )
}

export default App
