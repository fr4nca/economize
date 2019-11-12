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
    balance: 0,
    transactions: [
      {
        value: 10,
        id: 1,
      },
      {
        value: 200,
        id: 2,
      },
      {
        value: -100,
        id: 3,
      },
      {
        value: 105,
        id: 4,
      },
      {
        value: 1,
        id: 5,
      },
      {
        value: -28,
        id: 6,
      },
      {
        value: -20,
        id: 7,
      },
      {
        value: 300,
        id: 8,
      },
    ],
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

  const addTransaction = async trans => {
    addToBalance(Number(trans.value));
    dispatch({
      type: ADD_TRANSACTION,
      payload: trans,
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
