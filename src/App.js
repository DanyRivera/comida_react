import React, {useEffect, useState} from 'react';
import Header from './components/layout/Header';
import MenuState from './context/menu/menuState';
import Main from './components/layout/Main';
import Mapa from './components/layout/Mapa';
import Contacto from './components/layout/Contacto';
import Footer from './components/layout/Footer';
import Up from './components/ui/Up';

function App() {

  const [offsetY, setOffsetY] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  const handleSacroll = () => {
    setOffsetY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleSacroll);

    if(offsetY > 300) {
      setMostrar(true);
    } else {
      setMostrar(false);
    }

  }, [offsetY])

  return (
    <>
      <MenuState>
        <Header />
      </MenuState>
      {mostrar && <Up/>}
      <Main/>
      <Mapa />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
