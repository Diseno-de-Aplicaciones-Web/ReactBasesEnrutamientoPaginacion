import './App.css';
import Pag1 from './views/Pag1';
import Pag2 from './views/Pag2';
import { useState, useEffect } from 'react';

function App() {

  const [ currentView, setCurrentView ] = useState(undefined)

  useEffect(
    ()=>{
      switch ( window.location.pathname ) {
        case "/p1/":
          setCurrentView(Pag1)
          break
        case "/p2/":
          setCurrentView(Pag2)
          break
        default:
          setCurrentView(Pag1)
          break
      }
    },
    []
  )

  return (
    <>
      <h1>Bases paginación</h1>
      <button onClick={()=>{setCurrentView(Pag1)}}>Páxina 1</button>
      <button onClick={()=>{setCurrentView(Pag2)}}>Páxina 2</button>
      <a href='/p1/'>Paxina 1</a>
      <a href='/p2/'>Paxina 2</a>
      {currentView}
    </>
  );
}

export default App;
