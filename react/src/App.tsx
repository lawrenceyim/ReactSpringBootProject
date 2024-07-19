import { useEffect, useState } from 'react';
import './App.css'

export interface AppProps {
  name: string;
}

function App(data: AppProps) {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('http://localhost:8080/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(() => console.error('Error fetching API response.'));
  }, []);

  return (
    <>
    <h1>{message}</h1>
    <h1>Engineer: {data.name}</h1>
    </>
  )
}

export default App
