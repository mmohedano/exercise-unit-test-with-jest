const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInYen = (valueInEuro * 1.07)*156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}
/*const fromYenToPound = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInPound = ((valueInEuro * 1.07)*156.5)*0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}
*/

const sum = (a, b) => {
    return a+b;
}
console.log(sum(4,6))

module.exports = {sum, fromEuroToDollar};