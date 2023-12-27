import { useAppSelector } from '../hooks/useReduxType';
import { ListWorkers } from './ListWorkers';
import { SearchBar } from './SearchBar';
import { Modal, Overlay } from './cssComponent/FavoritesList.ccs';
import { WorkersMain } from './cssComponent/ListWorkers.css';
// TODO change some style in the modal
interface ModalProps {
  modal: { setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean }

}
export const FavoritesList = ({ modal }: ModalProps) => {
  const { showModal, setShowModal } = modal;
  const workersState = useAppSelector(state => state.worker);
  const personList = workersState.filter(({ typeList }) => typeList === 'favorite')[0].listsPersons;
  if (showModal) {
    const dialog = document.querySelector('dialog');
    dialog?.showModal();
  }
  const handleClose = () => {
    setShowModal(!showModal);
  };
  const handleButtonClose = () => {
    setShowModal(!showModal);
    const dialog = document.querySelector('dialog');
    dialog?.close();
  };
  return <>
     {
      <Overlay>
       <Modal onClose={handleClose}>
        <p>List of Favorites Persons</p>
        <SearchBar typeList='favorite'></SearchBar>
          <WorkersMain>
          <ListWorkers listPaginatedPersons={personList.listPaginatedPersons ?? []} typeList={'favorite'}></ListWorkers>
         </WorkersMain>
       <button onClick={handleButtonClose}> close</button>
       </Modal>
       </Overlay>
    }
  </>
};
