import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState('');
  const [darkmode, setDarkmode] = useState(false);
  const [error, setError] = useState('');

  // Function to search for location
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=f32c77886ff38053963e2dabd612d9e1`;
      // Fetch weather data
      axios.get(url)
        .then((response) => {
          setData([...data, response.data]);
          setError('');
        })
        .catch((error) => {
          if (error.response) {
            setError(`Error: ${error.response.data.message}`);
          } else if (error.request) {
            setError('Network Error: Please check your internet connection');
          } else {
            setError('An unexpected error occurred');
          }
        });
      setLocation(''); // Clear input field
    }
  };

  // Get current date and time
  const getCurrentDateTime = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = `${hours}:${minutes} ${ampm}`;

    return `${strTime}, ${day}-${month}-${year}`;
  };


  // Theme
  const theme = darkmode ? 'Dark' : 'Light';

  return (
    <div className={`app ${theme}`}>
      {/* Search bar */}
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type="text"
        />
      </div>
      {/* Dark mode and Clear button */}
      <div className='button-div'>
        <div className='mode'>
          <button className={`button ${theme}-button`} onClick={() => setDarkmode(!darkmode)}>
            {theme} Mode
          </button>
        </div>
        <div className='clear'>
          <button className='button' onClick={() => { setData([]); setError(''); }}>Clear</button>
        </div>
      </div>
      {/* Display weather data or error */}
      {error ? 
            <h1 className='error'>{error}</h1>
        :
          data.length > 0 && ( 
          <div className="container">
            {data.map((locationData) => (
              <div key={location.id} className={`card ${theme}`}>
                    <div className="top">
                      <div>
                        <div className="location">
                          <p>{locationData.name}</p>
                        </div>
                        <div className='date-time'>
                          <p>{getCurrentDateTime()}</p>
                        </div>
                      </div>
                      <div>
                        <div className="temp">
                          <h1>{locationData.main.temp.toFixed()}°F</h1>
                        </div>
                        <div className="description">
                          <p>{locationData.weather[0].main}</p>
                        </div>
                      </div>
                    </div>
                    {/* Additional weather details */}
                    <div className="bottom">
                      <div className="feels">
                        <p className='bold'>{locationData.main.feels_like.toFixed()}°F</p>
                        <p>Feels Like</p>
                      </div>
                      <div className="humidity">
                        <p className='bold'>{locationData.main.humidity}%</p>
                        <p>Humidity</p>
                      </div>
                      <div className="wind">
                        <p className='bold'>{locationData.wind.speed.toFixed()} MPH</p>
                        <p>Wind Speed</p>
                      </div>
                    </div>
              </div> ))}
          </div>   )}
    </div>
  );
}

export default App;
