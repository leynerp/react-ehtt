import { listOfPersons } from '../mocks/persons';
import { type Person } from '../types';

export const getWorkers = async () => {
  return await new Promise<Person[]>((resolve) => {
    setInterval(() => {
      resolve(listOfPersons)
    }, 1000)
  });
}
