import { SET_DICA, GET_DICA, GET_DICA_ATUAL } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_DICA:
      return {
        ...state,
        dicaTexto: state.dicas[state.dicaAtual],
      };
    case SET_DICA:
      return {
        ...state,
        dicaAtual: action.payload,
      };
    case GET_DICA_ATUAL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
