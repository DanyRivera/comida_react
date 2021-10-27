import React from 'react';
import Header from './components/layout/Header';
import MenuState from './context/menu/menuState';
import Main from './components/layout/Main';

function App() {

  return (
    <>
      <MenuState>
        <Header />
      </MenuState>
      <Main/>
    </>
  );
}

export default App;
