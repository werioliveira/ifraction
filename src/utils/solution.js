var lastStep = 'Caso o resultado da fração seja igual no numerador e denominador é abreviado para 1 ( um inteiro )'
var steps = {}
export function some(data){
    if(data.denominator1 == data.denominator2){
        steps = {
            step1: `Some o numerador ${data.numerator1} com o numerador ${data.numerator2}`,
            step2: `Em seguida mantenha o denominador ${data.denominator1} pois ambos são iguais`,
        }
    }
    else{
        steps = {
            step1: `Multiplique o denominador ${data.denominator1} com o denominador ${data.denominator2}`,
            step2: `Em seguida multiplique o numerador ${data.numerator1} pelo denominador ${data.denominator2}`,
            step3: `Em seguida multiplique o numerador ${data.numerator2} pelo denominador ${data.denominator1}`,
            step4: `Para finalizar some o resultado da multiplicação dos numeradores que resultará no numerador ${data.resultNumerator}`
        }        
    }
    if (isNaN(data.resultDenominator && data.resultNumerator == '1')){
        steps = {...steps, lastStep}
    }
    return steps
}
export function substract(data){
    if(data.denominator1 == data.denominator2){
        steps = {
            step1: `Subtraia o numerador ${data.numerator1} com o numerador ${data.numerator2}`,
            step2: `Em seguida mantenha o denominador ${data.denominator1} pois ambos são iguais`,
        }
    }
    else{
        steps = {
            step1: `Multiplique o denominador ${data.denominator1} com o denominador ${data.denominator2}`,
            step2: `Em seguida multiplique o numerador ${data.numerator1} pelo denominador ${data.denominator2}`,
            step3: `Em seguida multiplique o numerador ${data.numerator2} pelo denominador ${data.denominator1}`,
            step4: `Para finalizar subtraia o resultado da multiplicação dos numeradores que resultará no numerador ${data.resultNumerator}`
        }        
    }
    if (isNaN(data.resultDenominator && data.resultNumerator == '1')){
        steps = {...steps, lastStep}
    }
    return steps
}
export function mult(data){
    steps = {
        step1: `Multiplique o numerador ${data.numerator1} com o numerador ${data.numerator2}`,
        step2: `Em seguida multiplique o denominador ${data.denominator1} pelo denominador ${data.denominator2}`,
    }
    if (isNaN(data.resultDenominator && data.resultNumerator == '1')){
        steps = {...steps, lastStep}
    }
    return steps
}
export function division(data){

    steps = {
        step1: `Multiplique o numerador ${data.numerator1} com o denominador ${data.denominator2}`,
        step2: `Em seguida multiplique o numerador ${data.numerator2} pelo denominador ${data.denominator1}`,
    }        
    if (isNaN(data.resultDenominator && data.resultNumerator == '1')){
        steps = {...steps, lastStep}
    }
    return steps
}