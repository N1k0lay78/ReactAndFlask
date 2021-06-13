import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [currentTime, setCurrentTime] = useState(0);
  var date = new Date(currentTime)
  useEffect(() => {
    fetch("/time").then(res => res.json()).then(data => {
      setCurrentTime(data.time);
      console.log(data)
      date.setDate(data.time)
      console.log(date)
    })
  },  1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Load time is {date.getDate()}.{date.getMonth()+1}.{date.getFullYear()} {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
      </header>
    </div>
  );
}

export default App;
