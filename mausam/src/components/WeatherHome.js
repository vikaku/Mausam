import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherLeftPanel from './WeatherLeftPanel';

const WeatherHome = () => {

    const [randomCity, setRandomCity] = useState('')
    const [cityInput, setCityInput] = useState("");
    const [msg,setMsg] = useState('');
    const [useImg,setUseImg] = useState('');

    let mausamUrl = '';
    const getMausamData = async (cityInput) => {
        if (cityInput) {
            mausamUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=fe4feefa8543e06d4f3c66d92c61b69c`;
        }
        // if(zipCode){
        //     mausamUrl =  `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${cipher}`;
        // }
        try {
            const response = await axios.get(`${mausamUrl}`);
            console.log("data.......", response.data)
            const {weather} = response.data;
            const weatherImage = (data) => {
                switch (data) {
                    case 'haze' : setUseImg('/icons/haze.svg');
                        break;
                    case 'clouds' : 
                    setUseImg('/icons/cloudy.svg');
                        break;
                    case 'clear' : 
                    setUseImg('/icons/sunny.svg');
                        break;
                    case 'rain' : 
                    setUseImg('/icons/rain.svg');
                        break;
                    case 'wind' : 
                    setUseImg('/icons/wind.svg');
                        break;
                    case 'storm' : 
                    setUseImg('/icons/storm.svg');
                        break;
                    default: 
                    setUseImg('/icons/perfect-day.svg');  
                }
            }
            weatherImage( weather ? weather[0].main.toLowerCase() : null)
            setRandomCity(response.data)
            setMsg('')
        } catch (err) {
            setMsg(err.response.data.message)
            setRandomCity('')
            console.log(err, 'error is found')
        }
    }


    return (
        <>
            {
                    <div className={`weather_information_container `}>
                        {/* <div className={`weather_information_container ${isDarkMode ? 'dark_mode' : 'light_mode'}`}> */}
                        <WeatherLeftPanel
                            // isDarkMode={isDarkMode}
                            // setIsDarkMode={setIsDarkMode}
                            msg ={msg}
                            cityInput={cityInput}
                            setCityInput={setCityInput}
                            randomCity={randomCity}
                            getMausamData={getMausamData}
                            useImg={useImg}
                        />
                    </div>
            }
        </>
    )



}

export default WeatherHome;