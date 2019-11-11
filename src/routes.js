import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Dashboard from '~/pages/Dashboard';

const Routes = createAppContainer(
  createDrawerNavigator({
    Dashboard,
  }),
);

export default Routes;
