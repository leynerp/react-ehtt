import { type Person } from '../types'
import { WorkerItems } from './ListWorkers.css'
import { FavoriteIcon, FavoriteRateIcon } from './Icons'
import { useWorkers } from '../hooks/useWorkers'

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
export function ListWorkers ({ listWorkers }: { listWorkers: Person[] }) {
  return (
           <>
            <ul >
                {
                    listWorkers?.map(worker => (
                       <ItemList key={worker.id} worker={worker}></ItemList>
                    ))
                }
            </ul>
          </>
  )
}
