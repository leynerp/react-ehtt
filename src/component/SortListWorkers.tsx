import { useState } from 'react';
import { useSorter } from '../hooks/useSorter';
import { type PersonTypeList, type PropWorker, type Sorter } from '../types/type';
import { SortListWorkersSection } from './cssComponent/SortListWorkers.css';
interface Props {
  sortElement: Sorter
  dispatchActiveFieldSort: (id: string) => void
  dispatchChangeOrder: (id: string) => void
}
const SortItems = ({ sortElement, dispatchActiveFieldSort, dispatchChangeOrder }: Props) => {
  const { id, field, asc } = sortElement;
  const [isSelected, setIsSelected] = useState(false);
  const handleActiveFieldSort = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsSelected(!isSelected)
    const target = (e.target as HTMLButtonElement).parentNode as HTMLElement;
    console.log(target.id);
    dispatchActiveFieldSort(target.id)
  };
  const handleChangeOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = (e.target as HTMLButtonElement).parentNode as HTMLElement;
    dispatchChangeOrder(target.id)
  };
  return <>
         <article id={id}>
          <button style={ isSelected ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: 'white', color: 'black' } } onClick={handleActiveFieldSort} type="button">{field}</button>
          <button style={ isSelected ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: 'white', color: 'black' } } onClick={handleChangeOrder } type="button">{(asc) ? '↑' : '↓'}</button>
        </article>
   </>
};

export const SortListWorkers = ({ typeList }: { typeList: PersonTypeList }) => {
  const { SorterFields, dispatchActiveFieldSort, dispatchChangeOrder } = useSorter(typeList);
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
