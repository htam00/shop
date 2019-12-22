import React from 'react';
import ProductsList from './components/Products';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductsList />
      </header>
    </div>
  );
}

export default App;
