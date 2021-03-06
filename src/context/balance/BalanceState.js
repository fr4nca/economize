import React, { useReducer } from 'react';
import uuid from 'uuid';

import BalanceContext from './balanceContext';
import balanceReducer from './balanceReducer';
import {
  GET_BALANCE,
  ADD_TRANSACTION,
  ADD_TO_BALANCE,
  GET_TRANSACTIONS,
  DELETE_TRANSACTION,
  SUB_BALANCE,
} from '../types';

const BalanceState = props => {
  const initialState = {
    balance: 0,
    transactions: [
      {
        value: 10,
        id: uuid.v4(),
      },
      {
        value: 200,
        id: uuid.v4(),
      },
      {
        value: -100,
        id: uuid.v4(),
      },
      {
        value: 105,
        id: uuid.v4(),
      },
      {
        value: 1,
        id: uuid.v4(),
      },
      {
        value: -28,
        id: uuid.v4(),
      },
      {
        value: -20,
        id: uuid.v4(),
      },
      {
        value: 300,
        id: uuid.v4(),
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

  const subFromBalance = async transaction => {
    dispatch({
      type: SUB_BALANCE,
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

  const deleteTransaction = async trans => {
    subFromBalance(Number(trans.value));
    dispatch({
      type: DELETE_TRANSACTION,
      payload: trans.id,
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
        deleteTransaction,
        getTransactions,
        subFromBalance,
      }}>
      {props.children}
    </BalanceContext.Provider>
  );
};

export default BalanceState;
