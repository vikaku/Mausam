import React from 'react';

const WeatherLeftPanel = (props)=> {

    const {
        isDarkMode,
        setIsDarkMode,
        cityInput,
        setCityInput,
        randomCity,
        getMausamData,
    } =props;
    const {main, weather, wind, name} = randomCity;
    // const {temp,humidity} = main;
const tapaman = main ? main.temp - 273.15 : '';
    return(
        <>
            <div className="weather_container_left_panel">
                <div className="weather_container_top_section d-block">
                    <div className='weather_title_div'>
                        <h1 style ={{fontWeight:900}}>Mausam Dashboard!</h1>
                        {/* Button */}
                    </div>
                    <div className="weather_container_time_and_input_div my-2">
          {/* <WeatherDataLabel
            dataTitle="data-time-stamp"
            style={{ fontWeight: 900, display: "block" }}
            buttonInnerText={currentTime}
          /> */}
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
                    </div> 
                    <button 
                        type="button"
                        className="btn btn-primary mb-3 mt-3"
                        onClick={() => getMausamData(cityInput)}
                        >
                        Hit
                    </button>
                    {randomCity && 
                    <div className='mausam-detail'>
                            <strong className='mausam-temp'>{tapaman.toFixed(2)}°C</strong>
                    </div>}
                </div>

            </div>
        </>
    )
}

export default WeatherLeftPanel;