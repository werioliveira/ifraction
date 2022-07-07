import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function Subtracao({props}) {
    var lastStep = 'Caso o resultado da fração seja igual no numerador e denominador é abreviado para um valor inteiro como ( 1, 2, 3 )'
    var steps = {}
    if(props.denominator1 == props.denominator2){
        steps = {
            step1: `Subtraia o numerador ${props.numerator1} com o numerador ${props.numerator2}`,
            step2: `Em seguida mantenha o denominador ${props.denominator1} pois ambos são iguais`,
        }
    }
    else{
        steps = {
            step1: `Multiplique o denominador ${props.denominator1} com o denominador ${props.denominator2}`,
            step2: `Em seguida multiplique o numerador ${props.numerator1} pelo denominador ${props.denominator2}`,
            step3: `Em seguida multiplique o numerador ${props.numerator2} pelo denominador ${props.denominator1}`,
            step4: `Para finalizar subtraia o resultado da multiplicação dos numeradores que resultará no numerador ${props.resultNumerator}`
        }        
    }
    if (isNaN(props.resultDenominator && props.resultNumerator == '1'))
        steps = {...steps, lastStep}

  return (
    <>
        <Text style={styles.textSolution}>{steps.step1}</Text>
        <Text style={styles.textSolution}>{steps.step2}</Text>
        <Text style={styles.textSolution}>{steps?.step3}</Text>
        <Text style={styles.textSolution}>{steps?.step4}</Text>
        <Text style={styles.textSolution}>{steps?.lastStep}</Text>   
    </>
  );
}

export default Subtracao;