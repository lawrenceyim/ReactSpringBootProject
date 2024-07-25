import { useState, useEffect } from "react";
import '../css/CounterGame.css';

export function CounterGame() {
  const [counter, setCounter] = useState(0);

  // Use useEffect for the initial render of the CounterGame component so that getScore isn't called
  // each time that the component is rendered.
  useEffect(() => {
    getScore();
  }, []);

  function getScore() {
    fetch('http://localhost:8080/getScore')
      .then(response => response.json())
      .then(data => setCounter(Number(data.score)))
      .catch(error => console.error(error));
  }

  function increaseCounter() {
    fetch('http://localhost:8080/increaseScore')
      .then(() => getScore())
      .catch(error => console.error(error));
  }

  return <div className="counterContainer">
    <h1 className="counterTitle">Counter</h1>
    <h1 className="counterDisplay">{counter}</h1>
    <button className="counterButton" onClick={increaseCounter}>Increase Counter</button>
  </div>
}
