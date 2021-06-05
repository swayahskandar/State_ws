// import logo from './logo.svg';
import './App.css';
import Greet from './Greet1/Greet'
import Skan from './Greet1/Skan';

function App() {
  return (
    <div className="App">
      <Greet name='Menji' lastName='clark'>
        <p>this is a child component</p>
      </Greet>
      <Greet name='skandar'lastName='swayah'>
        </Greet>
      <Greet name= 'hmem' lastName='hamoum'/>
      <Skan age='45'/>
    </div>
  );
}

export default App;
