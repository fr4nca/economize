import {
  GET_BALANCE,
  ADD_TRANSACTION,
  ADD_TO_BALANCE,
  GET_TRANSACTIONS,
  DELETE_TRANSACTION,
  SUB_BALANCE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_BALANCE:
      return {
        ...state,
        balance: state.transactions.reduce((a, b) => a + b.value, 0),
      };
    case ADD_TO_BALANCE:
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case SUB_BALANCE:
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          trans => trans.id !== action.payload,
        ),
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: state.transactions,
      };
    default:
      return state;
  }
};
