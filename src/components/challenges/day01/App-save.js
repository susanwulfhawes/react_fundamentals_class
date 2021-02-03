//import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './components/Header'
import Me from './components/challenges/day01/Me'
import Footer from './components/challenges/day01/Footer'
import Home from './components/challenges/day01/Home'

function App() {    // this is a root component
  const name = 'Susan'
  return (
    <div className="App">
      <Home />
      <h1>Welcome to React {name}</h1>
      <h2>We just modified out root App component</h2>
      <Header /> { /* this is how you mount a component */ }
      <Me />
      <Footer />
    </div>
  );
}

// function App(){
//   return (
//     <div className="App">
//       test
//     </div>
//   );
// }

export default App;
