import React from 'react';
import '../App.css'

const WeatherLeftPanel = (props)=> {
    

    const {
        isDarkMode,
        setIsDarkMode,
        cityInput,
        setCityInput,
        randomCity,
        getMausamData,
        msg,
        useImg,
    } =props;
    const {main, weather, wind, name} = randomCity;
    // const {temp,humidity} = main;
const tapaman = main ? main.temp - 273.15 : '';
const mausamDesc = weather ? weather[0].description : '';
const windSpeedConversion= wind ? wind.speed* 3.6:''


    return(
        <>
            <div className="weather_container_left_panel">
                <div className="weather_container_top_section d-block">
                    <div className='weather_title_div'>
                        <h1 style ={{fontWeight:900}}>Mausam Dashboard!</h1>
                        {/* Button */}
                    </div>
                    <div className="weather_container_time_and_input_div my-2">
                        <input
                            type="text"
                            placeholder="Enter the Location"
                            // value={cityInput}
                            onChange={(e) => setCityInput(e.target.value)}
                            onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                getMausamData(cityInput);
                            }
                            }}
                        />
                        {cityInput && msg && <div className='not-found-msg'>{msg}</div>}
                    </div> 
                    <button 
                        type="button"
                        className="btn btn-primary mb-3 mt-3"
                        onClick={() => getMausamData(cityInput)}
                        >
                        Hit
                    </button>
                    {randomCity && cityInput && 
                    <div className='mausam-detail'>
                        <div className='mausam-title'>{`${cityInput.toUpperCase()} weather:-`}</div>
                        <div className='mausam-wrapper'>
                            <div className='mausam-left'>
                                <div className='mausam-look'>{mausamDesc}</div>
                                <div className='mausam-temp'>{tapaman.toFixed(2)}°C</div>
                            </div>
                            <div className='mausam-mid'>
                            <img src = {useImg} alt ='mausam-icon'/>
                            </div>
                            <div className='mausam-right'>
                                <div>{`wind-speed:${windSpeedConversion.toFixed(2)} km/h`}</div>
                                <div>{`humidity:${main.humidity}`} %</div>
                            </div>
                        </div>
                        
                    </div>}
                </div>

            </div>
        </>
    )
}

export default WeatherLeftPanel;