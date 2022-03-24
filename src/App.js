import React from "react";
import logo from './logo.svg';
import './App.css';

import FirstPage from './components/FirstPage';

// Fetching data from /api endpoint.
// Making simple GET request using Fetch API to backend 
// and then have data returned as JSON.
function App() {
  const [data, setData] =
  React.useState(null);
// HTTP request using useEffect
  React.useEffect(() => {
    fetch("http://localhost:3001")
    .then((res) => res.json())
    .then((data) => 
    setData(data.message));
  }, []);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> 
          <h1>Blame it on the lightning</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
