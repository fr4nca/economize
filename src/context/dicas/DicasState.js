import React, { useReducer } from 'react';

import DicasContext from './dicasContext';
import dicasReducer from './dicasReducer';
import { GET_DICA, SET_DICA, GET_DICA_ATUAL } from '../types';

const BalanceState = props => {
  const initialState = {
    dicas: [
      'Você sabia que é possível fazer um investimento no Tesouro Direto com apenas R$30,00 reais? Não perca tempo, procure uma corretora de investimento.',
      'Os especialistas dizem que o ideal é guardar 10% dos seus ganhos. Quanto mais poupar, mais você vai ter. ',
      'Agora sim estamos começando a pegar tração. Já pensou em procurar uma corretora pra te ajudar?',
      'Que tal pegar 25% desse saldo e aplicar na bolsa? Pode gerar muito lucro pra você.',
      'Você entrou no vermelho :( Tome mais cuidado com o que você está gastando.',
      'Ta começando a ficar preocupante! Tente gastar menos do que você está recebendo. Evite compras parceladas. Se possível comprei à vista.',
      'Acho melhor parar de gastar! Utilize apenas 50% do seu salário para despesas básicas. Que tal procurar um contador ou uma corretora pra te aconselhar?',
    ],
    dicaAtual: -1,
    dicaTexto: '',
  };

  const [state, dispatch] = useReducer(dicasReducer, initialState);

  const getDica = async () => {
    dispatch({
      type: GET_DICA,
    });
  };

  const getDicaAtual = async () => {
    dispatch({
      type: GET_DICA_ATUAL,
    });
  };

  const setDica = async dica => {
    dispatch({
      type: SET_DICA,
      payload: dica,
    });
  };

  return (
    <DicasContext.Provider
      value={{
        dicaAtual: state.dicaAtual,
        dicaTexto: state.dicaTexto,
        getDica,
        setDica,
        getDicaAtual,
      }}>
      {props.children}
    </DicasContext.Provider>
  );
};

export default BalanceState;
