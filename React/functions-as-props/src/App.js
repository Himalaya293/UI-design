import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>Multiple Components</h1>
        <Home/>
      </div>
    </div>
  );
}

export default App;
