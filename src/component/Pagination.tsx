import { usePagination } from '../hooks/usePagination';
import { type PropWorker } from '../types/type.d';

export const Pagination = ({ setWorkers, listWorkers, originalListOfWorkers }: PropWorker) => {
  const { actualPage, pageCountPagination, handlePreviousPage, handleNextPage } = usePagination({ setData: setWorkers, listOfElements: originalListOfWorkers });

  return <>
       <button onClick={handlePreviousPage} disabled={actualPage === 1 && true} type='button' ><b>{'<'}</b></button>
        <input style={{ width: '20px' }} value={actualPage} type='text' disabled={true}></input>
        <button onClick={handleNextPage} disabled={(actualPage === pageCountPagination) && true} type='button' ><b>{'>'}</b></button>
        <p> show resul since </p>
  </>
};
