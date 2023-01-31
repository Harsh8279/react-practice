import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
// import Mycomponent from './components/Greet';

function App() {
  return (
    <div className="App">
      {/* <Mycomponent /> */}
      {/* <Greet /> */}
      {/* <Welcome /> */}
      {/* <Hello /> */}

      <Greet name="Harsh" heroName="Hanuman"/>
      <Greet name="Swayam" heroName="Batman"/>
      <Greet name="Shivaay" heroName="Superman"/>

    </div>
  );
}

export default App;
