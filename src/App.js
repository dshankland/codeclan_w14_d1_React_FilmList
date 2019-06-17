import React from 'react';
import './App.css';
import FilmBox from './containers/FilmBox';
import Header from './components/Header';
import ViewMore from './components/ViewMore';

function App() {
  // javascript stuff in here
  return (
    <div>
      <Header/>
      <FilmBox/>
      <ViewMore/>
    </div>
  );
}

export default App;
