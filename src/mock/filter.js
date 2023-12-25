import { filter } from '../utilities';

const generateFilter = (points) => Object.entries(filter).map(
  ([filterType, filterTasks]) => ({
    name: filterType,
    count: filterTasks(points).length
  })
);

export { generateFilter };
