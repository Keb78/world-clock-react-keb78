import React, { useState } from 'react';
import './App';
import Clock from './Clock';

const cities = [
  { name: 'Stockholm', timeZone: 'Europe/Stockholm', class: 'dot-stockholm' },
  { name: 'London', timeZone: 'Europe/London', class: 'dot-london' },
  { name: 'New York', timeZone: 'America/New_York', class: 'dot-newyork' },
  { name: 'Istanbul', timeZone: 'Europe/Istanbul', class: 'dot-istanbul' },
  { name: 'Hong Kong', timeZone: 'Asia/Hong_Kong', class: 'dot-hongkong' },
  { name: 'Los Angeles', timeZone: 'America/Los_Angeles', class: 'dot-losangeles' },
];

function App() {
  const [activeCity, setActiveCity] = useState('');

  const handleMouseEnter = (cityClass) => {
    setActiveCity(cityClass);
  };

  const handleMouseLeave = () => {
    setActiveCity('');
  };

  return (
    <div className="App">
      {cities.map((city) => (
        <div
          key={city.name}
          className={`dot ${city.class} ${activeCity === city.class ? 'active' : ''}`}
        ></div>
      ))}
      <div className="clock-container">
        {cities.map((city) => (
          <Clock
            key={city.name}
            city={city.name}
            timeZone={city.timeZone}
            onMouseEnter={() => handleMouseEnter(city.class)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
