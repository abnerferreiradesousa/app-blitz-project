import React, { useEffect } from 'react';
import './App.css';

function App() {
  const api = async () => {
    const response = await fetch('http://localhost:3001/task');
    const data = await response.json();
    console.log(data.data);
  };

  useEffect(() => {
    async function fetchFrom() {
      await api();
    }
    fetchFrom();
  }, []);

  return <section>Home</section>;
}

export default App;
