
import React, { useState } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

const Pagina = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const Cabecalho = styled.Text`
  margin-top: 10px;
  font-size: 25px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 20px;
  background-color: #eee;
  border-radius: 10px;
  margin-top: 10px;
  padding: 11px;
`;

const CalcularBtn = styled.Button`
`;

const AreaResultado = styled.View`
  width: 95%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const TituloResultado=styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ItemResultado = styled.Text`
  font-size: 16px;
  margin-bottom: 30px;
`;

export default () => {

  const [conta, alteraConta] = useState('50');

  return (
    <Pagina>
      <Cabecalho>Calculadora de Gorjeta</Cabecalho>
      <Input placeholder="Quanto deu a conta? " kyboardType="numeric" value={conta} onChangeText={(valor) => alteraConta(valor)} />
      <CalcularBtn title="Calcular 10%" />
      {conta > 0 && 
      <AreaResultado>
        <TituloResultado>Valor da Conta</TituloResultado>
        <ItemResultado>R${parseFloat(conta).toFixed(2)}</ItemResultado>
        <TituloResultado>Valor da Gorjeta</TituloResultado>
        <ItemResultado>{(conta/10).toFixed(2)}</ItemResultado>
        <TituloResultado>Valor Total</TituloResultado>
        <ItemResultado>{(conta * 1.1).toFixed(2)}</ItemResultado>
      </AreaResultado>
      }
    </Pagina>
  );
};
