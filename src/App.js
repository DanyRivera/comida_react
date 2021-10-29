import React from 'react';
import Header from './components/layout/Header';
import MenuState from './context/menu/menuState';
import Main from './components/layout/Main';
import Mapa from './components/layout/Mapa';

function App() {

  return (
    <>
      <MenuState>
        <Header />
      </MenuState>
      <Main/>
      <Mapa />
    </>
  );
}

export default App;
