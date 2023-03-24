import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import NameListAndKey from './components/NameListAndKey';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
import './appStyles.css'
import styles from './appStyles.module.css'
function App() {
  return (
    <div className="App">

    {/* function component */}
      {/* <Greet name="Bruce" heroname="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroname="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroname="Wonder Woman"/> */}

    {/* class component */}
       {/* <Welcome name="Bruce" heroname="Batman"/>
       <Welcome name="Clark" heroname="Superman"/>
       <Welcome name="Diana" heroname="Wonder Woman"/> */}

       {/* <Hello/> */}

       {/* <Message /> */}

       {/* <Counter /> */}

       {/* <FunctionClick /> */}

       {/* <ClassClick /> */}

       <EventBind />

       {/* <ParentComponent /> */}
       
       {/* <UserGreeting /> */}

       {/* <NameList /> */}

       {/* <NameListAndKey /> */}

       {/* <Stylesheet primary={true}/> */}

       {/* <Inline />
       
       
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}

        {/* <Form /> */}

        {/* <LifecycleA /> */}

        {/* <LifecycleB /> */}
    </div>
  );
}

export default App;
