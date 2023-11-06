import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherHome from './components/WeatherHome';
import './App.css';

const App = () => {
 const [isDarkMode, setIsDarkMode] = useState(true)


  return (
    <>
      <Header  isDarkMode = {isDarkMode}/>
      <WeatherHome />
      <Footer  isDarkMode = {isDarkMode}/>
    </>
  );
}

export default App;
