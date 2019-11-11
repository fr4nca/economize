import React, { useReducer } from 'react';
import BalanceContext from './balanceContext';
import balanceReducer from './balanceReducer';
import {
  GET_BALANCE,
  ADD_TRANSACTION,
  ADD_TO_BALANCE,
  GET_TRANSACTIONS,
} from '../types';

const BalanceState = props => {
  const initialState = {
    balance: 198,
    transactions: [100, 60, 38],
  };

  const [state, dispatch] = useReducer(balanceReducer, initialState);

  const getBalance = async () => {
    dispatch({
      type: GET_BALANCE,
    });
  };

  const addToBalance = async transaction => {
    dispatch({
      type: ADD_TO_BALANCE,
      payload: transaction,
    });
  };

  const getTransactions = async () => {
    dispatch({
      type: GET_TRANSACTIONS,
    });
  };

  const addTransaction = async value => {
    addToBalance(value);
    dispatch({
      type: ADD_TRANSACTION,
      payload: value,
    });
  };

  return (
    <BalanceContext.Provider
      value={{
        balance: state.balance,
        transactions: state.transactions,
        getBalance,
        addToBalance,
        addTransaction,
        getTransactions,
      }}>
      {props.children}
    </BalanceContext.Provider>
  );
};

export default BalanceState;
