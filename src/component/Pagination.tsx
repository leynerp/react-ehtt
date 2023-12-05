import { usePagination } from '../hooks/usePagination';
import { type PersonTypeList } from '../types/type';
import { PaginationDiv } from './cssComponent/Pagination.css';
export const Pagination = ({ typeList }: { typeList: PersonTypeList }) => {
   const { actualPage, pageCountPagination, handlePreviousPage, handleNextPage, showPage, workers } = usePagination(typeList);

  return <>
       <PaginationDiv>
        <button onClick={handlePreviousPage} disabled={actualPage === 1 && true} type='button' ><b>{'<'}</b></button>
        <input value={actualPage} type='text' disabled={true}></input>
        <button onClick={handleNextPage} disabled={(actualPage === pageCountPagination) && true} type='button' ><b>{'>'}</b></button>
        <p>{`show result since ${showPage.init} to ${showPage.end} of ${workers?.length}`}  </p>
        </PaginationDiv>
  </>
};
