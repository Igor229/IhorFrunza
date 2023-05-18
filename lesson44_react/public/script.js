const weathers = [
    {
        city: 'Lisbon',
        temp: '21°C',
        icon: 'sun',
        color: '#3399CC',
        column: '1/3',
        row: '1/2'
    },
    {
        city: 'Paris',
        temp: '11°C',
        icon: 'rain',
        color: '#33CCCC',
        column: '3/4',
        row: '1/2'
    },
    {
        city: 'Belgrad',
        temp: '15°C',
        icon: 'little-sun',
        color: '#996699',
        column: '4/5',
        row: '1/2'
    },
    {
        city: 'Venice',
        temp: '21°C',
        icon: 'little-sun',
        color: '#C24747',
        column: '1/2',
        row: '2/3'
    },
    {
        city: 'Tel-Avive',
        temp: '32°C',
        icon: 'sun-waves',
        color: '#E2674A',
        column: '2/3',
        row: '2/3'
    },
    {
        city: 'Cair',
        temp: '21°C',
        icon: 'sun',
        color: '#FFCC66',
        column: '3/4',
        row: '2/3'
    },
    {
        city: 'New-York',
        temp: '17°C',
        icon: 'anomaly',
        color: '#99CC99',
        column: '4/5',
        row: '2/3'
    },
    {
        city: 'New-Delhi',
        temp: '17°C',
        icon: 'rain',
        color: '#669999',
        column: '1/2',
        row: '3/4'
    },
    {
        city: 'San-Francisco',
        temp: '15°C',
        icon: 'SFsun',
        color: '#CC6699',
        width: 'middle',
        column: '2/4',
        row: '3/4'
    },
    {
        city: 'Tokyo',
        temp: '8°C',
        icon: 'moon',
        color: '#339966',
        column: '4/5',
        row: '3/4'
    },
    {
        city: 'Sydney',
        temp: '25°C',
        icon: 'little-moon',
        color: '#666699',
        column: '1/5',
        row: '4/5'
    },
    {
        city: 'Kyiv',
        temp: '16°C',
        icon: 'sun',
        color: '#33CCCC',
        column: '1/3',
        row: '5/6',
    },
    {
        city: 'Lviv',
        temp: '18°C',
        icon: 'little-moon',
        color: '#FFCC66',
        column: '3/5',
        row: '5/6',
    },
]

function displayWeathers (data) {
    const {city, temp, icon, color, column, row} = data

    const weatherCard = document.createElement('div')
    weatherCard.classList.add('weather')
    weatherCard.style.backgroundColor = color
    weatherCard.style.gridColumn = column
    weatherCard.style.gridRow = row

    const weatherCity = document.createElement('p')
    weatherCity.classList.add('weather__city')
    weatherCity.innerText = city

    const weatherInfo = document.createElement('div')
    weatherInfo.classList.add('weather__info')

    const temperature = document.createElement('p')
    temperature.classList.add('weather__info-temp')
    temperature.innerText = temp

    const weatherIcon = document.createElement('img')
    weatherIcon.src = `./images/weather-icons/${icon}.png`
    weatherIcon.classList.add('weather__info-icon')

    weatherInfo.append(temperature, weatherIcon)
    weatherCard.append(weatherCity, weatherInfo)

    return weatherCard
}

const box = document.getElementById('box')

weathers.forEach((data) => {
    box.append(displayWeathers(data))
})