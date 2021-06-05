// import logo from './logo.svg';
import './App.css';
import Greet from './Greet1/Greet'
import Skan from './Greet1/Skan';

function App() {
  return (
    <div className="App">
      <Greet name='Menji' lastName='clark'><Greet/
      <Greet name='skandar'lastName='swayah'/>
      <Greet name= 'hmem' lastName='hamoum'/>
      <Skan age='45'/>
    </div>
  );
}

export default App;
