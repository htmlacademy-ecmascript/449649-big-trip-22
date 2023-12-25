import { filter } from '../utilities';

const generateFilter = (points) => Object.entries(filter).map(
  ([filterType, filterTasks]) => ({
    type: filterType,
    count: filterTasks(points).length
  })
);

export { generateFilter };
