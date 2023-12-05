import { addFavorite } from '../reduxtk/slice/workersSlice'
import { useAppDispatch } from './useReduxType';
export const useFavorites = () => {
  const dispatchAction = useAppDispatch();
  const handleFavorite = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const idWorker = (e.target as SVGSVGElement).ownerSVGElement?.id.split('/')[1];
    if (idWorker !== undefined) { dispatchAction(addFavorite({ id: idWorker })) }
  };
  return { handleFavorite };
};
