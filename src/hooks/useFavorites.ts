import { useState } from 'react';
import { addFavorite, removeFavorite } from '../reduxtk/slice/workersSlice'
import { useAppDispatch, useAppSelector } from './useReduxType';
export const useFavorites = ({ idElement }: { idElement: string }) => {
  const workersState = useAppSelector(state => state.worker);
  const [inFavorites, setInFavorites] = useState(() => {
    const { persons } = workersState.filter(data => data.typeList === 'favorite')[0].listsPersons;
    if (persons.length > 0) {
      const findElement = persons.some(({ id }) => id === idElement);
      console.log(findElement)
      return findElement;
    }
  });

  const dispatchAction = useAppDispatch();
  const handleFavorite = () => {
    setInFavorites(true);
    dispatchAction(addFavorite({ id: idElement }));
  }
  const handleRemoveFavorite = () => {
    dispatchAction(removeFavorite({ id: idElement }));
    setInFavorites(false);
  }

  return { handleFavorite, handleRemoveFavorite, inFavorites };
};
