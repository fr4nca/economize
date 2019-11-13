import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Dashboard from '~/pages/Dashboard';

const Routes = createAppContainer(
  createDrawerNavigator(
    {
      Dashboard,
    },
    {
      overlayColor: '#7159c1',
      contentOptions: {
        activeTintColor: '#7159c1',
      },
    },
  ),
);

export default Routes;
