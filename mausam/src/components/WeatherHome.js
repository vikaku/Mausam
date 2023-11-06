import React ,{useEffect, useState} from 'react';
import WeatherLeftPanel from './WeatherLeftPanel';

const WeatherHome = () => {

    const [randomCity, setRandomCity] = useState('')
    const [cityInput, setCityInput] = useState('')

    function getSecretToken(randomToken) {
        let tokenWithoutRandomKey = randomToken.replace("random", "");
        let token = tokenWithoutRandomKey.split("").reverse().join("");
        return token;
      }
    
      const cipherCode1 = getSecretToken("e7b5random03d3");
      const cipherCode2 = getSecretToken("4b8frandomb78e");
      const cipherCode3 = getSecretToken("9413random053c");
      const cipherCode4 = getSecretToken("c1carandomb056");
    
      let cipher;
    
      function sum(arg1, arg2, arg3, arg4) {
        return (cipher = arg1 + arg2 + arg3 + arg4);
      }
    
      sum(cipherCode1, cipherCode2, cipherCode3, cipherCode4);

    let mausamUrl='';
    let unit = "metric";
    const getMausamData = async(cityInput) => {
                if(cityInput){
                    mausamUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&&limit=5&&appid=${cipher}&&units=${unit}`;;
                    
                }
                // if(zipCode){
                //     mausamUrl =  `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${cipher}`;
                // }
                try {
                    const options = {
                        method: 'GET',
                        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                        params: {q: '53.1,-0.13'},
                        headers: {
                          'X-RapidAPI-Key': '9a9ca135efmshb58bd31914ed2a3p1142c9jsnab8cc6f754a7',
                          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                        }
                      };
                   const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1,-0.13');
                   debugger;
                   const data =await response.json();
                   console.log("data.......",data)
                   if(data.code === '404'){
                    alert("sorry, you have entered is not found..")
                   }
                   setRandomCity(data)
                }catch(err) {
                    console.log(err, 'error is found')
                }
    }

    useEffect(()=>{
        getMausamData(cityInput);
    },[])

    return(
        <>
        {
            randomCity && (
                <div className={`weather_information_container `}>
                {/* <div className={`weather_information_container ${isDarkMode ? 'dark_mode' : 'light_mode'}`}> */}
                    <WeatherLeftPanel 
                        // isDarkMode={isDarkMode}
                        // setIsDarkMode={setIsDarkMode}
                        cityInput   = {cityInput}
                        setCityInput   = {setCityInput}
                        randomCity   = {setRandomCity}
                        getMausamData = {getMausamData}
                    />
                </div>
            )
        }
        </>
    )
        
        
    
}

export default WeatherHome;