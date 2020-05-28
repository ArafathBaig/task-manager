const calculateTip = (total , tipPercent =.25) => total + total*tipPercent

const fareheitToCelsius = (temp) => (temp-32)/1.8

const add = (a,b) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(a < 0 || b < 0){
                return reject('Numbers are non-negative')
            }

            resolve(a+b)
        },2000)
    })
}
const celsiusToFarenheit = (temp) => (temp * 1.8) + 32
module.exports = {
    calculateTip,
    fareheitToCelsius,
    celsiusToFarenheit,
    add
}