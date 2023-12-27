import type { Person, PersonTypeList } from '../types/type.d'
import { WorkerItems } from './cssComponent/ListWorkers.css'
import { Favorite } from './Favorite'
import { Pagination } from './Pagination';

export function ItemList ({ worker, typeList }: { worker: Person, typeList: PersonTypeList }) {
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
            {(typeList === 'workers') && (<section>
              <Favorite idElement={id}></Favorite>
            </section>)}

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
                       <ItemList typeList={typeList} key={`${typeList}-${worker.id}`} worker={worker}></ItemList>
                     ))
                     : <h1> Do not exist data to show</h1>

                }
            </ul>
          {(persons.length > 0) && <Pagination typeList={typeList}></Pagination>}
          </>
  )
}
