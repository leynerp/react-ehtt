import { usePagination } from '../hooks/usePagination';
import { type PropWorker } from '../types/type.d';
import { PaginationDiv } from './cssComponent/Pagination.css';
export const Pagination = ({ setWorkers, listWorkers, originalListOfWorkers }: PropWorker) => {
  const { actualPage, pageCountPagination, handlePreviousPage, handleNextPage, showPage } = usePagination({ setData: setWorkers, listOfElements: originalListOfWorkers });

  return <>
       <PaginationDiv>
        <button onClick={handlePreviousPage} disabled={actualPage === 1 && true} type='button' ><b>{'<'}</b></button>
        <input value={actualPage} type='text' disabled={true}></input>
        <button onClick={handleNextPage} disabled={(actualPage === pageCountPagination) && true} type='button' ><b>{'>'}</b></button>
        <p>{`show result since ${showPage.init} to ${showPage.end} of ${originalListOfWorkers?.length}`}  </p>
        </PaginationDiv>
  </>
};
