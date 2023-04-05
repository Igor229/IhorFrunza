let fraction = {
    integer: 2,
    float: 5
}

let userFraction = {
    integer: 3,
    float: 3
} 

// userFraction.integer = +prompt('введіть ціле число')
// userFraction.float = +prompt('введіть число після коми')

console.log(fraction)
console.log(userFraction)

function sumFractions (obj, userObj) {
    const firstNum = `${obj.integer}.${obj.float}`
    const userNum = `${userObj.integer}.${userObj.float}`

    console.log(Number(firstNum) + Number(userNum) + ' Додавання')
}

function subFractions (obj, userObj) {
    const firstNum = `${obj.integer}.${obj.float}`
    const userNum = `${userObj.integer}.${userObj.float}`

    console.log((Number(firstNum) - Number(userNum)).toFixed(2) + ' Віднімання')
}

function multiplyFractions (obj, userObj) {
    const firstNum = `${obj.integer}.${obj.float}`
    const userNum = `${userObj.integer}.${userObj.float}`

    console.log(Number(firstNum) * Number(userNum) + ' Множення')
}

function divFractions (obj, userObj) {
    const firstNum = `${obj.integer}.${obj.float}`
    const userNum = `${userObj.integer}.${userObj.float}`

    console.log((Number(firstNum) / Number(userNum)).toFixed(2) + ' Ділення')
}

sumFractions(fraction, userFraction)
subFractions(fraction, userFraction)
multiplyFractions(fraction, userFraction)
divFractions(fraction, userFraction)