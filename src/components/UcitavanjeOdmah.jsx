import React, { useState, useEffect } from "react";

function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNasaData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Image of the Day</h1>
        {nasaData.url && (
          <div>
            <img src={nasaData.url} alt={nasaData.title} />
            <h2>{nasaData.title}</h2>
            <p>{nasaData.explanation}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
