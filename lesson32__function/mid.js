function isPerfect(num){
    let divisionSum = 0

    for (let i = 1; i <= num /2; i++){
        if (num % i === 0){
            divisionSum += i
        }
    }

    if (divisionSum === num) {
        return  true
    } else {
        return false
    }
}

// =================================================================

let range = []

function getPerfectNums (startRange, endRange) {

    for (let i = startRange; i <= endRange; i++){
        range.push(i)
    }

    for (let i = 0; i <= range.length; i++){
        if (isPerfect(range[i])){
            console.log(range[i])
        }
    }

}

getPerfectNums(3, 30)
