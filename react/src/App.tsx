import {useState } from 'react';
import './App.css'

export interface AppProps {
  name: string;
}

export default function App() {
  return (
    <>
      <CounterGame />
    </>
  )
}

function CounterGame() {
  const [counter, setCounter] = useState(0);
  getScore();

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
