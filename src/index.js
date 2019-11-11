import React from 'react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

import BalanceState from './context/balance/BalanceState';

const App = () => {
  return (
    <BalanceState>
      <Routes />
    </BalanceState>
  );
};

export default App;
