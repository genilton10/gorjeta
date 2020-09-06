
import React from 'react';
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

export default () => {
  return (
    <Pagina>
      <Cabecalho>Calculadora de Gorjeta</Cabecalho>
      <Input placeholder="Quanto deu a conta? " kyboardType="numeric" />
      <CalcularBtn title="Calcular 10%" />
    </Pagina>
  );
};
