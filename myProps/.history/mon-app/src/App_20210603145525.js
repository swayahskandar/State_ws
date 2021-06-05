// import logo from './logo.svg';
import './App.css';
import Greet from './Greet1/Greet'
import Skan from './Greet1/Skan';
import ProfileComp from './Profile/ProfileComp';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Menji' lastName='clark'>
        <p>this is a child component</p>
      </Greet>
      <Greet name='skandar'lastName='swayah'>
        <button>start</button>
        </Greet>
      <Greet name= 'hmem' lastName='hamoum'/>
      <Skan age='45'/> */}
      <ProfileComp fullName='skandar swayah' bio=> </ProfileComp>
    </div>
  );
}

export default App;
