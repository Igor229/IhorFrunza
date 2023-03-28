// function myFunction () {
//     return 'Первий варінт'
// }

// let yourFunction = function(a, b){
//     return a + b
// }

// let anotherFunction = (a, b) => {
//     return a + b
// }

// let alsoFunction = new Function('a', 'b', 'return a + b;')

// console.log(myFunction())
// console.log(yourFunction(1, 2))
// console.log(alsoFunction(3, 4))


// ============================================================================

// function countArgs() {
//     return arguments.length
// }
// console.log(countArgs(1, 'asd', 6))

// =============================================================================

// function countNums (a, b) {
//     if (a < b) {
//         return -1
//     } else if (a > b){
//         return 1
//     } else {
//         return 0
//     }
// }

// console.log(countNums(6, 6))

// =============================================================================



// function countFactorial(n) {
//     let result = 1

//     for (let i = 1; i <= n; i++){
//         result *= i
//     }

//     return result
// }

// const userNumber = Number.parseInt(prompt('Введіть число '))

// alert('Факторіал ' + userNumber + ' = ' + countFactorial(userNumber))

// ===============================================================================

// function joinNums (a, b, c) {
//     let result = a.toString() + b.toString() + c.toString()
//     return result 
// }

// let firstNum = prompt('Введіть перше число')
// let secondNum = prompt('Введіть друге число')
// let thirdNum = prompt('Введіть третж число')

// alert(joinNums(firstNum, secondNum, thirdNum))

// ===================================================================================

// function getArea (width, height) {
//     if (!height) {
//         return width * width
//     } else {
//         return width * height
//     }
// }

// console.log(getArea(10, 5))

// ===================================================================================