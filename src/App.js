import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello'
import Content from './learn_component/Content'
import Sidebar from './learn_component/Sidebar'
function App() {
  return (
    <div className="App">
      <div id="main">
          <Content></Content>
          <Sidebar></Sidebar>
      </div>
    </div>
  );
}
export default App;
