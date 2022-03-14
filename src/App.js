import './App.css';
import {useState, useEffect} from 'react'
import { ValorantProvider } from './context/ValorantContext';
import Agents from './components/Agents';

function App() {



  return (
    <ValorantProvider> 
    <div className="App">
      <Agents />
    </div>
    </ValorantProvider>
  );
}

export default App;
