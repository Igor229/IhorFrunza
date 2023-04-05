let priora = {
    company: 'AvtoVaz',
    model: 'VAZ 2170',
    year: 2007,
    midSpeed: 110,
    maxFuel: 40,
    fuelConsumption: 5.5,
    drivers: ['Ihor', 'Vova']
}

function vehicleInfo (obj) {
    for (let key in obj) {
        console.log(key + ': ' + obj[key])
    }
}

function addDriver (obj) {
    const newDriver = prompt("Введіть ім'я нового водія")
    obj.drivers.push(newDriver)
}

function isDriver (obj) {
    const driverName = prompt("Введіть своє ім'я")
    if (obj.drivers.includes(driverName)) {
        alert ("Ви є водієм цього авто")
    } else {
        alert ("Ви не є водієм цього авто")
    }
}

function longTrip (obj, distance) {
    const fuelAmount = (distance / 100) * obj.fuelConsumption
    const restDistance = 4 * obj.midSpeed
    const restCounter = Math.floor(distance / restDistance)
    const requiredTime = +(distance / obj.midSpeed).toFixed(2) + restCounter


    alert(`Щоб проїхати ${distance}км, знадобиться ${fuelAmount} літрів бензину
Також це займе стільки часу - ${requiredTime}год
разом з урахуванням відпочинку на стільки годин: ${restCounter}год`)
}

// let userDistance = +prompt('Скільки км ви плануєте проїхати?')
// longTrip(priora, userDistance)
// addDriver(priora)
// vehicleInfo(priora)
// isDriver(priora)