import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherLeftPanel from './WeatherLeftPanel';

const WeatherHome = () => {

    const [randomCity, setRandomCity] = useState('')
    const [cityInput, setCityInput] = useState("")

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
            if (response.data.code === '404') {
                alert("sorry, you have entered is not found..")
            }
            setRandomCity(response.data)
        } catch (err) {
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
                            cityInput={cityInput}
                            setCityInput={setCityInput}
                            randomCity={randomCity}
                            getMausamData={getMausamData}
                        />
                    </div>
            }
        </>
    )



}

export default WeatherHome;