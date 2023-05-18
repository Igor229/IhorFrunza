
import { useState } from 'react';
import './App.css';

const DEFAULT_CITIES = [
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

function WeatherCard (props) {
    const {city, temp, icon, color, column, row} = props
    const iconPath = `./images/weather-icons/${icon}.png`

    return (
        <div className='weather' style={{backgroundColor: color, gridColumn: column, gridRow: row}}>
            <p className='weather__city'>{city}</p>
            <div className='weather__info'>
                <p className='weather__info-temp'>{temp}</p>
                <img src={iconPath}></img>
            </div>
        </div>
    )
}

function App() {
    const [cities, setNewCity] = useState(DEFAULT_CITIES)
    const addCity = () => {
        const newCity = {
            city: 'Ivano-Frankivsk',
            temp: '19°C',
            icon: 'moon',
            color: '#C24747',
            column: '1/5',
            row: '6/7',
        }

        setNewCity([...cities, newCity])
    }

  return (
    <div className='wrapper'>
        <div className="main__info">
            <span className="main__info-title">CSS Weather Forecast</span>
            <img src="./images/main-icon.png" alt="main__info-icon"/>
        </div>


        <div className='box'>
            {
                cities.map(data => (
                    <WeatherCard 
                        city={data.city} 
                        temp={data.temp} 
                        icon={data.icon} 
                        color={data.color} 
                        row={data.row} 
                        column={data.column}/>
                ))
            }
        </div>
        
        <button onClick={addCity}>Add IF</button>
        <p className='sub-title'>Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
    </div>
  )
}

export default App;
