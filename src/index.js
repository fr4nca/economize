import React from 'react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

import BalanceState from './context/balance/BalanceState';
import DicasState from './context/dicas/DicasState';

const App = () => {
  return (
    <BalanceState>
      <DicasState>
        <Routes />
      </DicasState>
    </BalanceState>
  );
};

export default App;
