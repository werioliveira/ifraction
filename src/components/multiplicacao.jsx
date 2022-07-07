import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function Multiplicacao({props}) {
    var lastStep = 'Caso o resultado da fração seja igual no numerador e denominador é abreviado para um valor inteiro como ( 1, 2, 3 )'
    var steps = {}
    steps = {
        step1: `Multiplique o numerador ${props.numerator1} com o numerador ${props.numerator2}`,
        step2: `Em seguida multiplique o denominador ${props.denominator1} pelo denominador ${props.denominator2}`,
    }
    if (isNaN(props.resultDenominator && props.resultNumerator == '1'))
        steps = {...steps, lastStep}

  return (
    <>
        <Text style={styles.textSolution}>{steps.step1}</Text>
        <Text style={styles.textSolution}>{steps.step2}</Text>
        <Text style={styles.textSolution}>{steps?.lastStep}</Text>   
    </>
  );
}

export default Multiplicacao;