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
import FragmentDemo from './components/FragmentDemo';
import MemoCompoenent from './components/MemoCompoenent';
import PortalDemo from './components/PortalDeamo';
import PortalExample from './components/PortalExample';
import NoPortalExample from './components/NoPoertalExample';



function App() {
  return (
    // <div className="App">
    //     <PortalDemo />
    // </div>
    <>
      <div className="clipping-container">
        <NoPortalExample  />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </>
  );
}

export default App;
