import fc from "fraction-calculator";
fc.DISABLE_REDUCE = true;

export function getSome(data){
    let response = {}
    let data2 = {
      numerator1: data.numerator1,
      numerator2: data.numerator2,
      denominator1: data.denominator1,
      denominator2: data.denominator2
    }

    response = fc(data2.numerator1.toString()+'/'+data2.denominator1.toString()).plus(data2.numerator2.toString()+'/'+data2.denominator2.toString()).toFraction()
    let n = response.split("/")
    n = {
      numerator: n[0],
      denominator: n[1]
    }
    return n
}

export function getMinus(data){
  let response = {}
  let data2 = {
    numerator1: data.numerator1,
    numerator2: data.numerator2,
    denominator1: data.denominator1,
    denominator2: data.denominator2
  }

  response = fc(data2.numerator1.toString()+'/'+data2.denominator1.toString()).minus(data2.numerator2.toString()+'/'+data2.denominator2.toString()).toFraction()
  let n = response.split("/")
  n = {
    numerator: n[0],
    denominator: n[1]
  }
  return n

}
export function getMultiply(data){
  let response = {}
  let data2 = {
    numerator1: data.numerator1,
    numerator2: data.numerator2,
    denominator1: data.denominator1,
    denominator2: data.denominator2
  }

  response = fc(data2.numerator1.toString()+'/'+data2.denominator1.toString()).times(data2.numerator2.toString()+'/'+data2.denominator2.toString()).toFraction()
  let n = response.split("/")
  n = {
    numerator: n[0],
    denominator: n[1]
  }
  return n
}
export function getDivided(data){
  let response = {}
  let data2 = {
    numerator1: data.numerator1,
    numerator2: data.numerator2,
    denominator1: data.denominator1,
    denominator2: data.denominator2
  }

  response = fc(data2.numerator1.toString()+'/'+data2.denominator1.toString()).div(data2.numerator2.toString()+'/'+data2.denominator2.toString()).toFraction()
  let n = response.split("/")
  n = {
    numerator: n[0],
    denominator: n[1]
  }
  return n
}