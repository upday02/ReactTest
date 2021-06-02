import logo from './logo.svg';
import './App.css';
import { Simulate } from 'react-dom/test-utils';

function App() {
 function brunocorno(bruno){
 if (bruno) {
            const corno = "Bruno, é corno sim e me deve breja"
            return corno
           
          }
        }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {brunocorno(true)}  
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
