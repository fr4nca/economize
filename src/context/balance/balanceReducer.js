import {
  GET_BALANCE,
  ADD_TRANSACTION,
  ADD_TO_BALANCE,
  GET_TRANSACTIONS,
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
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
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
