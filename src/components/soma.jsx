import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

function Soma({props}) {

    var lastStep = 'Caso o resultado da fração seja igual no numerador e denominador é abreviado para um valor inteiro como ( 1, 2, 3 )'
    var steps = {}
    if(props.denominator1 == props.denominator2){
        steps = {
            step1: `Some o numerador ${props.numerator1} com o numerador ${props.numerator2}`,
            step2: `Em seguida mantenha o denominador ${props.denominator1} pois ambos são iguais`,
        }
    }
    else{
        steps = {
            step1: `Multiplique o denominador ${props.denominator1} com o denominador ${props.denominator2}`,
            step2: `Em seguida multiplique o numerador ${props.numerator1} pelo denominador ${props.denominator2}`,
            step3: `Em seguida multiplique o numerador ${props.numerator2} pelo denominador ${props.denominator1}`,
            step4: `Para finalizar some o resultado da multiplicação dos numeradores que resultará no numerador ${props.resultNumerator}`
        }        
    }
    if (isNaN(props.resultDenominator)){
        steps = {...steps, lastStep}
    }



  return (
    <>
                <Text style={styles.textSolution}>{steps.step1}</Text>
                <View style={styles.divisor}/>
                <Text style={styles.textSolution}>{steps.step2}</Text>
                <View style={styles.divisor}/>
                {steps?.step3 ?
                <View>
                    <Text style={styles.textSolution}>{steps?.step3}</Text>
                    <View style={styles.divisor}/>
                    <Text style={styles.textSolution}>{steps?.step4}</Text>
                    <View style={styles.divisor}/>
                </View>
                :
                 <Text></Text>
                }

                <Text style={styles.textSolution}>{steps?.lastStep}</Text>   
    </>
  )
}

export default Soma;