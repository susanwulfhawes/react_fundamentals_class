import './App.css';
import NameProp from './components/NameProp'
import Contacts from './components/challenges/day02/Contacts'
import State from './components/State'

function App() {    // this is a root component
  const name = 'Susan'
  const profile = {name: "Sebastian", age: 19, school: "Eckerd College", gradYear: 2024}
  return (
    <div className="App">
        <NameProp name="Susan" />
        <Contacts {...profile} />
        <hr/>
        <State />
    </div>
    
  );
}

export default App;
