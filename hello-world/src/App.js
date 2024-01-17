import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Greet1 from './components/Greet1';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hello1 from './components/Hello-javas';
import Message from './components/Message';
import Message1 from './components/Message1';
import Counter1 from './components/Counter-1';
import Counter from './components/Counter';
import ParentComponent from './components/ParenComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import ListPerson from './components/ListPerson';



function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Greet1></Greet1>
      <Welcome></Welcome> */}
      {/* <Hello1></Hello1> */}
      {/* <Hello name = "Bruce" heroName="Batman">This is children props</Hello>
      <Welcome name = "Midoriya" heroName="Deku"></Welcome> */}
      {/* <Message1></Message1> */}
      {/* <Counter></Counter> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      <ListPerson>+</ListPerson>
    </div>
  );
}

export default App;
