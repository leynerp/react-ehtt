import { type PropWorker, type Person } from '../types/type.d'
import { WorkerItems } from './ListWorkers.css'
import { FavoriteIcon, FavoriteRateIcon } from './Icons'
import { Pagination } from './Pagination';

export function ItemList ({ worker }: { worker: Person }) {
  const { name, category, happinessLevel, company } = worker;

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
              <FavoriteIcon ></FavoriteIcon>
              <FavoriteRateIcon ></FavoriteRateIcon>
            </section>

        </WorkerItems>
    </>
  )
}

export function ListWorkers ({ setWorkers, listWorkers, originalListOfWorkers }: PropWorker) {
  return (
           <>
           <Pagination originalListOfWorkers={originalListOfWorkers} setWorkers={setWorkers} listWorkers={listWorkers}></Pagination>
            <ul >
                {
                   (listWorkers.length > 0)
                     ? listWorkers.map(worker => (
                       <ItemList key={worker.id} worker={worker}></ItemList>
                     ))
                     : <h1> Do not exist data to show</h1>

                }
            </ul>

          </>
  )
}
