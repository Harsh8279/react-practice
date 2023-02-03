import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Subscribe from './components/Subscribe';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
// import Mycomponent from './components/Greet';

function App() {
  return (
    <div className="App">
      {/* <Mycomponent /> */}
      {/* <Greet /> */}
      {/* <Welcome /> */}
      {/* <Hello /> */}

      {/* <Greet name="Harsh" heroName="Hanuman">
        <p>This is Children Props</p>
      </Greet>

      <Greet name="Swayam" heroName="Batman">
        <button>Click Me</button>
      </Greet>
      <Greet name="Shivaay" heroName="Superman" /> */}
      {/* 
      <Welcome name="Harsh" heroName="Hanuman">
        <button>hit Me!!</button>
        </Welcome>
      <Welcome name="Swayam" heroName="Batman"/>
      <Welcome name="Shivaay" heroName="Superman"/> */}

      {/* <Message/> */}

      {/* <Counter /> */}

      {/* <Greet name="Harsh" heroName="Hanuman"/> */}
      {/* <Welcome name="Harsh" heroName="Hanuman"/> */}
      {/* <FunctionClick /> */}

      {/* <ClassClick /> */}

      {/* <Subscribe/> */}

      {/* <ParentComponent/> */}
      <UserGreeting/>

    </div>
  );
}

export default App;
