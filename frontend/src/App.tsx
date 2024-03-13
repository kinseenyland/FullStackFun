import React from 'react';
import Header from './Header';
import FoodList from './Food/FoodList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Full Stack React & ASP.NET" />
      <FoodList />
    </div>
  );
}

export default App;
