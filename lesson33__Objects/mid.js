let time = {
    hours: 20,
    minutes: 59,
    seconds: 45
}

console.log(`На годиннику ${time.hours}:${time.minutes}:${time.seconds}`)

const userSeconds = +prompt('Скільки секунд додати?')
const userMinutes = +prompt('Скільки хвилин додати?')
const userHours = +prompt('Скільки годин додати?')

function addSeconds (seconds) {
    const totalSeconds = time.seconds + seconds
    time.seconds = totalSeconds % 60
    addMinutes(Math.floor(totalSeconds / 60))
}

function addMinutes (minutes) {
    const totalMinutes = time.minutes + minutes
    time.minutes = totalMinutes % 60
    addHours(Math.floor(totalMinutes / 60))
}

function addHours (hours) {
    const totalHours = time.hours + hours
    time.hours = totalHours % 24
}



addHours(userHours)
addMinutes(userMinutes)
addSeconds(userSeconds)

console.log(`На годиннику ${time.hours}:${time.minutes}:${time.seconds}`)
