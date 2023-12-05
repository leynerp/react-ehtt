import { useAppSelector } from '../hooks/useReduxType';
import { ListWorkers } from './ListWorkers';
import { Modal, Overlay } from './cssComponent/FavoritesList.ccs';
import { WorkersMain } from './cssComponent/ListWorkers.css';
interface ModalProps {
  modal: { setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean }

}
export const FavoritesList = ({ modal }: ModalProps) => {
  const { showModal, setShowModal } = modal;
  const workers = useAppSelector((reducer) => reducer.worker);
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
          <WorkersMain>
          <ListWorkers listPaginatedPersons={workers.listFavoritePersons}></ListWorkers>
         </WorkersMain>
       <button onClick={handleButtonClose}> close</button>
       </Modal>
       </Overlay>
    }
  </>
};
