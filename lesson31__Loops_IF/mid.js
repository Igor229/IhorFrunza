// let userNumber = prompt('Введіть 5ти розрядне число')
// let palindrom = userNumber.split('').reverse().join('')

// if (userNumber == palindrom) {
//     console.log('The number ' + userNumber + ' is palindrom ' + palindrom)
// } else {
//     console.log('Not palindrom')
// }

//=========================================================================================================

// let userNumber = prompt('Введіть суму')
// let discount = 0

// if (userNumber >= 200 && userNumber < 300) {
//     discount = (userNumber * 3) / 100
//     console.log('Ваша знижка становить: ' + discount + ' Сума до оплати: ' + (userNumber - discount))
// } else if (userNumber >= 300 && userNumber < 500) {
//     discount = (userNumber * 5) / 100
//     console.log('Ваша знижка становить: ' + discount + ' Сума до оплати: ' + (userNumber - discount))
// } else {
//     discount = (userNumber * 7) / 100
//     console.log('Ваша знижка становить: ' + discount + ' Сума до оплати: ' + (userNumber - discount))
// }

//=========================================================================================================


// const userNumbers = prompt('Введіть 10 чисел')
// let positiveNums = 0
// let negativeNums = 0
// let zeroNums = 0
// let evenNums = 0
// let oddNums = 0

// let numArr = userNumbers.split(' ')

// for (let i = 0; i <= numArr.length; i++){
//     if (numArr.length < 10) {
//         alert('Ви вказали недостаньо цифер')
//     }else if (Number.parseInt(numArr[i]) == 0){
//         zeroNums++ 
//     }else if (Number.parseInt(numArr[i]) > 0){
//         positiveNums++
//     }else if (Number.parseInt(numArr[i]) < 0){
//         negativeNums++
//     }
// }

// for (let i = 0; i <= numArr.length; i++){
//     if (Number.parseInt(numArr[i]) % 2 === 0){
//         evenNums++
//     } else {
//         oddNums++
//     }
// }

// alert(`Додатніх чисел - ${positiveNums}
// Від'ємних чисел - ${negativeNums}
// Нулів - ${zeroNums}
// Парних чисел - ${evenNums}
// Непарних чисел - ${oddNums}`)

// ====================================================================================================

// const DAYS_OF_WEEK = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];

// for (let i = 0; i < DAYS_OF_WEEK.length; i++) {
//     let userValue = confirm('День тижня: ' + DAYS_OF_WEEK[i] + '. Хочеш побачити наступний день?')
//     if (!userValue) {
//         break
//     }
// }

// =====================================================================================================



