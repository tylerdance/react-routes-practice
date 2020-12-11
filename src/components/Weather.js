import React, { useState } from 'react';
import axios from 'axios';
import WeatherResults from '../WeatherResults'

function Weather() {
    const [zip, setZip] = useState('');
    const [weather, setWeather] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
        axios.get(url)
        .then(result => {
            //set state
            setWeather(result.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    // conditionally render a weather result component


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Get your local weather</h2>
                {weather ? <WeatherResults weather={weather} /> : null }
                <label htmlFor='zip'>Zipcode: </label>
                <input type="text" name="zip" id="zip" onChange={e => setZip(e.target.value)} />
                <input type="submit" value="Find Weather" />
            </form>
        </div>
    )
}

export default Weather;