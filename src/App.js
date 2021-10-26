import React from 'react';
import Header from './components/layout/Header';
import MenuState from './context/menu/menuState';

function App() {

  return (
    <MenuState>
      <Header />
    </MenuState>
  );
}

export default App;
