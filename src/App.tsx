import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/calculator-builder">Build a Calculator</Link> |{" "}
        <Link to="/calculator-viewer">View Calculators</Link>
      </header>
    </div>
  );
}

export default App;
