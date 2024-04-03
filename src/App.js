import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold ">
      Professional Shopping Made Easy
    </h1>
    <Pricing></Pricing>

    </div>
  );
}

export default App;
