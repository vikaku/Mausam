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
                            placeholder="Search for city"
                            value={cityInput}
                            onChange={(e) => setCityInput(e.target.value)}
                            onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                getMausamData(cityInput);
                            }
                            }}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default WeatherLeftPanel;