import { useSorter } from '../hooks/useSorter';
import { type Sorter } from '../types/type';
import { SortListWorkersSection } from './cssComponent/SortListWorkers.css';
interface Props {
  sortElement: Sorter
  dispatchActiveFieldSort: (id: string) => void
  dispatchChangeOrder: (id: string) => void
}
const SortItems = ({ sortElement, dispatchActiveFieldSort, dispatchChangeOrder }: Props) => {
  const { id, field, asc } = sortElement;
  const handleActiveFieldSort = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    dispatchActiveFieldSort(target.id)
  };
  const handleChangeOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    dispatchChangeOrder(target.id)
  };
  return <>
         <article>
          <button onClick={handleActiveFieldSort} id={id} type="button">{field}</button>
          <button onClick={handleChangeOrder } type="button">{(asc) ? '↑' : '↓'}</button>
        </article>
   </>
};

export const SortListWorkers = () => {
  const { sorter, SorterFields, dispatchActiveFieldSort, dispatchChangeOrder } = useSorter();
  return <>
        <h2 style={{ fontSize: '1.2em' }}>Sorter option</h2>

    <SortListWorkersSection >
       {
        SorterFields.map(sort => (
          <SortItems key={sort.id} sortElement={sort} dispatchActiveFieldSort={dispatchActiveFieldSort} dispatchChangeOrder={dispatchChangeOrder}></SortItems>
        ))
       }

    </SortListWorkersSection>
  </>
};
