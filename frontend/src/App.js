import logo from './logo.svg';
import {useEffect} from 'react'
import './App.css';

function App() {

  const api = async () => {
    const response =  await fetch('http://localhost:3001/task')
    const data = await response.json()
    console.log(data.data);
  }

  useEffect(() => {
    async function fetchFrom() {
      await api()
    }
    fetchFrom()
  }, [])
  
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
      </header>
    </div>
  );
}

export default App;
