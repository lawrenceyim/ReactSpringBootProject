import { useState, useEffect } from "react";

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
  
    return <>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>Increase Counter</button>
    </>
  }
  