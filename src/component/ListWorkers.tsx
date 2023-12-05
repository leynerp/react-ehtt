import { type PersonsLists, type Person, type PersonTypeList } from '../types/type.d'
import { WorkerItems } from './cssComponent/ListWorkers.css'
import { Favorite } from './Favorite'
import { Pagination } from './Pagination';

export function ItemList ({ worker }: { worker: Person }) {
  const { id, name, category, happinessLevel, company } = worker;

  return (
    <>
         <WorkerItems>
          <header>
            <p>{name}</p>
            <p>{category}</p>
            <p>{happinessLevel}</p>
            <img src={company.logo} alt={company.name}></img>
            </header>
            <section>
              <Favorite idelement={id}></Favorite>
            </section>

        </WorkerItems>
    </>
  )
}

export function ListWorkers ({ listPaginatedPersons: persons, typeList }: { listPaginatedPersons: Person[], typeList: PersonTypeList }) {
  return (
           <>

            <ul >
                {
                   (persons.length > 0)
                     ? persons.map(worker => (
                       <ItemList key={worker.id} worker={worker}></ItemList>
                     ))
                     : <h1> Do not exist data to show</h1>

                }
            </ul>
          {<Pagination typeList={typeList}></Pagination>}
          </>
  )
}
