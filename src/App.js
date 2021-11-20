import React from 'react';
import './App.css';
import Sidebar  from './Sidebar';
import Chat from './Chat';

function App() {
  return(
    <div className="app">
      <h2>Discord Clone in Development!</h2>
      <Sidebar />
      <Chat />
    </div>
  );
}
  
export default App;