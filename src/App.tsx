import './App.css'
import { ListWorkers } from './component/ListWorkers'
import { WorkersMain } from './component/cssComponent/ListWorkers.css'
import { SearchBar } from './component/SearchBar'
import { useWorkers } from './hooks/useWorkers';
import { SortListWorkers } from './component/SortListWorkers';
import { useState } from 'react';
import { FavoritesList } from './component/FavoritesList';

function App () {
  const { personList, workersInFavoriteList } = useWorkers('workers');
  const [showModal, setShowModal] = useState(false);
  return (
    <>
        <h1 >The EHTT tracker</h1>

        <div className='showFavorites'>
          <p>Quantity of persons in favorite list</p>
          <div className='circle'>
            <p>{workersInFavoriteList.length ?? 0}</p>
          </div>
        </div>
        <header>
           {
             <>
            <SearchBar typeList='workers'></SearchBar>
            <SortListWorkers typeList={'workers'}></SortListWorkers>
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
